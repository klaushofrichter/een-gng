import { getFirestore, collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, startAfter, writeBatch, deleteField } from "firebase/firestore";
import app from '../firebase';
import securityService from './security';

/**
 * Optimized Database Service for Captures and Images
 * 
 * Uses two collections for scalability:
 * - captures: lightweight capture metadata
 * - capture_images: individual image documents
 */
class DatabaseService {
  constructor() {
    this.db = getFirestore(app);
  }

  // ========================================
  // CAPTURE OPERATIONS (Lightweight)
  // ========================================

  /**
   * Create a new capture document (without images)
   * @param {Object} captureData - Capture metadata
   * @returns {Promise<string>} Created capture ID
   */
  async createCapture(captureData) {
    try {
      // Validate and sanitize input using proper security service methods
      const sanitizedData = {
        name: securityService.sanitizeInput(captureData.name?.trim() || ''),
        description: securityService.sanitizeInput(captureData.description?.trim() || ''),
        cameraId: securityService.sanitizeInput(captureData.cameraId?.trim() || ''),
        startDate: securityService.sanitizeInput(captureData.startDate?.trim() || ''),
        duration: captureData.duration,
        interval: captureData.interval,
        eenUserEmailField: captureData.eenUserEmailField,
        createdAt: new Date().toISOString(),
        imageCount: 0,
        status: 'created',
        thumbnail: captureData.thumbnail || null
      };

      // Remove any images field if accidentally passed
      delete sanitizedData.images;

      const docRef = await addDoc(collection(this.db, "captures"), sanitizedData);
      
      console.log(`[DatabaseService] Created capture: ${docRef.id}`);
      return docRef.id;
    } catch (error) {
      console.error('[DatabaseService] Error creating capture:', error);
      throw error;
    }
  }

  /**
   * Get all captures for a user
   * @param {string} userEmail - User's email
   * @returns {Promise<Array>} Array of capture documents
   */
  async getCaptures(userEmail) {
    try {
      const q = query(
        collection(this.db, "captures"), 
        where("eenUserEmailField", "==", userEmail)
        // Temporarily commenting out orderBy to avoid composite index requirement
        // orderBy("createdAt", "desc")
        // TODO: Uncomment after creating composite index in Firebase Console
      );
      
      const querySnapshot = await getDocs(q);
      const captures = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Sort in JavaScript as temporary workaround
      captures.sort((a, b) => {
        const dateA = new Date(a.createdAt || 0);
        const dateB = new Date(b.createdAt || 0);
        return dateB - dateA; // Descending order (newest first)
      });
      
      console.log(`[DatabaseService] Retrieved ${captures.length} captures for user`);
      return captures;
    } catch (error) {
      console.error('[DatabaseService] Error fetching captures:', error);
      throw error;
    }
  }

  /**
   * Update capture metadata (progress, status, etc.)
   * @param {string} captureId - Capture ID
   * @param {Object} updates - Fields to update
   */
  async updateCapture(captureId, updates) {
    try {
      // Remove any images field if accidentally passed
      const sanitizedUpdates = { ...updates };
      delete sanitizedUpdates.images;

      const captureRef = doc(this.db, "captures", captureId);
      await updateDoc(captureRef, sanitizedUpdates);
      
      console.log(`[DatabaseService] Updated capture ${captureId}`);
    } catch (error) {
      console.error('[DatabaseService] Error updating capture:', error);
      throw error;
    }
  }

  /**
   * Delete a capture and all its images
   * @param {string} captureId - Capture ID
   */
  async deleteCapture(captureId) {
    try {
      // Delete all images first
      await this.deleteAllImages(captureId);
      
      // Delete the capture document
      const captureRef = doc(this.db, "captures", captureId);
      await deleteDoc(captureRef);
      
      console.log(`[DatabaseService] Deleted capture ${captureId} and all images`);
    } catch (error) {
      console.error('[DatabaseService] Error deleting capture:', error);
      throw error;
    }
  }

  // ========================================
  // IMAGE OPERATIONS (Scalable)
  // ========================================

  /**
   * Add multiple images to a capture (batch operation)
   * @param {string} captureId - Capture ID
   * @param {Array} imageDataArray - Array of image metadata objects
   * @param {string} userEmail - User's email for security
   */
  async addImages(captureId, imageDataArray, userEmail) {
    try {
      if (!imageDataArray || imageDataArray.length === 0) {
        return;
      }

      // Process in batches to avoid Firestore limits (500 operations per batch)
      const batchSize = 400; // Leave some room for safety
      const batches = [];
      
      for (let i = 0; i < imageDataArray.length; i += batchSize) {
        const batchData = imageDataArray.slice(i, i + batchSize);
        batches.push(batchData);
      }

      let totalAdded = 0;

      for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
        const batch = writeBatch(this.db);
        const batchData = batches[batchIndex];

        batchData.forEach((imageData, index) => {
          // Create predictable document ID
          const imageId = `${captureId}_image-${String(imageData.index).padStart(4, '0')}`;
          const imageRef = doc(this.db, "capture_images", imageId);

          const sanitizedImageData = {
            captureId,
            index: imageData.index,
            timestamp: securityService.sanitizeInput(imageData.timestamp || ''),
            downloadUrl: securityService.sanitizeInput(imageData.downloadUrl || ''),
            storagePath: securityService.sanitizeInput(imageData.storagePath || ''),
            size: imageData.size || 0,
            uploadedAt: imageData.uploadedAt || new Date().toISOString(),
            eenUserEmailField: userEmail
          };

          batch.set(imageRef, sanitizedImageData);
        });

        await batch.commit();
        totalAdded += batchData.length;
        
        console.log(`[DatabaseService] Batch ${batchIndex + 1}/${batches.length}: Added ${batchData.length} images (Total: ${totalAdded}/${imageDataArray.length})`);
      }

      // Update capture with final image count
      await this.updateCapture(captureId, {
        imageCount: totalAdded,
        processedAt: new Date().toISOString(),
        status: 'completed'
      });

      console.log(`[DatabaseService] Successfully added ${totalAdded} images to capture ${captureId}`);
    } catch (error) {
      console.error('[DatabaseService] Error adding images:', error);
      throw error;
    }
  }

  /**
   * Get images for a capture with pagination
   * @param {string} captureId - Capture ID
   * @param {Object} options - Query options { limit, startAfterIndex, orderBy }
   * @returns {Promise<Array>} Array of image documents
   */
  async getImages(captureId, options = {}) {
    try {
      const {
        limit: limitCount = 50,
        startAfterIndex = null,
        orderBy: orderField = 'index'
      } = options;

      // Simple query without orderBy to avoid composite index requirement
      let q = query(
        collection(this.db, "capture_images"),
        where("captureId", "==", captureId),
        limit(limitCount)
      );

      // Note: Removed orderBy to avoid composite index requirement
      // We'll sort in JavaScript instead

      const querySnapshot = await getDocs(q);
      const images = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Sort in JavaScript by the specified field
      images.sort((a, b) => {
        if (orderField === 'index') {
          return (a.index || 0) - (b.index || 0);
        } else if (orderField === 'timestamp') {
          return new Date(a.timestamp || 0) - new Date(b.timestamp || 0);
        }
        return 0;
      });

      console.log(`[DatabaseService] Retrieved ${images.length} images for capture ${captureId}`);
      return images;
    } catch (error) {
      console.error('[DatabaseService] Error fetching images:', error);
      throw error;
    }
  }

  /**
   * Get images in a specific timestamp range
   * @param {string} captureId - Capture ID
   * @param {string} startTime - ISO timestamp
   * @param {string} endTime - ISO timestamp
   * @returns {Promise<Array>} Array of image documents
   */
  async getImagesByTimeRange(captureId, startTime, endTime) {
    try {
      const q = query(
        collection(this.db, "capture_images"),
        where("captureId", "==", captureId),
        where("timestamp", ">=", startTime),
        where("timestamp", "<=", endTime),
        orderBy("timestamp")
      );

      const querySnapshot = await getDocs(q);
      const images = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      console.log(`[DatabaseService] Retrieved ${images.length} images in time range`);
      return images;
    } catch (error) {
      console.error('[DatabaseService] Error fetching images by time range:', error);
      throw error;
    }
  }

  /**
   * Delete all images for a capture
   * @param {string} captureId - Capture ID
   */
  async deleteAllImages(captureId) {
    try {
      // Get all images for this capture
      const q = query(
        collection(this.db, "capture_images"),
        where("captureId", "==", captureId)
      );

      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        console.log(`[DatabaseService] No images found for capture ${captureId}`);
        return;
      }

      // Delete in batches
      const batchSize = 400;
      const docs = querySnapshot.docs;
      
      for (let i = 0; i < docs.length; i += batchSize) {
        const batch = writeBatch(this.db);
        const batchDocs = docs.slice(i, i + batchSize);
        
        batchDocs.forEach(doc => {
          batch.delete(doc.ref);
        });
        
        await batch.commit();
        console.log(`[DatabaseService] Deleted batch of ${batchDocs.length} images`);
      }

      console.log(`[DatabaseService] Deleted ${docs.length} images for capture ${captureId}`);
    } catch (error) {
      console.error('[DatabaseService] Error deleting images:', error);
      throw error;
    }
  }

  // ========================================
  // UTILITY METHODS
  // ========================================

  /**
   * Get capture statistics (image count, size, etc.)
   * @param {string} captureId - Capture ID
   * @returns {Promise<Object>} Statistics object
   */
  async getCaptureStats(captureId) {
    try {
      const q = query(
        collection(this.db, "capture_images"),
        where("captureId", "==", captureId)
      );

      const querySnapshot = await getDocs(q);
      
      let totalSize = 0;
      querySnapshot.docs.forEach(doc => {
        const data = doc.data();
        totalSize += data.size || 0;
      });

      return {
        imageCount: querySnapshot.size,
        totalSize,
        averageSize: querySnapshot.size > 0 ? Math.round(totalSize / querySnapshot.size) : 0
      };
    } catch (error) {
      console.error('[DatabaseService] Error getting capture stats:', error);
      return { imageCount: 0, totalSize: 0, averageSize: 0 };
    }
  }

  /**
   * Update the download URL for a specific image (for token rotation)
   * @param {string} imageId - Image document ID
   * @param {string} newDownloadUrl - New download URL with fresh token
   */
  async updateImageUrl(imageId, newDownloadUrl) {
    try {
      const imageRef = doc(this.db, "capture_images", imageId);
      await updateDoc(imageRef, {
        downloadUrl: securityService.sanitizeInput(newDownloadUrl),
        tokenRotatedAt: new Date().toISOString()
      });
      
      console.log(`[DatabaseService] Updated download URL for image ${imageId}`);
    } catch (error) {
      console.error(`[DatabaseService] Error updating image URL for ${imageId}:`, error);
      throw error;
    }
  }

  /**
   * Update image with Gemini analysis results
   * @param {string} imageId - Image document ID
   * @param {Object} analysisResults - Results from Gemini analysis
   */
  async updateImageAnalysis(imageId, analysisResults) {
    try {
      const imageRef = doc(this.db, "capture_images", imageId);
      
      // Sanitize and structure the analysis data
      const sanitizedAnalysis = {
        geminiAnalysis: {
          success: analysisResults.success || false,
          description: securityService.sanitizeInput(analysisResults.description || ''),
          peopleCount: analysisResults.peopleCount,
          confidence: securityService.sanitizeInput(analysisResults.confidence || 'unknown'),
          analysisTimestamp: analysisResults.analysisTimestamp || new Date().toISOString(),
          error: analysisResults.error ? securityService.sanitizeInput(analysisResults.error) : null
        }
      };

      await updateDoc(imageRef, sanitizedAnalysis);
      
      console.log(`[DatabaseService] Updated Gemini analysis for image ${imageId}`);
    } catch (error) {
      console.error(`[DatabaseService] Error updating image analysis for ${imageId}:`, error);
      throw error;
    }
  }

  /**
   * Update capture with analysis summary
   * @param {string} captureId - Capture ID
   * @param {Object} analysisSummary - Summary of analysis results
   */
  async updateCaptureAnalysisSummary(captureId, analysisSummary) {
    try {
      const captureRef = doc(this.db, "captures", captureId);
      
      const sanitizedSummary = {
        analysisResults: {
          totalImages: analysisSummary.totalImages || 0,
          analyzedImages: analysisSummary.analyzedImages || 0,
          successfulAnalyses: analysisSummary.successfulAnalyses || 0,
          totalPeopleDetected: analysisSummary.totalPeopleDetected || 0,
          averagePeoplePerImage: analysisSummary.averagePeoplePerImage || 0,
          analysisCompletedAt: new Date().toISOString(),
          status: securityService.sanitizeInput(analysisSummary.status || 'completed')
        }
      };

      await updateDoc(captureRef, sanitizedSummary);
      
      console.log(`[DatabaseService] Updated analysis summary for capture ${captureId}`);
    } catch (error) {
      console.error(`[DatabaseService] Error updating capture analysis summary for ${captureId}:`, error);
      throw error;
    }
  }

  /**
   * Get images that need analysis (don't have geminiAnalysis field)
   * @param {string} captureId - Capture ID
   * @param {number} limit - Maximum number of images to return
   * @returns {Promise<Array>} Array of images needing analysis
   */
  async getImagesNeedingAnalysis(captureId, limit = 50) {
    try {
      // Get all images for the capture
      const allImages = await this.getImages(captureId, { limit: 10000 });
      
      // Filter out images that already have analysis
      const imagesNeedingAnalysis = allImages.filter(image => !image.geminiAnalysis);
      
      // Return up to the specified limit
      const result = imagesNeedingAnalysis.slice(0, limit);
      
      console.log(`[DatabaseService] Found ${result.length} images needing analysis out of ${allImages.length} total`);
      return result;
    } catch (error) {
      console.error('[DatabaseService] Error getting images needing analysis:', error);
      throw error;
    }
  }

  /**
   * Remove all Gemini analysis results from images in a capture
   * @param {string} captureId - Capture ID
   * @returns {Promise<number>} Number of images reset
   */
  async resetCaptureAnalysis(captureId) {
    try {
      console.log(`[DatabaseService] Resetting analysis for capture ${captureId}`);
      
      // Get all images for this capture
      const images = await this.getImages(captureId, { limit: 10000 });
      
      // Filter images that have analysis to reset
      const imagesWithAnalysis = images.filter(image => image.geminiAnalysis);
      
      if (imagesWithAnalysis.length === 0) {
        console.log(`[DatabaseService] No analysis data found to reset for capture ${captureId}`);
        return 0;
      }

      // Reset analysis in batches
      const batchSize = 400;
      let resetCount = 0;
      
      for (let i = 0; i < imagesWithAnalysis.length; i += batchSize) {
        const batch = writeBatch(this.db);
        const batchImages = imagesWithAnalysis.slice(i, i + batchSize);
        
        batchImages.forEach(image => {
          const imageRef = doc(this.db, "capture_images", image.id);
          // Use FieldValue.delete() to remove the field entirely
          batch.update(imageRef, {
            geminiAnalysis: deleteField()
          });
        });
        
        await batch.commit();
        resetCount += batchImages.length;
        
        console.log(`[DatabaseService] Reset batch of ${batchImages.length} images (Total: ${resetCount}/${imagesWithAnalysis.length})`);
      }

      // Also reset the capture-level analysis summary
      await this.resetCaptureAnalysisSummary(captureId);
      
      console.log(`[DatabaseService] Successfully reset analysis for ${resetCount} images in capture ${captureId}`);
      return resetCount;
    } catch (error) {
      console.error(`[DatabaseService] Error resetting analysis for capture ${captureId}:`, error);
      throw error;
    }
  }

  /**
   * Remove analysis summary from capture document
   * @param {string} captureId - Capture ID
   */
  async resetCaptureAnalysisSummary(captureId) {
    try {
      const captureRef = doc(this.db, "captures", captureId);
      await updateDoc(captureRef, {
        analysisResults: deleteField()
      });
      
      console.log(`[DatabaseService] Reset analysis summary for capture ${captureId}`);
    } catch (error) {
      console.error(`[DatabaseService] Error resetting capture analysis summary for ${captureId}:`, error);
      throw error;
    }
  }

  /**
   * Debug method to check analysis results for a capture
   * @param {string} captureId - Capture ID to check
   */
  async debugAnalysisResults(captureId) {
    try {
      console.log(`[DatabaseService] Debugging analysis results for capture: ${captureId}`)
      
      // Get capture summary
      const captureRef = doc(this.db, "captures", captureId);
      const captureDoc = await getDoc(captureRef);
      
      if (captureDoc.exists()) {
        const captureData = captureDoc.data();
        console.log('📊 Capture Analysis Summary:', captureData.analysisResults || 'No summary found');
      }
      
      // Get images with analysis
      const images = await this.getImages(captureId, { limit: 10000 });
      const analyzedImages = images.filter(img => img.geminiAnalysis);
      const unanalyzedImages = images.filter(img => !img.geminiAnalysis);
      
      console.log(`🔍 Analysis Status:`)
      console.log(`  - Total images: ${images.length}`)
      console.log(`  - Analyzed images: ${analyzedImages.length}`)
      console.log(`  - Unanalyzed images: ${unanalyzedImages.length}`)
      
      if (analyzedImages.length > 0) {
        console.log('\n📋 Sample Analysis Results:')
        analyzedImages.slice(0, 3).forEach((img, index) => {
          console.log(`  Image ${index + 1}:`, {
            id: img.id,
            peopleCount: img.geminiAnalysis?.peopleCount,
            success: img.geminiAnalysis?.success,
            description: img.geminiAnalysis?.description?.substring(0, 50) + '...'
          })
        })
      }
      
      return {
        totalImages: images.length,
        analyzedImages: analyzedImages.length,
        unanalyzedImages: unanalyzedImages.length,
        sampleResults: analyzedImages.slice(0, 3).map(img => ({
          id: img.id,
          analysis: img.geminiAnalysis
        }))
      }
    } catch (error) {
      console.error('[DatabaseService] Error debugging analysis results:', error);
      throw error;
    }
  }
}

// Create and export singleton instance
export const databaseService = new DatabaseService();

// Export class for testing
export { DatabaseService }; 