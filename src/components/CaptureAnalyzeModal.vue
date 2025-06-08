<template>
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
      <div class="pb-4 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Analyze Capture</h3>
        <button 
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="closeModal"
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Modal Content -->
      <div class="p-6 space-y-4">
        <!-- Capture Information -->
        <div v-if="capture">
          <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Capture Details</h4>
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Left side: Capture info -->
              <div>
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ capture.name || 'Unnamed Capture' }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Camera: {{ capture.cameraId }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Created: {{ formatDate(capture.createdAt) }}</p>
                <p v-if="capture.imageCount" class="text-xs text-green-600 dark:text-green-400">
                  📁 {{ capture.imageCount }} images available
                </p>
              </div>
              
              <!-- Right side: Thumbnail -->
              <div v-if="capture.thumbnail" class="flex justify-end">
                <img 
                  :src="capture.thumbnail" 
                  alt="Thumbnail" 
                  class="rounded border border-gray-300 dark:border-gray-600 max-w-32 max-h-32 object-contain" 
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Analysis Options -->
        <div>
          <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Analysis Options</h4>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p class="text-sm text-blue-900 dark:text-blue-100 mb-3">
              Configure analysis parameters for this capture sequence.
            </p>
            
            <!-- Placeholder for future analysis options -->
            <div class="space-y-3">
              <div class="flex items-center">
                <input 
                  id="motion-detection" 
                  type="checkbox" 
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  disabled
                >
                <label for="motion-detection" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Motion Detection (Coming Soon)
                </label>
              </div>
              
              <div class="flex items-center">
                <input 
                  id="object-detection" 
                  type="checkbox" 
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  disabled
                >
                <label for="object-detection" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Object Detection (Coming Soon)
                </label>
              </div>
              
              <div class="flex items-center">
                <input 
                  id="time-lapse" 
                  type="checkbox" 
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  disabled
                >
                <label for="time-lapse" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Time-lapse Generation (Coming Soon)
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Analysis Status -->
        <div v-if="isAnalyzing" class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h4 class="text-sm font-medium text-yellow-900 dark:text-yellow-100 mb-2">Analysis in Progress</h4>
          <div class="flex items-center space-x-2">
            <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
            <span class="text-sm text-yellow-700 dark:text-yellow-300">Processing capture data...</span>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex justify-end pt-6 px-6 pb-6 border-t border-gray-200 dark:border-gray-600 mt-6 space-x-3">
        <button 
          class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
          @click="closeModal"
        >
          Cancel
        </button>
        <button 
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          :disabled="isAnalyzing || !capture?.imageCount"
          @click="runAnalysis"
        >
          <div v-if="isAnalyzing" class="flex items-center space-x-2">
            <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Running...</span>
          </div>
          <span v-else>Run Analysis</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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

// State
const isAnalyzing = ref(false)

// Methods
const closeModal = () => {
  emit('close')
}

const handleModalBackdropClick = (event) => {
  // Only close if clicking the backdrop, not the modal content
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

const runAnalysis = async () => {
  if (!props.capture || !props.capture.imageCount) {
    console.warn('[CaptureAnalyzeModal] No capture or images available for analysis')
    return
  }

  isAnalyzing.value = true
  
  try {
    console.log('[CaptureAnalyzeModal] Starting analysis for capture:', props.capture.id)
    
    // Emit analyze event to parent component
    emit('analyze', props.capture)
    
    // Placeholder for actual analysis logic
    // This will be implemented in future iterations
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate processing
    
    console.log('[CaptureAnalyzeModal] Analysis completed')
  } catch (error) {
    console.error('[CaptureAnalyzeModal] Analysis failed:', error)
  } finally {
    isAnalyzing.value = false
  }
}

const formatDate = (dateString) => {
  if (!dateString) return 'Unknown'
  try {
    return new Date(dateString).toLocaleString()
  } catch (error) {
    return 'Invalid Date'
  }
}
</script> 