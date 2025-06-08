import { auth } from '../firebase'

/**
 * Secure Gemini AI Service - Calls Cloud Function instead of direct API
 * This keeps the Gemini API key secure on the server side
 */
class SecureGeminiService {
  constructor() {
    // Cloud Function URL - replace with your actual function URL
    this.cloudFunctionUrl = import.meta.env.VITE_GEMINI_CLOUD_FUNCTION_URL || 
                           'https://us-central1-klaus-hofrichter-simple.cloudfunctions.net/analyze_image_secure'
  }

  /**
   * Analyze image securely via Cloud Function
   * @param {string} imageId - Image ID
   * @param {Object} imageData - Image metadata including storage path
   * @returns {Promise<Object>} Analysis results
   */
  async analyzeImageSecurely(imageId, imageData) {
    try {
      console.log('[SecureGeminiService] Analyzing image via Cloud Function:', imageId)
      
      // Get current user for authentication
      const user = auth.currentUser
      if (!user) {
        throw new Error('User must be authenticated to use AI analysis')
      }

      // Extract storage information from image data
      console.log('[SecureGeminiService] Image download URL:', imageData.downloadUrl)
      const storagePath = this.extractStoragePathFromUrl(imageData.downloadUrl)
      console.log('[SecureGeminiService] Extracted storage path:', storagePath)
      
      if (!storagePath) {
        throw new Error(`Cannot extract storage path from image URL: ${imageData.downloadUrl}`)
      }

      // Extract bucket name from URL or use default
      let bucketName = 'klaus-hofrichter-simple.firebasestorage.app'
      
      // Securely validate Firebase Storage URL by parsing hostname
      try {
        const urlObj = new URL(imageData.downloadUrl)
        const hostname = urlObj.hostname
        
        // Check if hostname is exactly firebasestorage.googleapis.com or a valid subdomain
        if (hostname === 'firebasestorage.googleapis.com' || hostname.endsWith('.firebasestorage.googleapis.com')) {
          const bucketMatch = imageData.downloadUrl.match(/\/v0\/b\/([^/]+)\/o\//)
          if (bucketMatch) {
            bucketName = bucketMatch[1]
          }
        }
      } catch (error) {
        console.warn('[SecureGeminiService] Invalid URL format:', imageData.downloadUrl)
        // Continue with default bucket name
      }

      // Prepare request payload
      const payload = {
        userEmail: user.email,
        captureId: imageData.captureId,
        imageId: imageId,
        storagePath: storagePath,
        bucketName: bucketName
      }

      // Get user's authentication token for the request
      const idToken = await user.getIdToken()

      console.log('[SecureGeminiService] Calling Cloud Function with payload:', { 
        ...payload, 
        userEmail: '***', // Don't log email
        storagePath: payload.storagePath,
        bucketName: payload.bucketName
      })

      // Make secure request to Cloud Function
      const response = await fetch(this.cloudFunctionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        
        if (response.status === 429) {
          throw new Error(`Rate limit exceeded: ${errorData.error}. Please try again in ${Math.round(errorData.retryAfter / 60)} minutes.`)
        } else if (response.status === 401) {
          throw new Error('Authentication failed. Please log in again.')
        } else if (response.status === 403) {
          throw new Error('Access denied. You may not have permission to use this feature.')
        } else {
          throw new Error(`Analysis failed: ${errorData.error || 'Server error'}`)
        }
      }

      const result = await response.json()
      
      if (!result.success) {
        throw new Error(result.error || 'Analysis failed')
      }

      console.log('[SecureGeminiService] Analysis completed successfully:', {
        imageId: result.imageId,
        peopleCount: result.analysis?.peopleCount,
        confidence: result.analysis?.confidence
      })

      // Return analysis in the same format as the direct service
      return {
        imageId: imageId,
        imageIndex: imageData.index,
        captureId: imageData.captureId,
        ...result.analysis
      }

    } catch (error) {
      console.error('[SecureGeminiService] Error analyzing image:', error)
      
      // Return error result in consistent format
      return {
        imageId: imageId,
        imageIndex: imageData.index,
        captureId: imageData.captureId,
        success: false,
        error: error.message,
        description: null,
        peopleCount: null,
        confidence: 'failed',
        analysisTimestamp: new Date().toISOString()
      }
    }
  }

  /**
   * Analyze multiple images from a capture securely
   * @param {Array} images - Array of image objects
   * @param {Function} onProgress - Progress callback
   * @returns {Promise<Array>} Array of analysis results
   */
  async analyzeImagesFromCapture(images, onProgress = null) {
    console.log(`[SecureGeminiService] Starting secure analysis of ${images.length} images`)
    
    const results = []
    const total = images.length
    
    for (let i = 0; i < images.length; i++) {
      const image = images[i]
      
      try {
        console.log(`[SecureGeminiService] Analyzing image ${i + 1}/${total} (ID: ${image.id})`)
        
        const result = await this.analyzeImageSecurely(image.id, image)
        results.push(result)
        
        // Call progress callback if provided
        if (onProgress) {
          onProgress({
            current: i + 1,
            total: total,
            percentage: Math.round(((i + 1) / total) * 100),
            currentResult: result
          })
        }
        
        // Add delay to be respectful to the API and avoid overwhelming
        if (i < images.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 2000)) // 2 second delay
        }
        
      } catch (error) {
        console.error(`[SecureGeminiService] Error analyzing image ${image.id}:`, error)
        
        const errorResult = {
          imageId: image.id,
          imageIndex: image.index,
          captureId: image.captureId,
          success: false,
          error: error.message,
          analysisTimestamp: new Date().toISOString()
        }
        
        results.push(errorResult)
      }
    }
    
    console.log(`[SecureGeminiService] Completed secure analysis of ${results.length} images`)
    return results
  }

  /**
   * Extract storage path from Firebase Storage URL
   * @param {string} url - Firebase Storage URL
   * @returns {string|null} Storage path or null if invalid
   */
  extractStoragePathFromUrl(url) {
    try {
      console.log('[SecureGeminiService] Extracting storage path from URL:', url)
      
      // Parse URL to get hostname for secure validation
      const urlObj = new URL(url)
      const hostname = urlObj.hostname
      
      // Handle different Firebase Storage URL formats with secure hostname validation
      if (hostname === 'firebasestorage.googleapis.com' || hostname.endsWith('.firebasestorage.googleapis.com')) {
        // Format: https://firebasestorage.googleapis.com/v0/b/bucket/o/path%2Fto%2Ffile?alt=media&token=...
        const match = url.match(/\/o\/([^?]+)/)
        if (match) {
          const path = decodeURIComponent(match[1])
          console.log('[SecureGeminiService] Extracted path (firebasestorage):', path)
          return path
        }
      } else if (hostname === 'storage.googleapis.com' || hostname.endsWith('.storage.googleapis.com')) {
        // Format: https://storage.googleapis.com/bucket/path/to/file
        const pathParts = urlObj.pathname.split('/')
        if (pathParts.length >= 3) {
          // Remove empty first element and bucket name
          const path = pathParts.slice(2).join('/')
          console.log('[SecureGeminiService] Extracted path (storage.googleapis.com):', path)
          return path
        }
      }
      
      console.warn('[SecureGeminiService] Could not extract storage path from URL format:', url)
      return null
    } catch (error) {
      console.error('[SecureGeminiService] Error extracting storage path:', error)
      return null
    }
  }

  /**
   * Check if secure analysis is available
   * @returns {boolean} True if Cloud Function URL is configured
   */
  isAvailable() {
    return !!this.cloudFunctionUrl && this.cloudFunctionUrl !== ''
  }

  /**
   * Get service status information
   * @returns {Object} Service status
   */
  getStatus() {
    return {
      available: this.isAvailable(),
      type: 'secure-cloud-function',
      endpoint: this.cloudFunctionUrl ? 'configured' : 'not-configured',
      authentication: 'firebase-auth-required',
      rateLimiting: 'enabled',
      security: 'high'
    }
  }
}

// Create and export singleton instance
export const secureGeminiService = new SecureGeminiService()

// Export class for testing
export { SecureGeminiService } 