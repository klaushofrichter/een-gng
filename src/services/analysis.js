import { geminiService } from './gemini.js'
import { databaseService } from './database.js'

/**
 * Analysis Service - Orchestrates image analysis using Gemini AI
 * Coordinates between Gemini service and database storage
 */
class AnalysisService {
  constructor() {
    this.isAnalyzing = false
    this.currentProgress = null
  }

  /**
   * Analyze all images in a capture that haven't been analyzed yet
   * @param {string} captureId - The capture ID to analyze
   * @param {Function} onProgress - Progress callback function
   * @returns {Promise<Object>} Analysis summary
   */
  async analyzeCaptureImages(captureId, onProgress = null) {
    if (this.isAnalyzing) {
      throw new Error('Analysis already in progress. Please wait for current analysis to complete.')
    }

    try {
      this.isAnalyzing = true
      console.log(`[AnalysisService] Starting analysis for capture: ${captureId}`)

      // Get images that need analysis
      const imagesToAnalyze = await databaseService.getImagesNeedingAnalysis(captureId)
      
      if (imagesToAnalyze.length === 0) {
        console.log(`[AnalysisService] No images need analysis for capture ${captureId}`)
        return {
          success: true,
          message: 'All images have already been analyzed',
          totalImages: 0,
          analyzedImages: 0,
          successfulAnalyses: 0,
          failedAnalyses: 0
        }
      }

      console.log(`[AnalysisService] Found ${imagesToAnalyze.length} images to analyze`)

      // Set up progress tracking
      this.currentProgress = {
        captureId,
        totalImages: imagesToAnalyze.length,
        processed: 0,
        successful: 0,
        failed: 0,
        successfulCount: 0, // Track running count of successful analyses
        startTime: new Date()
      }

             // Analyze images using Gemini
       const analysisResults = await geminiService.analyzeImagesFromCapture(
         imagesToAnalyze,
         (progressData) => {
           // Update internal progress
           this.currentProgress.processed = progressData.current
           
           // Track success/failure counts incrementally since we only get currentResult
           if (progressData.currentResult) {
             if (progressData.currentResult.success) {
               // Count successful results by maintaining running totals
               if (!this.currentProgress.successfulCount) this.currentProgress.successfulCount = 0
               this.currentProgress.successfulCount++
               this.currentProgress.successful = this.currentProgress.successfulCount
               this.currentProgress.failed = progressData.current - this.currentProgress.successfulCount
             } else {
               // Current result failed
               if (!this.currentProgress.successfulCount) this.currentProgress.successfulCount = 0
               this.currentProgress.successful = this.currentProgress.successfulCount
               this.currentProgress.failed = progressData.current - this.currentProgress.successfulCount
             }
           }

           // Call external progress callback
           if (onProgress) {
             onProgress({
               ...this.currentProgress,
               percentage: progressData.percentage,
               currentImage: progressData.currentResult
             })
           }
         }
       )

      // Store analysis results in database
      console.log(`[AnalysisService] Storing ${analysisResults.length} analysis results in database`)
      
      let successfulUpdates = 0
      let failedUpdates = 0

      for (const result of analysisResults) {
        try {
          await databaseService.updateImageAnalysis(result.imageId, result)
          if (result.success) {
            successfulUpdates++
          } else {
            failedUpdates++
          }
        } catch (error) {
          console.error(`[AnalysisService] Failed to store analysis for image ${result.imageId}:`, error)
          failedUpdates++
        }
      }

      // Calculate summary statistics
      const successfulAnalyses = analysisResults.filter(r => r.success)
      const totalPeopleDetected = successfulAnalyses.reduce((sum, r) => sum + (r.peopleCount || 0), 0)
      const averagePeoplePerImage = successfulAnalyses.length > 0 
        ? totalPeopleDetected / successfulAnalyses.length 
        : 0

      // Update capture with analysis summary
      const analysisSummary = {
        totalImages: imagesToAnalyze.length,
        analyzedImages: analysisResults.length,
        successfulAnalyses: successfulUpdates,
        totalPeopleDetected,
        averagePeoplePerImage: Math.round(averagePeoplePerImage * 100) / 100, // Round to 2 decimal places
        status: failedUpdates > 0 ? 'completed_with_errors' : 'completed'
      }

      await databaseService.updateCaptureAnalysisSummary(captureId, analysisSummary)

      const endTime = new Date()
      const duration = endTime - this.currentProgress.startTime

      console.log(`[AnalysisService] Analysis completed for capture ${captureId}`)
      console.log(`[AnalysisService] Summary: ${successfulUpdates} successful, ${failedUpdates} failed, ${Math.round(duration/1000)}s duration`)

      // Reset progress
      this.currentProgress = null

      return {
        success: true,
        captureId,
        totalImages: imagesToAnalyze.length,
        analyzedImages: analysisResults.length,
        successfulAnalyses: successfulUpdates,
        failedAnalyses: failedUpdates,
        totalPeopleDetected,
        averagePeoplePerImage,
        duration: Math.round(duration / 1000), // in seconds
        details: analysisResults
      }

    } catch (error) {
      console.error(`[AnalysisService] Error analyzing capture ${captureId}:`, error)
      
      // Reset state on error
      this.currentProgress = null
      
      throw new Error(`Analysis failed: ${error.message}`)
    } finally {
      this.isAnalyzing = false
    }
  }

  /**
   * Analyze a single image
   * @param {string} imageId - The image ID to analyze
   * @returns {Promise<Object>} Analysis result
   */
  async analyzeImage(imageId) {
    try {
      console.log(`[AnalysisService] Analyzing single image: ${imageId}`)

      // Get image data from database
      // Note: We need to implement a method to get a single image by ID
      // For now, we'll use the capture ID approach
      const images = await databaseService.getImages(imageId.split('_')[0], { limit: 10000 })
      const image = images.find(img => img.id === imageId)

      if (!image) {
        throw new Error(`Image not found: ${imageId}`)
      }

      if (!image.downloadUrl) {
        throw new Error(`Image has no download URL: ${imageId}`)
      }

      // Analyze the image
      const analysis = await geminiService.analyzeImageForPeople(image.downloadUrl)
      
      // Add image metadata
      const result = {
        imageId: image.id,
        imageIndex: image.index,
        captureId: image.captureId,
        ...analysis
      }

      // Store result in database
      await databaseService.updateImageAnalysis(imageId, result)

      console.log(`[AnalysisService] Single image analysis completed for ${imageId}`)
      return result

    } catch (error) {
      console.error(`[AnalysisService] Error analyzing single image ${imageId}:`, error)
      throw error
    }
  }

  /**
   * Get current analysis progress
   * @returns {Object|null} Current progress or null if not analyzing
   */
  getProgress() {
    return this.currentProgress
  }

  /**
   * Check if analysis is currently running
   * @returns {boolean} True if analysis is in progress
   */
  isAnalysisInProgress() {
    return this.isAnalyzing
  }

  /**
   * Get analysis summary for a capture
   * @param {string} captureId - The capture ID
   * @returns {Promise<Object>} Analysis summary from the capture document
   */
  async getCaptureAnalysisSummary(captureId) {
    try {
      // Get the capture document to read analysis results
      const captureQuery = await databaseService.getCaptures('') // This needs improvement
      const capture = captureQuery.find(c => c.id === captureId)
      
      if (!capture || !capture.analysisResults) {
        return {
          hasAnalysis: false,
          message: 'No analysis results found for this capture'
        }
      }

      return {
        hasAnalysis: true,
        ...capture.analysisResults
      }
    } catch (error) {
      console.error(`[AnalysisService] Error getting analysis summary for ${captureId}:`, error)
      throw error
    }
  }

  /**
   * Get images with their analysis results for a capture
   * @param {string} captureId - The capture ID
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Images with analysis data
   */
  async getImagesWithAnalysis(captureId, options = {}) {
    try {
      const images = await databaseService.getImages(captureId, options)
      
      // Separate images with and without analysis
      const analyzed = images.filter(img => img.geminiAnalysis)
      const notAnalyzed = images.filter(img => !img.geminiAnalysis)

      console.log(`[AnalysisService] Retrieved ${analyzed.length} analyzed and ${notAnalyzed.length} unanalyzed images`)
      
      return {
        allImages: images,
        analyzedImages: analyzed,
        unanalyzedImages: notAnalyzed,
        totalImages: images.length,
        analysisProgress: images.length > 0 ? (analyzed.length / images.length) * 100 : 0
      }
    } catch (error) {
      console.error(`[AnalysisService] Error getting images with analysis for ${captureId}:`, error)
      throw error
    }
  }

  /**
   * Reset all analysis results for a capture
   * @param {string} captureId - The capture ID
   * @returns {Promise<Object>} Reset summary
   */
  async resetCaptureAnalysis(captureId) {
    try {
      console.log(`[AnalysisService] Resetting analysis for capture: ${captureId}`)
      
      const resetCount = await databaseService.resetCaptureAnalysis(captureId)
      
      console.log(`[AnalysisService] Successfully reset analysis for ${resetCount} images`)
      
      return {
        success: true,
        captureId,
        resetCount,
        message: `Reset analysis for ${resetCount} images`
      }
    } catch (error) {
      console.error(`[AnalysisService] Error resetting analysis for ${captureId}:`, error)
      throw new Error(`Failed to reset analysis: ${error.message}`)
    }
  }
}

// Create and export singleton instance
export const analysisService = new AnalysisService()

// Export class for testing
export { AnalysisService } 