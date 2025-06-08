import { getStorage, ref as storageRef, getBytes } from 'firebase/storage'
import app from '../firebase'

/**
 * Gemini AI Service for Image Analysis
 * Provides image analysis capabilities using Google's Gemini API
 */
class GeminiService {
  constructor() {
    this.apiKey = import.meta.env.VITE_GEMINI_API_KEY_LOCAL || import.meta.env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY_LOCAL
    this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models'
    this.model = 'gemini-2.0-flash'
    this.storage = getStorage(app)
  }

  /**
   * Convert image URL to base64 data using proxy or fallback methods
   * @param {string} imageUrl - The Firebase Storage URL
   * @returns {Promise<string>} Base64 encoded image data
   */
  async imageUrlToBase64(imageUrl) {
    try {
      console.log('[GeminiService] Converting image to base64:', imageUrl)
      
      // Try Firebase Storage SDK first
      try {
        const storagePath = this.extractStoragePathFromUrl(imageUrl)
        if (storagePath) {
          console.log('[GeminiService] Extracted storage path:', storagePath)
          const imageRef = storageRef(this.storage, storagePath)
          const arrayBuffer = await getBytes(imageRef)
          console.log('[GeminiService] Successfully downloaded image data via Firebase SDK, size:', arrayBuffer.byteLength)
          return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
        }
      } catch (sdkError) {
        console.warn('[GeminiService] Firebase SDK failed, trying alternative approach:', sdkError.message)
      }
      
      // Fallback: Try to fetch with CORS mode disabled using a proxy approach
      try {
        console.log('[GeminiService] Trying alternative fetch approach...')
        const response = await fetch(imageUrl, {
          mode: 'cors',
          headers: {
            'Accept': 'image/*'
          }
        })
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        
        const arrayBuffer = await response.arrayBuffer()
        console.log('[GeminiService] Successfully downloaded image data via fetch, size:', arrayBuffer.byteLength)
        return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
      } catch (fetchError) {
        console.warn('[GeminiService] Direct fetch failed:', fetchError.message)
      }
      
      // Final fallback: Use img element approach (for browser environments)
      return await this.imageToBase64ViaCanvas(imageUrl)
      
    } catch (error) {
      console.error('[GeminiService] All image processing methods failed:', error)
      throw new Error(`Failed to process image: ${error.message}`)
    }
  }

  /**
   * Convert image to base64 using canvas (fallback for CORS issues)
   * @param {string} imageUrl - The image URL
   * @returns {Promise<string>} Base64 encoded image data
   */
  async imageToBase64ViaCanvas(imageUrl) {
    return new Promise((resolve, reject) => {
      console.log('[GeminiService] Trying canvas approach for image:', imageUrl)
      
      const img = new Image()
      img.crossOrigin = 'anonymous' // This might help with CORS
      
      img.onload = () => {
        try {
          // Create canvas and draw image
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          
          canvas.width = img.naturalWidth
          canvas.height = img.naturalHeight
          
          ctx.drawImage(img, 0, 0)
          
          // Convert to base64 (remove data:image/jpeg;base64, prefix)
          const dataUrl = canvas.toDataURL('image/jpeg', 0.9)
          const base64 = dataUrl.split(',')[1]
          
          console.log('[GeminiService] Successfully converted image via canvas')
          resolve(base64)
        } catch (canvasError) {
          console.error('[GeminiService] Canvas processing failed:', canvasError)
          reject(new Error(`Canvas processing failed: ${canvasError.message}`))
        }
      }
      
      img.onerror = (imgError) => {
        console.error('[GeminiService] Image loading failed:', imgError)
        reject(new Error('Failed to load image for canvas processing'))
      }
      
      // Add timestamp to bypass cache issues
      const urlWithTimestamp = imageUrl + (imageUrl.includes('?') ? '&' : '?') + 't=' + Date.now()
      img.src = urlWithTimestamp
    })
  }

  /**
   * Extract storage path from Firebase Storage URL
   * @param {string} url - Firebase Storage URL
   * @returns {string|null} Storage path or null if invalid
   */
  extractStoragePathFromUrl(url) {
    try {
      // Parse URL to get hostname for secure validation
      const urlObj = new URL(url)
      const hostname = urlObj.hostname
      
      // Handle different Firebase Storage URL formats with secure hostname validation
      if (hostname === 'firebasestorage.googleapis.com' || hostname.endsWith('.firebasestorage.googleapis.com')) {
        // Format: https://firebasestorage.googleapis.com/v0/b/bucket/o/path%2Fto%2Ffile?alt=media&token=...
        const match = url.match(/\/o\/([^?]+)/)
        if (match) {
          return decodeURIComponent(match[1])
        }
      } else if (hostname === 'storage.googleapis.com' || hostname.endsWith('.storage.googleapis.com')) {
        // Format: https://storage.googleapis.com/bucket/path/to/file
        const pathParts = urlObj.pathname.split('/')
        if (pathParts.length >= 3) {
          // Remove empty first element and bucket name
          return pathParts.slice(2).join('/')
        }
      }
      
      console.warn('[GeminiService] Could not extract storage path from URL:', url)
      return null
    } catch (error) {
      console.error('[GeminiService] Error extracting storage path:', error)
      return null
    }
  }

  /**
   * Determine MIME type from image URL or default to JPEG
   * @param {string} imageUrl - The image URL
   * @returns {string} MIME type
   */
  getMimeType(imageUrl) {
    const url = imageUrl.toLowerCase()
    if (url.includes('.png') || url.includes('image/png')) {
      return 'image/png'
    } else if (url.includes('.gif') || url.includes('image/gif')) {
      return 'image/gif'
    } else if (url.includes('.webp') || url.includes('image/webp')) {
      return 'image/webp'
    }
    // Default to JPEG for most Firebase Storage images
    return 'image/jpeg'
  }

  /**
   * Call Gemini API to analyze an image
   * @param {string} imageBase64 - Base64 encoded image data
   * @param {string} mimeType - MIME type of the image
   * @param {string} prompt - Analysis prompt
   * @returns {Promise<Object>} Gemini API response
   */
  async callGeminiAPI(imageBase64, mimeType, prompt) {
    if (!this.apiKey) {
      throw new Error('Gemini API key not configured. Please set VITE_GEMINI_API_KEY environment variable.')
    }

    const url = `${this.baseUrl}/${this.model}:generateContent?key=${this.apiKey}`
    
    const payload = {
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: mimeType,
                data: imageBase64
              }
            }
          ]
        }
      ]
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    try {
      console.log('[GeminiService] Calling Gemini API...')
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Gemini API error: ${response.status} ${response.statusText} - ${errorText}`)
      }

      const result = await response.json()
      console.log('[GeminiService] Gemini API response received')
      return result
    } catch (error) {
      console.error('[GeminiService] Error calling Gemini API:', error)
      throw error
    }
  }

  /**
   * Parse people count from Gemini response text
   * @param {string} text - Gemini response text
   * @returns {number|null} Number of people detected or null if unclear
   */
  parsePeopleCount(text) {
    if (!text) return null
    
    const lowerText = text.toLowerCase()
    
    try {
      // Look for specific patterns
      if (lowerText.includes('no people') || lowerText.includes('no person')) {
        return 0
      }
      
      if (lowerText.includes('one person') || lowerText.includes('1 person')) {
        return 1
      }
      
      // Look for "X people" pattern
      const peopleMatch = lowerText.match(/(\d+)\s+people/)
      if (peopleMatch) {
        return parseInt(peopleMatch[1], 10)
      }
      
      // Look for "X person" pattern
      const personMatch = lowerText.match(/(\d+)\s+person/)
      if (personMatch) {
        return parseInt(personMatch[1], 10)
      }
      
      // Look for written numbers
      const numberWords = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
        'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10
      }
      
      for (const [word, number] of Object.entries(numberWords)) {
        if (lowerText.includes(`${word} people`) || lowerText.includes(`${word} person`)) {
          return number
        }
      }
      
      console.log('[GeminiService] Could not parse people count from text:', text)
      return null
    } catch (error) {
      console.warn('[GeminiService] Error parsing people count:', error)
      return null
    }
  }

  /**
   * Analyze an image to count people and provide description
   * @param {string} imageUrl - URL of the image to analyze
   * @returns {Promise<Object>} Analysis results
   */
  async analyzeImageForPeople(imageUrl) {
    try {
      console.log('[GeminiService] Starting image analysis for people counting:', imageUrl)
      
      // Validate image URL
      if (!imageUrl || typeof imageUrl !== 'string') {
        throw new Error('Invalid image URL provided')
      }
      
      // Convert image to base64
      console.log('[GeminiService] Converting image to base64...')
      const imageBase64 = await this.imageUrlToBase64(imageUrl)
      
      if (!imageBase64) {
        throw new Error('Failed to convert image to base64')
      }
      
      const mimeType = this.getMimeType(imageUrl)
      console.log('[GeminiService] Detected MIME type:', mimeType)
      
      // Prepare prompt for people counting
      const prompt = "Count the number of people in this image and provide a brief description of what they are doing. Be specific about the number of people you can see."
      
      // Call Gemini API
      console.log('[GeminiService] Calling Gemini API for analysis...')
      const geminiResult = await this.callGeminiAPI(imageBase64, mimeType, prompt)
      
      // Process the response
      const analysis = {
        success: true,
        description: null,
        peopleCount: null,
        confidence: 'unknown',
        analysisTimestamp: new Date().toISOString()
      }
      
      if (geminiResult?.candidates?.[0]?.content?.parts?.[0]?.text) {
        const responseText = geminiResult.candidates[0].content.parts[0].text
        analysis.description = responseText
        analysis.peopleCount = this.parsePeopleCount(responseText)
        
        // Simple confidence assessment based on whether we could parse a number
        analysis.confidence = analysis.peopleCount !== null ? 'high' : 'low'
        
        console.log('[GeminiService] Analysis completed successfully:', {
          peopleCount: analysis.peopleCount,
          confidence: analysis.confidence,
          description: responseText?.substring(0, 100) + '...'
        })
      } else {
        console.warn('[GeminiService] No valid response text from Gemini API')
        analysis.confidence = 'low'
        analysis.description = 'No analysis available'
      }
      
      return analysis
    } catch (error) {
      console.error('[GeminiService] Error analyzing image:', error)
      
      // Provide more specific error messages
      let errorMessage = error.message
      if (error.message.includes('Failed to process image')) {
        errorMessage = 'Could not access image. Please check image URL and permissions.'
      } else if (error.message.includes('Gemini API error')) {
        errorMessage = 'AI analysis service temporarily unavailable. Please try again later.'
      } else if (error.message.includes('API key')) {
        errorMessage = 'Gemini API key not configured or invalid.'
      }
      
      return {
        success: false,
        error: errorMessage,
        description: null,
        peopleCount: null,
        confidence: 'failed',
        analysisTimestamp: new Date().toISOString()
      }
    }
  }

  /**
   * Analyze multiple images from a capture
   * @param {Array} images - Array of image objects with downloadUrl
   * @param {Function} onProgress - Progress callback (optional)
   * @returns {Promise<Array>} Array of analysis results
   */
  async analyzeImagesFromCapture(images, onProgress = null) {
    console.log(`[GeminiService] Starting analysis of ${images.length} images`)
    
    const results = []
    const total = images.length
    
    for (let i = 0; i < images.length; i++) {
      const image = images[i]
      
      try {
        console.log(`[GeminiService] Analyzing image ${i + 1}/${total} (index: ${image.index})`)
        
        const analysis = await this.analyzeImageForPeople(image.downloadUrl)
        
        // Add image metadata to the result
        const result = {
          imageId: image.id,
          imageIndex: image.index,
          captureId: image.captureId,
          ...analysis
        }
        
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
        
        // Add small delay to avoid overwhelming the API
        if (i < images.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
        
      } catch (error) {
        console.error(`[GeminiService] Error analyzing image ${image.index}:`, error)
        
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
    
    console.log(`[GeminiService] Completed analysis of ${results.length} images`)
    return results
  }
}

// Create and export singleton instance
export const geminiService = new GeminiService()

// Export class for testing
export { GeminiService } 