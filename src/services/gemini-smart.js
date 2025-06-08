import { secureGeminiService } from './gemini-secure.js'
import { geminiService } from './gemini.js'

/**
 * Smart Gemini Service - Automatically chooses between secure and local modes
 * 
 * Priority:
 * 1. Secure Cloud Function (if VITE_GEMINI_CLOUD_FUNCTION_URL is configured)
 * 2. Local direct API (if VITE_GEMINI_API_KEY_LOCAL is configured)
 * 3. Fallback with clear error message
 */
class SmartGeminiService {
  constructor() {
    this.cloudFunctionUrl = import.meta.env.VITE_GEMINI_CLOUD_FUNCTION_URL
    this.localApiKey = import.meta.env.VITE_GEMINI_API_KEY_LOCAL
    
    // Determine which service to use
    this.mode = this.determineMode()
    this.activeService = this.getActiveService()
    
    console.log(`[SmartGeminiService] Initialized in ${this.mode} mode`)
  }

  /**
   * Determine which mode to use based on available configuration
   * @returns {string} 'secure', 'local', or 'none'
   */
  determineMode() {
    if (this.cloudFunctionUrl && this.cloudFunctionUrl.trim() !== '') {
      return 'secure'
    } else if (this.localApiKey && this.localApiKey.trim() !== '') {
      return 'local'
    } else {
      return 'none'
    }
  }

  /**
   * Get the active service instance based on mode
   * @returns {Object} Service instance
   */
  getActiveService() {
    switch (this.mode) {
      case 'secure':
        return secureGeminiService
      case 'local':
        return geminiService
      default:
        return null
    }
  }

  /**
   * Analyze multiple images from a capture
   * @param {Array} images - Array of image objects
   * @param {Function} onProgress - Progress callback
   * @returns {Promise<Array>} Array of analysis results
   */
  async analyzeImagesFromCapture(images, onProgress = null) {
    if (!this.activeService) {
      throw new Error('No Gemini service configured. Please set either VITE_GEMINI_CLOUD_FUNCTION_URL (secure) or VITE_GEMINI_API_KEY_LOCAL (local development).')
    }

    console.log(`[SmartGeminiService] Analyzing ${images.length} images using ${this.mode} mode`)

    try {
      const results = await this.activeService.analyzeImagesFromCapture(images, onProgress)
      console.log(`[SmartGeminiService] Successfully completed analysis using ${this.mode} mode`)
      return results
    } catch (error) {
      console.error(`[SmartGeminiService] Error in ${this.mode} mode:`, error)
      
      // If secure mode fails, optionally fall back to local (only for development)
      if (this.mode === 'secure' && this.localApiKey && import.meta.env.DEV) {
        console.warn('[SmartGeminiService] Secure mode failed, falling back to local mode for development')
        try {
          const results = await geminiService.analyzeImagesFromCapture(images, onProgress)
          console.log('[SmartGeminiService] Fallback to local mode successful')
          return results
        } catch (fallbackError) {
          console.error('[SmartGeminiService] Fallback also failed:', fallbackError)
          throw new Error(`Both secure and local modes failed. Secure: ${error.message}, Local: ${fallbackError.message}`)
        }
      }
      
      throw error
    }
  }

  /**
   * Analyze a single image
   * @param {string} imageUrl - Image URL to analyze
   * @returns {Promise<Object>} Analysis result
   */
  async analyzeImageForPeople(imageUrl) {
    if (!this.activeService) {
      throw new Error('No Gemini service configured.')
    }

    // For secure service, we need to use the batch method
    if (this.mode === 'secure') {
      throw new Error('Single image analysis not supported in secure mode. Use analyzeImagesFromCapture instead.')
    }

    return await this.activeService.analyzeImageForPeople(imageUrl)
  }

  /**
   * Get service status and configuration
   * @returns {Object} Status information
   */
  getStatus() {
    return {
      mode: this.mode,
      cloudFunctionUrl: this.cloudFunctionUrl ? 'configured' : 'not configured',
      localApiKey: this.localApiKey ? 'configured' : 'not configured',
      activeService: this.activeService ? this.activeService.constructor.name : 'none',
      developmentFallback: this.mode === 'secure' && this.localApiKey && import.meta.env.DEV ? 'available' : 'not available',
      security: this.mode === 'secure' ? 'high (server-side)' : this.mode === 'local' ? 'low (client-side)' : 'none',
      rateLimiting: this.mode === 'secure' ? 'enabled' : 'disabled',
      authentication: this.mode === 'secure' ? 'required' : 'not required'
    }
  }

  /**
   * Check if service is available
   * @returns {boolean} True if at least one service is configured
   */
  isAvailable() {
    return this.mode !== 'none'
  }

  /**
   * Get recommendation for configuration
   * @returns {string} Configuration recommendation
   */
  getRecommendation() {
    if (this.mode === 'secure') {
      return '✅ Using secure Cloud Function - recommended for production'
    } else if (this.mode === 'local') {
      return '⚠️ Using local API key - only for development. Deploy Cloud Function for production.'
    } else {
      return '❌ No service configured. Set VITE_GEMINI_CLOUD_FUNCTION_URL for secure mode or VITE_GEMINI_API_KEY_LOCAL for local development.'
    }
  }
}

// Create and export singleton instance
export const smartGeminiService = new SmartGeminiService()

// Export class for testing
export { SmartGeminiService } 