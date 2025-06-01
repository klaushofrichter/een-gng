<template>
  <!-- Capture Details Modal -->
  <div 
    v-if="show" 
    class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4"
    @click="handleModalBackdropClick"
  >
    <div 
      class="relative border w-full max-w-4xl shadow-2xl rounded-lg bg-white dark:bg-gray-800 max-h-[90vh] overflow-y-scroll transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-600 p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Capture Details
        </h3>
        <button 
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="$emit('close')"
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Modal Content -->
      <div v-if="capture" class="p-6">
        <div class="space-y-4">
          <!-- Thumbnail Preview -->
          <div v-if="capture.thumbnail" class="flex justify-center">
            <img :src="capture.thumbnail" alt="Thumbnail" class="rounded border border-gray-300 dark:border-gray-600 max-w-xs max-h-48" />
          </div>
          
          <!-- Capture Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <p class="text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 p-2 rounded">
              {{ capture.name || 'Unnamed Capture' }}
            </p>
          </div>

          <!-- Start Date & Camera ID in one row -->
          <div v-if="capture.startDate || capture.cameraId" class="grid grid-cols-2 gap-4">
            <div v-if="capture.startDate">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Start Date & Time
              </label>
              <p class="text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                {{ capture.startDate }}
              </p>
            </div>
            <div v-if="capture.cameraId">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Camera ID
              </label>
              <p class="text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 p-2 rounded font-mono">
                {{ capture.cameraId }}
              </p>
            </div>
          </div>

          <!-- Duration and Interval in one row -->
          <div v-if="capture.duration || capture.interval" class="grid grid-cols-2 gap-4">
            <!-- Duration -->
            <div v-if="capture.duration">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Duration
              </label>
              <p class="text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                {{ capture.duration.value }} {{ capture.duration.unit }}
              </p>
            </div>
            <div v-else></div>

            <!-- Interval -->
            <div v-if="capture.interval">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Capture Interval
              </label>
              <p class="text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                {{ capture.interval.value }} {{ capture.interval.unit }}
              </p>
            </div>
            <div v-else></div>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              User Email
            </label>
            <p class="text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 p-2 rounded">
              {{ capture.eenUserEmailField || 'No email' }}
            </p>
          </div>

          <!-- Created Date -->
          <div v-if="capture.createdAt">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Created
            </label>
            <p class="text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 p-2 rounded">
              {{ new Date(capture.createdAt).toLocaleString() }}
            </p>
          </div>

          <!-- Description -->
          <div v-if="capture.description">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <p class="text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 p-2 rounded">
              {{ capture.description }}
            </p>
          </div>

          <!-- Stored Images Summary -->
          <div v-if="capture.imageCount && capture.imageCount > 0">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Stored Images
            </label>
            <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-lg font-bold text-green-600 dark:text-green-400">{{ capture.imageCount }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">images stored</p>
                </div>
                <div v-if="capture.processedAt" class="text-right">
                  <p class="text-xs text-gray-500 dark:text-gray-400">Processed:</p>
                  <p class="text-xs text-gray-600 dark:text-gray-300">{{ new Date(capture.processedAt).toLocaleString() }}</p>
                </div>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Images stored in optimized database structure
              </p>
              
              <!-- Load Images Button -->
              <div class="mt-3">
                <div class="flex items-center space-x-2">
                  <button 
                    v-if="!imagesLoaded && !loadingImages && !imageLoadError"
                    class="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    @click="loadImages"
                  >
                    View Images
                  </button>
                  
                  <!-- Token Rotation Button -->
                  <button 
                    v-if="imagesLoaded && !rotatingTokens"
                    class="px-3 py-1 text-xs bg-orange-600 text-white rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                    @click="rotateTokens"
                    title="Rotate download URL tokens for enhanced security"
                  >
                    🔄 Rotate Tokens
                  </button>
                </div>
                
                <div v-if="loadingImages" class="flex items-center space-x-2 mt-2">
                  <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span class="text-xs text-gray-600 dark:text-gray-400">Loading images...</span>
                </div>
                
                <!-- Token Rotation Progress -->
                <div v-if="rotatingTokens" class="mt-2">
                  <div class="flex items-center space-x-2">
                    <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600"></div>
                    <span class="text-xs text-gray-600 dark:text-gray-400">
                      Rotating tokens... {{ rotationProgress }}/{{ rotationTotal }}
                    </span>
                  </div>
                  <div v-if="rotationTotal > 0" class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div 
                      class="bg-orange-600 h-1.5 rounded-full transition-all duration-300" 
                      :style="{ width: `${(rotationProgress / rotationTotal) * 100}%` }"
                    ></div>
                  </div>
                </div>
                
                <!-- Error Messages -->
                <div v-if="imageLoadError" class="mt-2">
                  <div v-if="imageLoadError === 'security'" class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded p-3">
                    <div class="flex items-start space-x-2">
                      <svg class="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                      <div>
                        <h5 class="text-sm font-medium text-orange-800 dark:text-orange-400">Images Not Accessible</h5>
                        <p class="text-sm text-orange-700 dark:text-orange-300 mt-1">
                          These images were created before security updates and cannot be accessed. 
                          Please re-process this capture to generate new secure images.
                        </p>
                        <button 
                          class="mt-2 px-3 py-1 text-xs bg-orange-600 text-white rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                          @click="$emit('process', capture)"
                        >
                          Re-process Capture
                        </button>
                      </div>
                    </div>
                  </div>
                  <div v-else class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
                    <div class="flex items-start space-x-2">
                      <svg class="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      <div>
                        <h5 class="text-sm font-medium text-red-800 dark:text-red-400">Error Loading Images</h5>
                        <p class="text-sm text-red-700 dark:text-red-300 mt-1">{{ imageLoadError }}</p>
                        <button 
                          class="mt-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                          @click="loadImages"
                        >
                          Try Again
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Gallery -->
          <div v-if="imagesLoaded && storedImages.length > 0" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                Stored Images ({{ storedImages.length }})
              </h4>
              <div v-if="totalImagePages > 1" class="flex items-center space-x-2">
                <span class="text-xs text-gray-500 dark:text-gray-400">
                  Page {{ currentImagePage + 1 }} of {{ totalImagePages }}
                </span>
                <div class="flex space-x-1">
                  <button
                    :disabled="!canGoToPreviousPage"
                    class="p-1 rounded text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Previous page"
                    @click="goToPreviousPage"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                  </button>
                  <button
                    :disabled="!canGoToNextPage"
                    class="p-1 rounded text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Next page"
                    @click="goToNextPage"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              <div 
                v-for="image in paginatedImages" 
                :key="image.index"
                class="relative group"
              >
                <img 
                  :src="image.downloadUrl" 
                  :alt="`Image ${image.index}`"
                  class="w-full h-12 object-cover rounded border border-gray-300 dark:border-gray-600"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                  <span class="text-white text-xs font-bold">{{ image.index }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Raw Data (for debugging) -->
          <div class="pt-2 border-t border-gray-200 dark:border-gray-600">
            <details class="group">
              <summary class="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                Raw Data (Debug)
              </summary>
              <pre class="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-2 rounded overflow-auto max-h-40">{{ JSON.stringify(capture, null, 2) }}</pre>
            </details>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-600 mt-6">
          <div class="flex space-x-3">
            <button 
              class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              @click="$emit('process', capture)"
            >
              Process
            </button>
            <button 
              class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              @click="$emit('delete', capture)"
            >
              Delete Capture
            </button>
          </div>
          <button 
            class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            @click="$emit('close')"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { databaseService } from '../services/database'
import { storageService } from '../services/storage'
import { getFunctions, httpsCallable } from 'firebase/functions'

// Props
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  capture: {
    type: Object,
    default: null
  }
})

// Emits
const emit = defineEmits(['close', 'process', 'delete'])

// Image viewing state
const storedImages = ref([])
const loadingImages = ref(false)
const imagesLoaded = ref(false)
const imageLoadError = ref(null)

// Token rotation state
const rotatingTokens = ref(false)
const rotationProgress = ref(0)
const rotationTotal = ref(0)

// Image pagination state
const imagePageSize = ref(32) // 4 rows × 8 columns = 32 images per page
const currentImagePage = ref(0)

// Computed properties for image pagination
const totalImagePages = computed(() => {
  return Math.ceil(storedImages.value.length / imagePageSize.value)
})

const paginatedImages = computed(() => {
  const start = currentImagePage.value * imagePageSize.value
  const end = start + imagePageSize.value
  return storedImages.value.slice(start, end)
})

const canGoToPreviousPage = computed(() => {
  return currentImagePage.value > 0
})

const canGoToNextPage = computed(() => {
  return currentImagePage.value < totalImagePages.value - 1
})

// Image pagination functions
const goToPreviousPage = () => {
  if (canGoToPreviousPage.value) {
    currentImagePage.value--
  }
}

const goToNextPage = () => {
  if (canGoToNextPage.value) {
    currentImagePage.value++
  }
}

const resetImagePagination = () => {
  currentImagePage.value = 0
}

// Load images from database
const loadImages = async () => {
  console.log(`[CaptureDetailsModal] loadImages called, capture:`, props.capture)
  
  if (!props.capture?.id) {
    console.log(`[CaptureDetailsModal] No capture ID available`)
    return
  }
  
  loadingImages.value = true
  imageLoadError.value = null // Clear previous errors
  try {
    console.log(`[CaptureDetailsModal] Loading images for capture ${props.capture.id}`)
    
    // Get all images for this capture (set high limit to get all)
    const images = await databaseService.getImages(props.capture.id, { 
      limit: 10000, // High limit to get all images
      orderBy: 'index' 
    })
    
    console.log(`[CaptureDetailsModal] Raw images data:`, images)
    
    // Sort images by index to maintain order
    storedImages.value = images.sort((a, b) => a.index - b.index)
    imagesLoaded.value = true
    resetImagePagination()
    
    console.log(`[CaptureDetailsModal] Loaded ${images.length} images, first image:`, images[0])
    
    // Images are loading successfully through img tags - no need for debug fetch
  } catch (error) {
    console.error('[CaptureDetailsModal] Error loading images:', error)
    
    // Check if it's a permissions error (likely due to new security rules)
    if (error.message && (error.message.includes('permission') || error.message.includes('Missing or insufficient permissions'))) {
      imageLoadError.value = 'security'
    } else {
      imageLoadError.value = error.message
    }
  } finally {
    loadingImages.value = false
  }
}

// Reset state when modal is closed or capture changes
watch([() => props.show, () => props.capture], ([show, capture]) => {
  if (!show || !capture) {
    // Reset state when modal closes
    storedImages.value = []
    imagesLoaded.value = false
    loadingImages.value = false
    imageLoadError.value = null
    rotatingTokens.value = false
    rotationProgress.value = 0
    rotationTotal.value = 0
    resetImagePagination()
  }
})

// Token rotation function
const rotateTokens = async () => {
  if (!props.capture?.id) {
    console.log(`[CaptureDetailsModal] No capture ID available for token rotation`)
    return
  }
  
  rotatingTokens.value = true
  rotationProgress.value = 0
  rotationTotal.value = 0
  
  try {
    console.log(`[CaptureDetailsModal] Starting server-side token rotation for capture ${props.capture.id}`)
    
    // Call the Cloud Function for server-side token rotation
    const functions = getFunctions()
    const rotateTokensFunction = httpsCallable(functions, 'rotateTokensForCapture')
    
    const result = await rotateTokensFunction({
      captureId: props.capture.id,
      userEmail: props.capture.eenUserEmailField
    })
    
    console.log(`[CaptureDetailsModal] Server-side token rotation complete:`, result.data)
    
    // Update progress to show completion
    rotationProgress.value = result.data.rotated
    rotationTotal.value = result.data.totalImages
    
    // Reload images to show new URLs
    if (imagesLoaded.value) {
      await loadImages()
    }
    
    // Show success message
    alert(`Server-side token rotation complete! ${result.data.rotated} images updated, ${result.data.failed} failed.`)
    
  } catch (error) {
    console.error('[CaptureDetailsModal] Error in server-side token rotation:', error)
    alert(`Server-side token rotation failed: ${error.message}`)
  } finally {
    rotatingTokens.value = false
    rotationProgress.value = 0
    rotationTotal.value = 0
  }
}

// Handle backdrop clicks for modal
function handleModalBackdropClick(event) {
  // Only close if clicking the backdrop, not the modal content
  if (event.target === event.currentTarget) {
    emit('close')
  }
}
</script> 