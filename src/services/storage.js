import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL, deleteObject, listAll } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions'
import securityService from './security'

/**
 * Storage Service for managing image uploads to Firebase Cloud Storage
 * Optimized for large image sequences (1000+ images)
 */
class StorageService {
  constructor() {
    // Configuration for large uploads
    this.maxConcurrentUploads = 5 // Parallel uploads
    this.batchSize = 10 // Firestore batch update size
    this.retryAttempts = 3
    this.retryDelay = 1000 // 1 second
  }

  /**
   * Securely determine URL type by validating the hostname
   * @param {string} url - The URL to check
   * @returns {string} 'Signed URL', 'Token URL', or 'Unknown URL'
   */
  getUrlType(url) {
    try {
      const urlObj = new URL(url)
      const hostname = urlObj.hostname
      
      // Check for Google Cloud Storage signed URLs
      if (hostname === 'storage.googleapis.com') {
        return 'Signed URL'
      }
      
      // Check for Firebase Storage token URLs
      if (hostname === 'firebasestorage.googleapis.com') {
        return 'Token URL'
      }
      
      return 'Unknown URL'
    } catch (error) {
      console.warn('[StorageService] Invalid URL format:', error)
      return 'Invalid URL'
    }
  }

  /**
   * Convert base64 data URL to Blob
   * @param {string} dataUrl - Base64 data URL (e.g., "data:image/jpeg;base64,...")
   * @returns {Blob} Blob object
   */
  dataUrlToBlob(dataUrl) {
    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
  }

  /**
   * Upload a single image to Firebase Storage with retry logic
   * @param {string} captureId - The capture ID
   * @param {number} imageIndex - The image index in the sequence
   * @param {string} base64Image - Base64 image data URL
   * @param {string} timestamp - ISO timestamp for the image
   * @param {number} attempt - Current retry attempt
   * @returns {Promise<{downloadUrl: string, storagePath: string}>} Upload result
   */
  async uploadImage(captureId, imageIndex, base64Image, timestamp, attempt = 1) {
    try {
      // Get current Firebase user for security validation
      const auth = getAuth()
      const currentUser = auth.currentUser
      
      // Debug: Log authentication details
      console.log('[StorageService] uploadImage called with:', {
        captureId,
        imageIndex,
        timestamp,
        attempt
      })
      
      if (currentUser) {
        console.log('[StorageService] Current user:', {
          uid: currentUser.uid,
          email: currentUser.email,
          emailVerified: currentUser.emailVerified
        })
        
        try {
          const idTokenResult = await currentUser.getIdTokenResult()
          console.log('[StorageService] Token claims:', {
            eenUserEmail: idTokenResult.claims.eenUserEmail,
            eenUserId: idTokenResult.claims.eenUserId,
            provider: idTokenResult.claims.provider,
            allClaims: idTokenResult.claims
          })
        } catch (tokenError) {
          console.error('[StorageService] Error getting token claims:', tokenError)
        }
      } else {
        console.error('[StorageService] No current user found!')
      }
      
      // Security validation
      securityService.validateFirebaseOperation('upload', currentUser)
      securityService.checkRateLimit('upload', 1000, 60000) // Max 1000 uploads per minute
      
      // Validate the base64 image data
      if (!base64Image || !base64Image.startsWith('data:image/')) {
        throw new Error('Invalid image data format')
      }
      // Create a blob from the base64 image
      const blob = this.dataUrlToBlob(base64Image)
      
      // Create storage path: captures/{captureId}/image_{index:03d}.jpg
      const fileName = `image_${String(imageIndex).padStart(3, '0')}.jpg`
      const storagePath = `captures/${captureId}/${fileName}`
      const storageRef = ref(storage, storagePath)
      
      // Add metadata including user email for security validation
      const metadata = {
        contentType: 'image/jpeg',
        customMetadata: {
          captureId: captureId,
          imageIndex: String(imageIndex),
          timestamp: timestamp,
          uploadedAt: new Date().toISOString(),
          eenUserEmail: currentUser?.email || 'unknown' // Add user email for Storage rules validation
        }
      }
      
      // Upload the blob
      const snapshot = await uploadBytes(storageRef, blob, metadata)
      
      // Generate signed URL for uniformity with rotated tokens
      let downloadUrl
      try {
        console.log(`[StorageService] Generating signed URL for ${storagePath}`)
        const functions = getFunctions()
        const generateSignedUrl = httpsCallable(functions, 'generateSignedUrl')
        
        const result = await generateSignedUrl({
          storagePath,
          captureId
        })
        
        downloadUrl = result.data.signedUrl
        console.log(`[StorageService] ✅ Generated signed URL for ${storagePath}`)
        console.log(`[StorageService] URL type: ${this.getUrlType(downloadUrl)}`)
        
      } catch (signedUrlError) {
        console.warn(`[StorageService] ❌ Failed to generate signed URL, falling back to token URL:`, signedUrlError)
        // Fallback to regular download URL if signed URL generation fails
        downloadUrl = await getDownloadURL(snapshot.ref)
        console.log(`[StorageService] 🔄 Using fallback token URL for ${storagePath}`)
      }
      
      return {
        downloadUrl,
        storagePath,
        size: snapshot.metadata.size,
        fullPath: snapshot.metadata.fullPath
      }
    } catch (error) {
      console.error(`[StorageService] Error uploading image ${imageIndex} (attempt ${attempt}):`, error)
      
      // Retry logic
      if (attempt < this.retryAttempts) {
        console.log(`[StorageService] Retrying upload for image ${imageIndex} (attempt ${attempt + 1})`)
        await new Promise(resolve => setTimeout(resolve, this.retryDelay * attempt))
        return this.uploadImage(captureId, imageIndex, base64Image, timestamp, attempt + 1)
      }
      
      throw new Error(`Failed to upload image ${imageIndex} after ${this.retryAttempts} attempts: ${error.message}`)
    }
  }

  /**
   * Upload multiple images with parallel processing and streaming updates
   * @param {string} captureId - The capture ID
   * @param {Array} images - Array of {index, image, timestamp} objects
   * @param {Function} onProgress - Progress callback (current, total)
   * @param {Function} onBatchComplete - Batch completion callback (results)
   * @returns {Promise<Array>} Array of upload results
   */
  async uploadImageSequence(captureId, images, onProgress = null, onBatchComplete = null) {
    const total = images.length
    const results = []
    let completed = 0
    
    console.log(`[StorageService] Starting optimized upload of ${total} images for capture ${captureId}`)
    console.log(`[StorageService] Using ${this.maxConcurrentUploads} parallel uploads`)
    
    // Process images in parallel batches
    const uploadPromises = []
    const semaphore = new Array(this.maxConcurrentUploads).fill(null)
    
    for (let i = 0; i < images.length; i++) {
      const { index, image, timestamp } = images[i]
      
      // Wait for an available slot
      const uploadPromise = this.waitForSlot(semaphore).then(async (slotIndex) => {
        try {
          const result = await this.uploadImage(captureId, index, image, timestamp)
          
          const uploadResult = {
            index,
            timestamp,
            ...result,
            success: true
          }
          
          results.push(uploadResult)
          completed++
          
          // Call progress callback
          if (onProgress) {
            onProgress(completed, total)
          }
          
          // Call batch completion callback every 10 uploads for streaming updates
          if (onBatchComplete && completed % 10 === 0) {
            onBatchComplete([...results]) // Send copy of current results
          }
          
          return uploadResult
          
        } catch (error) {
          console.error(`[StorageService] Failed to upload image ${index}:`, error)
          const errorResult = {
            index,
            timestamp,
            success: false,
            error: error.message
          }
          
          results.push(errorResult)
          completed++
          
          if (onProgress) {
            onProgress(completed, total)
          }
          
          return errorResult
        } finally {
          // Release the slot
          semaphore[slotIndex] = null
        }
      })
      
      uploadPromises.push(uploadPromise)
    }
    
    // Wait for all uploads to complete
    await Promise.all(uploadPromises)
    
    // Final batch completion callback
    if (onBatchComplete) {
      onBatchComplete([...results])
    }
    
    const successCount = results.filter(r => r.success).length
    console.log(`[StorageService] Upload complete: ${successCount}/${total} images uploaded successfully`)
    
    return results
  }

  /**
   * Wait for an available upload slot (semaphore implementation)
   * @param {Array} semaphore - Array representing available slots
   * @returns {Promise<number>} Available slot index
   */
  async waitForSlot(semaphore) {
    return new Promise((resolve) => {
      const checkSlot = () => {
        const availableSlot = semaphore.findIndex(slot => slot === null)
        if (availableSlot !== -1) {
          semaphore[availableSlot] = true // Mark slot as occupied
          resolve(availableSlot)
        } else {
          // No slots available, check again in 10ms
          setTimeout(checkSlot, 10)
        }
      }
      checkSlot()
    })
  }

  /**
   * Delete all images for a capture
   * @param {string} captureId - The capture ID
   * @returns {Promise<void>}
   */
  async deleteCapture(captureId) {
    try {
      const captureRef = ref(storage, `captures/${captureId}`)
      const listResult = await listAll(captureRef)
      
      console.log(`[StorageService] Deleting ${listResult.items.length} images for capture ${captureId}`)
      
      // Delete files in parallel batches
      const deletePromises = []
      for (let i = 0; i < listResult.items.length; i += this.maxConcurrentUploads) {
        const batch = listResult.items.slice(i, i + this.maxConcurrentUploads)
        const batchPromises = batch.map(itemRef => deleteObject(itemRef))
        deletePromises.push(Promise.all(batchPromises))
      }
      
      await Promise.all(deletePromises)
      
      console.log(`[StorageService] Successfully deleted all images for capture ${captureId}`)
    } catch (error) {
      console.error(`[StorageService] Error deleting capture ${captureId}:`, error)
      throw new Error(`Failed to delete capture images: ${error.message}`)
    }
  }

  /**
   * Get storage usage statistics
   * @param {string} captureId - The capture ID
   * @returns {Promise<{fileCount: number, totalSize: number}>}
   */
  async getCaptureStats(captureId) {
    try {
      const captureRef = ref(storage, `captures/${captureId}`)
      const listResult = await listAll(captureRef)
      
      return {
        fileCount: listResult.items.length,
        totalSize: 0 // Avoid expensive metadata calls for now
      }
    } catch (error) {
      console.error(`[StorageService] Error getting capture stats:`, error)
      return { fileCount: 0, totalSize: 0 }
    }
  }

  /**
   * Upload a file to Firebase Storage
   * @param {File} file - The file to upload
   * @param {string} path - The storage path
   * @returns {Promise<string>} Download URL
   */
  async uploadFile(file, path) {
    // Get current Firebase user for security validation
    const auth = getAuth()
    const currentUser = auth.currentUser
    
    // Security validation
    securityService.validateFirebaseOperation('upload', currentUser);
    securityService.validateFileUpload(file);
    
    try {
      const storageRef = ref(storage, path);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      securityService.logSecurityEvent('file_uploaded', { 
        path, 
        fileSize: file.size, 
        fileType: file.type 
      });
      
      return downloadURL;
    } catch (error) {
      securityService.logSecurityEvent('file_upload_failed', { 
        path, 
        error: error.message 
      });
      throw error;
    }
  }

  /**
   * Delete a file from Firebase Storage
   * @param {string} path - The storage path
   * @returns {Promise<void>}
   */
  async deleteFile(path) {
    // Get current Firebase user for security validation
    const auth = getAuth()
    const currentUser = auth.currentUser
    
    // Security validation
    securityService.validateFirebaseOperation('delete', currentUser);
    
    try {
      const storageRef = ref(storage, path);
      await deleteObject(storageRef);
      
      securityService.logSecurityEvent('file_deleted', { path });
    } catch (error) {
      securityService.logSecurityEvent('file_delete_failed', { 
        path, 
        error: error.message 
      });
      throw error;
    }
  }

  /**
   * List files in a storage path
   * @param {string} path - The storage path
   * @returns {Promise<Array>} List of file references
   */
  async listFiles(path) {
    // Get current Firebase user for security validation
    const auth = getAuth()
    const currentUser = auth.currentUser
    
    // Security validation
    securityService.validateFirebaseOperation('read', currentUser);
    
    try {
      const storageRef = ref(storage, path);
      const result = await listAll(storageRef);
      
      securityService.logSecurityEvent('files_listed', { 
        path, 
        count: result.items.length 
      });
      
      return result.items;
    } catch (error) {
      securityService.logSecurityEvent('files_list_failed', { 
        path, 
        error: error.message 
      });
      throw error;
    }
  }

  /**
   * Rotate download URL tokens for a capture's images
   * This invalidates old URLs and generates new ones for security
   * @param {string} captureId - The capture ID
   * @param {Function} onProgress - Progress callback (current, total)
   * @returns {Promise<{rotated: number, failed: number, results: Array}>}
   */
  async rotateImageTokens(captureId, onProgress = null) {
    try {
      console.log(`[StorageService] Starting token rotation for capture ${captureId}`)
      
      // Get current Firebase user for security validation
      const auth = getAuth()
      const currentUser = auth.currentUser
      securityService.validateFirebaseOperation('update', currentUser)
      
      // Import database service dynamically to avoid circular dependency
      const { databaseService } = await import('./database')
      
      // Get all images for this capture
      const images = await databaseService.getImages(captureId, { limit: 10000 })
      console.log(`[StorageService] Found ${images.length} images to rotate tokens for`)
      
      if (images.length === 0) {
        return { rotated: 0, failed: 0, results: [] }
      }
      
      const results = []
      let rotated = 0
      let failed = 0
      
      // Process images in batches to avoid overwhelming Firebase
      const batchSize = 10
      for (let i = 0; i < images.length; i += batchSize) {
        const batch = images.slice(i, i + batchSize)
        
        const batchPromises = batch.map(async (image) => {
          try {
            // Get storage path for the image
            const storagePath = `captures/${captureId}/image_${String(image.index).padStart(3, '0')}.jpg`
            
            // Generate new signed URL using the same function as upload
            let newDownloadUrl
            try {
              console.log(`[StorageService] Rotating to signed URL for image ${image.index}`)
              const functions = getFunctions()
              const generateSignedUrl = httpsCallable(functions, 'generateSignedUrl')
              
              const result = await generateSignedUrl({
                storagePath,
                captureId
              })
              
              newDownloadUrl = result.data.signedUrl
              console.log(`[StorageService] ✅ Generated new signed URL for image ${image.index}`)
              console.log(`[StorageService] URL type: ${this.getUrlType(newDownloadUrl)}`)
              
            } catch (signedUrlError) {
              console.warn(`[StorageService] ❌ Failed to generate signed URL for rotation, falling back to token URL:`, signedUrlError)
              // Fallback to regular download URL if signed URL generation fails
              const storageRef = ref(storage, storagePath)
              newDownloadUrl = await getDownloadURL(storageRef)
              console.log(`[StorageService] 🔄 Using fallback token URL for image ${image.index}`)
            }
            
            // Update the image document in Firestore with new URL
            await databaseService.updateImageUrl(image.id, newDownloadUrl)
            
            rotated++
            
            const result = {
              imageId: image.id,
              index: image.index,
              oldUrl: image.downloadUrl,
              newUrl: newDownloadUrl,
              success: true,
              rotatedAt: new Date().toISOString()
            }
            
            results.push(result)
            console.log(`[StorageService] Rotated token for image ${image.index}`)
            
            return result
            
          } catch (error) {
            failed++
            console.error(`[StorageService] Failed to rotate token for image ${image.index}:`, error)
            
            const result = {
              imageId: image.id,
              index: image.index,
              success: false,
              error: error.message
            }
            
            results.push(result)
            return result
          }
        })
        
        // Wait for batch to complete
        await Promise.all(batchPromises)
        
        // Call progress callback
        if (onProgress) {
          const completed = Math.min(i + batchSize, images.length)
          onProgress(completed, images.length)
        }
        
        // Small delay between batches to be nice to Firebase
        if (i + batchSize < images.length) {
          await new Promise(resolve => setTimeout(resolve, 100))
        }
      }
      
      console.log(`[StorageService] Token rotation complete: ${rotated} rotated, ${failed} failed`)
      
      // Log security event
      securityService.logSecurityEvent('tokens_rotated', {
        captureId,
        rotated,
        failed,
        totalImages: images.length
      })
      
      return { rotated, failed, results }
      
    } catch (error) {
      console.error(`[StorageService] Error rotating tokens for capture ${captureId}:`, error)
      securityService.logSecurityEvent('token_rotation_failed', {
        captureId,
        error: error.message
      })
      throw new Error(`Failed to rotate tokens: ${error.message}`)
    }
  }

  /**
   * Check if image tokens need rotation based on age
   * @param {string} captureId - The capture ID
   * @param {number} maxAgeHours - Maximum age in hours before rotation needed
   * @returns {Promise<{needsRotation: boolean, imageCount: number, oldestTokenAge: number}>}
   */
  async checkTokenRotationNeeded(captureId, maxAgeHours = 24 * 7) { // Default: 1 week
    try {
      // Import database service dynamically
      const { databaseService } = await import('./database')
      
      // Get images for this capture
      const images = await databaseService.getImages(captureId, { limit: 1 })
      
      if (images.length === 0) {
        return { needsRotation: false, imageCount: 0, oldestTokenAge: 0 }
      }
      
      // Check the age of the first image's token (assuming all were created together)
      const firstImage = images[0]
      const uploadedAt = new Date(firstImage.uploadedAt || firstImage.timestamp)
      const ageHours = (Date.now() - uploadedAt.getTime()) / (1000 * 60 * 60)
      
      return {
        needsRotation: ageHours > maxAgeHours,
        imageCount: images.length,
        oldestTokenAge: ageHours
      }
      
    } catch (error) {
      console.error(`[StorageService] Error checking token rotation need:`, error)
      return { needsRotation: false, imageCount: 0, oldestTokenAge: 0 }
    }
  }
}

// Create and export a singleton instance
export const storageService = new StorageService()

// Export the class for testing or multiple instances if needed
export { StorageService } 