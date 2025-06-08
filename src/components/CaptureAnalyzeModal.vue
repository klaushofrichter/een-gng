<template>
  <div 
    v-if="show" 
    class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4"
    @click="handleBackdropClick"
  >
    <div 
      class="relative border w-full max-w-5xl shadow-2xl rounded-lg bg-white dark:bg-gray-800 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-600 p-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
            AI Image Analysis
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Analyze images using Google Gemini AI to count people and provide descriptions
          </p>
        </div>
        <button 
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          :disabled="isAnalyzing"
          aria-label="Close modal"
          @click="closeModal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-6 space-y-6">
        <!-- Capture Information -->
        <div v-if="capture" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div class="flex items-center gap-4">
            <div v-if="capture.thumbnail" class="flex-shrink-0">
              <img :src="capture.thumbnail" alt="Thumbnail" class="w-16 h-16 object-cover rounded border border-gray-300 dark:border-gray-600" />
            </div>
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                {{ capture.name || 'Unnamed Capture' }}
              </h4>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Camera: {{ capture.cameraId }} • Images: {{ capture.imageCount || 0 }}
              </p>
              <p v-if="capture.createdAt" class="text-xs text-gray-500 dark:text-gray-400">
                Created: {{ new Date(capture.createdAt).toLocaleString() }}
              </p>
            </div>
          </div>
        </div>

        <!-- API Key Configuration -->
        <div v-if="!hasApiKey" class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="ml-3">
              <h5 class="text-sm font-medium text-yellow-800 dark:text-yellow-400">
                Gemini API Key Required
              </h5>
              <p class="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                Please set the <code class="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">VITE_GEMINI_API_KEY</code> environment variable to use AI analysis features.
              </p>
              <p class="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
                You can get an API key from <a href="https://ai.google.dev/" target="_blank" class="underline">Google AI Studio</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Analysis Status -->
        <div v-if="analysisStatus" class="space-y-4">
          <!-- Current Analysis Progress -->
          <div v-if="isAnalyzing" class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h5 class="text-sm font-medium text-blue-800 dark:text-blue-400">
                Analyzing Images...
              </h5>
              <span class="text-sm text-blue-600 dark:text-blue-400">
                {{ analysisProgress.current || 0 }} / {{ analysisProgress.total || 0 }}
              </span>
            </div>
            
            <div class="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2 mb-3">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                :style="{ width: `${analysisProgress.percentage || 0}%` }"
              ></div>
            </div>
            
            <div v-if="analysisProgress.currentImage" class="text-xs text-blue-700 dark:text-blue-300">
              <p>Processing image {{ analysisProgress.currentImage.imageIndex }}...</p>
              <p v-if="analysisProgress.currentImage.peopleCount !== null" class="text-green-600 dark:text-green-400">
                Found {{ analysisProgress.currentImage.peopleCount }} people
              </p>
            </div>
          </div>

          <!-- Analysis Results Summary -->
          <div v-if="analysisResults && !isAnalyzing" class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h5 class="text-sm font-medium text-green-800 dark:text-green-400 mb-3">
              Analysis Complete
            </h5>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-lg font-semibold text-green-600 dark:text-green-400">
                  {{ analysisResults.totalImages || 0 }}
                </div>
                <div class="text-xs text-green-700 dark:text-green-300">Total Images</div>
              </div>
              <div>
                <div class="text-lg font-semibold text-green-600 dark:text-green-400">
                  {{ analysisResults.successfulAnalyses || 0 }}
                </div>
                <div class="text-xs text-green-700 dark:text-green-300">Analyzed</div>
              </div>
              <div>
                <div class="text-lg font-semibold text-green-600 dark:text-green-400">
                  {{ analysisResults.totalPeopleDetected || 0 }}
                </div>
                <div class="text-xs text-green-700 dark:text-green-300">People Found</div>
              </div>
              <div>
                <div class="text-lg font-semibold text-green-600 dark:text-green-400">
                  {{ analysisResults.averagePeoplePerImage || 0 }}
                </div>
                <div class="text-xs text-green-700 dark:text-green-300">Avg per Image</div>
              </div>
            </div>
            
            <div v-if="analysisResults.failedAnalyses > 0" class="mt-3 text-xs text-yellow-600 dark:text-yellow-400">
              ⚠️ {{ analysisResults.failedAnalyses }} images failed to analyze
            </div>
            
            <div class="mt-3 text-xs text-green-600 dark:text-green-400">
              ✅ Completed in {{ analysisResults.duration || 0 }} seconds
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="analysisError" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-3">
                <h5 class="text-sm font-medium text-red-800 dark:text-red-400">
                  Analysis Failed
                </h5>
                <p class="text-sm text-red-700 dark:text-red-300 mt-1">
                  {{ analysisError }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Images with Analysis Results -->
        <div v-if="imagesWithAnalysis && imagesWithAnalysis.allImages.length > 0" class="space-y-4">
          <div class="flex items-center justify-between">
            <h5 class="text-sm font-medium text-gray-900 dark:text-gray-100">
              Images & Analysis Results
            </h5>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              {{ imagesWithAnalysis.analyzedImages.length }} / {{ imagesWithAnalysis.totalImages }} analyzed 
              ({{ Math.round(imagesWithAnalysis.analysisProgress) }}%)
            </div>
          </div>

          <!-- Image Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
            <div 
              v-for="image in displayedImages" 
              :key="image.id"
              class="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden"
            >
              <!-- Image -->
              <div class="aspect-square">
                <img 
                  :src="image.downloadUrl" 
                  :alt="`Image ${image.index}`"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
              </div>
              
              <!-- Analysis Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <div class="absolute bottom-2 left-2 right-2">
                  <div class="text-white text-xs">
                    <div class="font-medium">Image {{ image.index }}</div>
                    <div v-if="image.geminiAnalysis" class="mt-1">
                      <div v-if="image.geminiAnalysis.success" class="text-green-300">
                        <div v-if="image.geminiAnalysis.peopleCount !== null">
                          👥 {{ image.geminiAnalysis.peopleCount }} people
                        </div>
                        <div class="text-xs opacity-80 truncate">
                          {{ image.geminiAnalysis.description }}
                        </div>
                      </div>
                      <div v-else class="text-red-300 text-xs">
                        ❌ Analysis failed
                      </div>
                    </div>
                    <div v-else class="text-gray-300 text-xs">
                      ⏳ Not analyzed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Load More Button -->
          <div v-if="imagesWithAnalysis.allImages.length > displayedImageCount" class="text-center">
            <button 
              class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
              @click="loadMoreImages"
            >
              Load More Images ({{ displayedImageCount }} / {{ imagesWithAnalysis.allImages.length }})
            </button>
          </div>
        </div>

        <!-- No Images Message -->
        <div v-else-if="capture && capture.imageCount === 0" class="text-center py-8">
          <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p class="text-gray-500 dark:text-gray-400">No images available for analysis</p>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Process this capture first to generate images
          </p>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-600 p-6">
        <div class="text-xs text-gray-500 dark:text-gray-400">
          <span v-if="hasApiKey">✅ Gemini API configured</span>
          <span v-else>❌ API key required</span>
        </div>
        
        <div class="flex space-x-3">
          <button 
            type="button"
            class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            :disabled="isAnalyzing || isResetting"
            @click="closeModal"
          >
            {{ isAnalyzing ? 'Analyzing...' : isResetting ? 'Resetting...' : 'Close' }}
          </button>
          
          <!-- Reset Analysis Button -->
          <button 
            v-if="hasApiKey && capture && capture.imageCount > 0 && hasAnalyzedImages"
            type="button"
            class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isAnalyzing || isResetting"
            @click="resetAnalysis"
          >
            <span v-if="isResetting">
              Resetting...
            </span>
            <span v-else>
              Reset Analysis
            </span>
          </button>
          
          <!-- Analyze Button -->
          <button 
            v-if="hasApiKey && capture && capture.imageCount > 0"
            type="button"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isAnalyzing || isResetting || !hasUnanalyzedImages"
            @click="startAnalysis"
          >
            <span v-if="isAnalyzing">
              Analyzing...
            </span>
            <span v-else-if="!hasUnanalyzedImages">
              All Images Analyzed
            </span>
            <span v-else>
              Analyze Images ({{ unanalyzedImageCount }})
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { analysisService } from '../services/analysis'

// Props
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  capture: {
    type: Object,
    default: null
  }
})

// Emits
const emit = defineEmits(['close', 'analyze'])

// Reactive state
const isAnalyzing = ref(false)
const isResetting = ref(false)
const analysisProgress = ref({})
const analysisResults = ref(null)
const analysisError = ref(null)
const analysisStatus = ref(false)
const imagesWithAnalysis = ref(null)
const displayedImageCount = ref(12) // Start by showing 12 images

// Computed properties
const hasApiKey = computed(() => {
  return !!(import.meta.env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY)
})

const displayedImages = computed(() => {
  if (!imagesWithAnalysis.value) return []
  return imagesWithAnalysis.value.allImages.slice(0, displayedImageCount.value)
})

const hasUnanalyzedImages = computed(() => {
  if (!imagesWithAnalysis.value) return false
  return imagesWithAnalysis.value.unanalyzedImages.length > 0
})

const unanalyzedImageCount = computed(() => {
  if (!imagesWithAnalysis.value) return 0
  return imagesWithAnalysis.value.unanalyzedImages.length
})

const hasAnalyzedImages = computed(() => {
  if (!imagesWithAnalysis.value) return false
  return imagesWithAnalysis.value.analyzedImages.length > 0
})

// Methods
const closeModal = () => {
  if (!isAnalyzing.value && !isResetting.value) {
    emit('close')
  }
}

const handleBackdropClick = () => {
  closeModal()
}

const loadMoreImages = () => {
  displayedImageCount.value += 12
}

const handleImageError = (event) => {
  console.log('Image failed to load:', event.target.src)
  // You could set a placeholder image here
}

const startAnalysis = async () => {
  if (!props.capture?.id || isAnalyzing.value || isResetting.value) return

  try {
    isAnalyzing.value = true
    analysisError.value = null
    analysisResults.value = null
    analysisStatus.value = true
    analysisProgress.value = { current: 0, total: 0, percentage: 0 }

    console.log('[CaptureAnalyzeModal] Starting analysis for capture:', props.capture.id)

    // Start the analysis
    const results = await analysisService.analyzeCaptureImages(
      props.capture.id,
      (progress) => {
        analysisProgress.value = progress
      }
    )

    analysisResults.value = results
    
    // Refresh the images with analysis data
    await loadImagesWithAnalysis()
    
    console.log('[CaptureAnalyzeModal] Analysis completed:', results)
    
    // Emit analyze event for parent component
    emit('analyze', {
      capture: props.capture,
      results: results
    })

  } catch (error) {
    console.error('[CaptureAnalyzeModal] Analysis failed:', error)
    analysisError.value = error.message || 'Analysis failed. Please try again.'
  } finally {
    isAnalyzing.value = false
  }
}

const resetAnalysis = async () => {
  if (!props.capture?.id || isAnalyzing.value || isResetting.value) return

  try {
    isResetting.value = true
    analysisError.value = null
    
    console.log('[CaptureAnalyzeModal] Resetting analysis for capture:', props.capture.id)

    // Reset the analysis
    const results = await analysisService.resetCaptureAnalysis(props.capture.id)
    
    // Clear local state
    analysisResults.value = null
    analysisStatus.value = false
    
    // Refresh the images with analysis data
    await loadImagesWithAnalysis()
    
    console.log('[CaptureAnalyzeModal] Analysis reset completed:', results)

  } catch (error) {
    console.error('[CaptureAnalyzeModal] Reset failed:', error)
    analysisError.value = error.message || 'Failed to reset analysis. Please try again.'
  } finally {
    isResetting.value = false
  }
}

const loadImagesWithAnalysis = async () => {
  if (!props.capture?.id) return

  try {
    console.log('[CaptureAnalyzeModal] Loading images with analysis data')
    const data = await analysisService.getImagesWithAnalysis(props.capture.id, { limit: 1000 })
    imagesWithAnalysis.value = data
  } catch (error) {
    console.error('[CaptureAnalyzeModal] Failed to load images:', error)
  }
}

// Watch for capture changes
watch(() => props.capture, async (newCapture) => {
  if (newCapture && props.show) {
    await loadImagesWithAnalysis()
    
    // Reset state when capture changes
    analysisResults.value = null
    analysisError.value = null
    analysisStatus.value = false
    displayedImageCount.value = 12
    isResetting.value = false
  }
}, { immediate: true })

// Watch for modal visibility
watch(() => props.show, async (show) => {
  if (show && props.capture) {
    await loadImagesWithAnalysis()
  }
})

// Load data when component mounts
onMounted(async () => {
  if (props.show && props.capture) {
    await loadImagesWithAnalysis()
  }
})
</script>

<style scoped>
/* Custom scrollbar for image grid */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-700 rounded;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  @apply bg-gray-400 dark:bg-gray-500 rounded;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500 dark:bg-gray-400;
}
</style> 