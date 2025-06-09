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
              <p v-if="analysisProgress.currentImage?.peopleCount !== null" class="text-green-600 dark:text-green-400">
                Found {{ analysisProgress.currentImage?.peopleCount }} people
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

          <!-- Download Success Message -->
          <div v-if="downloadSuccess" class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-3">
                <h5 class="text-sm font-medium text-green-800 dark:text-green-400">
                  Download Successful
                </h5>
                <p class="text-sm text-green-700 dark:text-green-300 mt-1">
                  Analysis data has been downloaded successfully
                </p>
              </div>
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
          <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-96 overflow-y-auto">
            <div 
              v-for="image in displayedImages" 
              :key="image.id"
              class="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer group"
              :title="image.geminiAnalysis?.success ? formatDescription(image.geminiAnalysis?.description) : ''"
              @click="openImageDetail(image)"
            >
              <!-- Image -->
              <div class="aspect-square">
                <img 
                  :src="image.downloadUrl" 
                  :alt="`Image ${image.index}`"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                  @error="handleImageError"
                />
              </div>
              
              <!-- Analysis Overlay (simplified) -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <div class="absolute bottom-1 left-1 right-1">
                  <div class="text-white text-xs">
                    <div class="font-medium">{{ image.index }} / {{ totalImages }}</div>
                                          <div v-if="image.geminiAnalysis" class="mt-0.5">
                        <div v-if="image.geminiAnalysis?.success" class="text-green-300">
                        <div v-if="image.geminiAnalysis?.peopleCount !== null">
                          👥 {{ image.geminiAnalysis.peopleCount }}
                        </div>
                      </div>
                      <div v-else class="text-red-300 text-xs">
                        ❌ Failed
                      </div>
                    </div>
                    <div v-else class="text-gray-300 text-xs">
                      ⏳ Pending
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination Controls -->
          <div v-if="totalPages > 1" class="flex items-center justify-center space-x-4 mt-4">
            <button 
              class="flex items-center px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="currentPage === 1"
              @click="previousPage"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg>
              Previous
            </button>
            
            <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Page {{ currentPage }} of {{ totalPages }}</span>
              <span class="text-gray-400">•</span>
              <span>{{ startImageIndex + 1 }}-{{ endImageIndex }} of {{ totalImages }}</span>
            </div>
            
            <button 
              class="flex items-center px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="currentPage === totalPages"
              @click="nextPage"
            >
              Next
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>

          <!-- People Count Over Time Chart -->
          <div v-if="hasAnalyzedImages && chartData.length > 1" class="mt-6 border-t border-gray-200 dark:border-gray-600 pt-4">
            <div class="mb-4">
              <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">People Count Over Time</h4>
              <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 p-4">
                <!-- Chart SVG -->
                <div class="w-full h-64 relative">
                  <svg 
                    class="w-full h-full" 
                    viewBox="0 0 800 200" 
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <!-- Grid lines -->
                    <defs>
                      <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" stroke-width="0.5" opacity="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    <!-- Y-axis labels -->
                    <g v-for="(tick, index) in yAxisTicks" :key="`y-${index}`">
                      <text 
                        :x="35" 
                        :y="190 - (tick.value / maxPeopleCount) * 160" 
                        text-anchor="end" 
                        class="text-xs fill-gray-500 dark:fill-gray-400"
                        dominant-baseline="middle"
                      >
                        {{ tick.value }}
                      </text>
                      <line 
                        :x1="40" 
                        :x2="760" 
                        :y1="190 - (tick.value / maxPeopleCount) * 160" 
                        :y2="190 - (tick.value / maxPeopleCount) * 160" 
                        stroke="#e5e7eb" 
                        stroke-width="0.5" 
                        opacity="0.3"
                      />
                    </g>
                    
                    <!-- X-axis -->
                    <line x1="40" y1="190" x2="760" y2="190" stroke="#374151" stroke-width="1"/>
                    <!-- Y-axis -->
                    <line x1="40" y1="30" x2="40" y2="190" stroke="#374151" stroke-width="1"/>
                    
                    <!-- Data line -->
                    <polyline 
                      :points="chartLinePoints" 
                      fill="none" 
                      stroke="#3b82f6" 
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    
                    <!-- Data points -->
                    <g v-for="(point, index) in chartData" :key="`point-${index}`">
                      <circle 
                        :cx="40 + (index / (chartData.length - 1)) * 720" 
                        :cy="190 - (point.peopleCount / maxPeopleCount) * 160" 
                        r="4" 
                        :fill="point.peopleCount > 0 ? '#3b82f6' : '#9ca3af'"
                        stroke="white" 
                        stroke-width="2"
                        class="cursor-pointer"
                        @click="showChartImageDetail(point)"
                      >
                        <title>{{ formatChartTooltip(point) }}</title>
                      </circle>
                    </g>
                    
                    <!-- X-axis time labels -->
                    <g v-for="(point, index) in chartData.filter((_, i) => i % Math.max(1, Math.floor(chartData.length / 6)) === 0)" :key="`time-${index}`">
                      <text 
                        :x="40 + (chartData.indexOf(point) / (chartData.length - 1)) * 720" 
                        y="205" 
                        text-anchor="middle" 
                        class="text-xs fill-gray-500 dark:fill-gray-400"
                      >
                        {{ formatTimeLabel(point.timestamp) }}
                      </text>
                    </g>
                  </svg>
                </div>
                
                <!-- Chart Legend & Stats -->
                <div class="mt-4 flex items-center justify-between text-sm">
                  <div class="flex items-center space-x-6">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span class="text-gray-600 dark:text-gray-400">People detected</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-600 dark:text-gray-400">No people</span>
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400">
                    Max: {{ maxPeopleCount }} • Avg: {{ averagePeopleCount }} • Total images: {{ chartData.length }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Detailed Analysis View -->
          <div v-if="hasAnalyzedImages" class="mt-6 border-t border-gray-200 dark:border-gray-600 pt-4">
            <button 
              @click="showDetailedAnalysis = !showDetailedAnalysis"
              class="flex items-center justify-between w-full text-left px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                Detailed Analysis Descriptions
              </span>
              <svg 
                class="w-4 h-4 text-gray-500 transition-transform"
                :class="{ 'rotate-180': showDetailedAnalysis }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div v-if="showDetailedAnalysis" class="mt-3 space-y-3 max-h-60 overflow-y-auto">
              <div 
                v-for="image in imagesWithAnalysis.analyzedImages.filter(img => img.geminiAnalysis?.success)" 
                :key="image.id"
                class="border border-gray-200 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-800"
              >
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <img 
                      :src="image.downloadUrl" 
                      :alt="`Image ${image.index}`"
                      class="w-16 h-16 object-cover rounded-lg"
                      @error="handleImageError"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center space-x-2 mb-2">
                      <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Image {{ image.index }}
                      </span>
                                             <span v-if="image.geminiAnalysis?.peopleCount !== null" class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                         👥 {{ image.geminiAnalysis?.peopleCount }} people
                      </span>
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                      {{ formatDescription(image.geminiAnalysis?.description) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Images Message -->
        <div v-else-if="capture && capture.imageCount === 0" class="text-center py-8">
          <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p class="text-gray-500 dark:text-gray-400">No images available for analysis</p>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Get images for this capture first to generate images
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
          
          <!-- Download Button -->
          <button 
            v-if="hasAnalyzedImages"
            type="button"
            class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isAnalyzing || isResetting"
            @click="downloadAnalysisData"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download
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

    <!-- Image Detail Modal -->
    <div 
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      @click="closeImageDetail"
    >
      <div class="max-w-4xl max-h-[90vh] mx-4 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl" @click.stop>
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center space-x-3">
                         <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
               Image {{ selectedImage.index }} / {{ totalImages }}
             </h3>
            <span v-if="selectedImage.geminiAnalysis?.peopleCount !== null" class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              👥 {{ selectedImage.geminiAnalysis?.peopleCount }} people
            </span>
            <span v-if="selectedImage.geminiAnalysis?.confidence" class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {{ selectedImage.geminiAnalysis?.confidence }} confidence
            </span>
          </div>
          <button 
            @click="closeImageDetail"
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="overflow-y-auto max-h-[calc(90vh-8rem)]">
          <!-- Large Image -->
          <div class="p-6">
            <div class="flex justify-center mb-6">
              <img 
                :src="selectedImage.downloadUrl" 
                :alt="`Image ${selectedImage.index}`"
                class="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
                @error="handleImageError"
              />
            </div>

            <!-- Description -->
            <div v-if="selectedImage.geminiAnalysis?.success && selectedImage.geminiAnalysis?.description" class="space-y-4">
              <h4 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                Analysis Description
              </h4>
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div class="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {{ formatDescription(selectedImage.geminiAnalysis?.description) }}
                </div>
              </div>
              
                             <!-- Analysis Metadata -->
               <div class="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                 <div v-if="selectedImage.geminiAnalysis?.analysisTimestamp">
                   <span class="font-medium">Analyzed:</span>
                   {{ new Date(selectedImage.geminiAnalysis?.analysisTimestamp).toLocaleString() }}
                 </div>
                 <div v-if="selectedImage.geminiAnalysis?.confidence">
                   <span class="font-medium">Confidence:</span>
                   {{ selectedImage.geminiAnalysis?.confidence }}
                 </div>
               </div>
             </div>

             <!-- No Analysis Message -->
             <div v-else-if="!selectedImage.geminiAnalysis" class="text-center py-8">
              <div class="text-gray-400 dark:text-gray-500 mb-2">⏳</div>
              <p class="text-gray-500 dark:text-gray-400">No analysis available for this image</p>
            </div>

            <!-- Failed Analysis Message -->
            <div v-else class="text-center py-8">
              <div class="text-red-400 mb-2">❌</div>
              <p class="text-red-500 dark:text-red-400">Analysis failed for this image</p>
            </div>

            <!-- Image Capture Information -->
            <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
              <h4 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                Image Information
              </h4>
              <div class="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div v-if="selectedImage.timestamp">
                  <span class="font-medium">Captured:</span>
                  {{ new Date(selectedImage.timestamp).toLocaleString() }}
                </div>
                <div v-if="selectedImage.createdAt">
                  <span class="font-medium">Created:</span>
                  {{ new Date(selectedImage.createdAt).toLocaleString() }}
                </div>
                <div v-if="selectedImage.uploadedAt">
                  <span class="font-medium">Uploaded:</span>
                  {{ new Date(selectedImage.uploadedAt).toLocaleString() }}
                </div>
                <div>
                  <span class="font-medium">Image ID:</span>
                  {{ selectedImage.id }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-600">
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Click outside or press ESC to close
          </div>
          <button 
            @click="closeImageDetail"
            class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { analysisService } from '../services/analysis'
import { smartGeminiService } from '../services/gemini-smart'

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
const currentPage = ref(1)
const showDetailedAnalysis = ref(false)
const selectedImage = ref(null)
const downloadSuccess = ref(false)

// Utility function to format description with proper bullet points
const formatDescription = (description) => {
  if (!description) return ''
  
  // Replace "* " with "\n• " to create proper bullet points with line breaks
  // First occurrence doesn't need a leading newline
  return description
    .replace(/^\*\s+/, '• ') // Replace first "* " with "• "
    .replace(/\*\s+/g, '\n• ') // Replace subsequent "* " with "\n• "
    .trim()
}

// Computed properties
const hasApiKey = computed(() => {
  // Check if the smart Gemini service is available (either secure Cloud Function or local API key)
  return smartGeminiService.isAvailable()
})



// Pagination configuration (4 rows max)
const imagesPerPage = computed(() => {
  // Based on grid: grid-cols-3 md:grid-cols-4 lg:grid-cols-6
  // For 4 rows: 3×4=12, 4×4=16, 6×4=24
  // Use medium breakpoint as default
  return 16 // 4 rows × 4 columns
})

const totalImages = computed(() => {
  return imagesWithAnalysis.value?.allImages.length || 0
})

const totalPages = computed(() => {
  return Math.ceil(totalImages.value / imagesPerPage.value)
})

const startImageIndex = computed(() => {
  return (currentPage.value - 1) * imagesPerPage.value
})

const endImageIndex = computed(() => {
  return Math.min(startImageIndex.value + imagesPerPage.value, totalImages.value)
})

const displayedImages = computed(() => {
  if (!imagesWithAnalysis.value) return []
  return imagesWithAnalysis.value.allImages.slice(startImageIndex.value, endImageIndex.value)
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

// Chart data computed properties
const chartData = computed(() => {
  if (!hasAnalyzedImages.value) return []
  
  // Get analyzed images and sort by timestamp
  const sortedImages = [...imagesWithAnalysis.value.analyzedImages]
    .filter(img => img.geminiAnalysis?.success && img.timestamp)
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
    .map(img => ({
      imageId: img.id,
      imageIndex: img.index,
      timestamp: img.timestamp,
      peopleCount: img.geminiAnalysis?.peopleCount || 0,
      description: img.geminiAnalysis?.description,
      downloadUrl: img.downloadUrl
    }))
  
  return sortedImages
})

const maxPeopleCount = computed(() => {
  if (chartData.value.length === 0) return 10
  const max = Math.max(...chartData.value.map(d => d.peopleCount))
  return max > 0 ? max + 1 : 5 // Add some headroom
})

const averagePeopleCount = computed(() => {
  if (chartData.value.length === 0) return 0
  const total = chartData.value.reduce((sum, d) => sum + d.peopleCount, 0)
  return Math.round((total / chartData.value.length) * 10) / 10
})

const yAxisTicks = computed(() => {
  const ticks = []
  const step = Math.max(1, Math.ceil(maxPeopleCount.value / 5))
  for (let i = 0; i <= maxPeopleCount.value; i += step) {
    ticks.push({ value: i })
  }
  return ticks
})

const chartLinePoints = computed(() => {
  if (chartData.value.length < 2) return ''
  
  const points = chartData.value.map((point, index) => {
    const x = 40 + (index / (chartData.value.length - 1)) * 720
    const y = 190 - (point.peopleCount / maxPeopleCount.value) * 160
    return `${x},${y}`
  })
  
  return points.join(' ')
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

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const openImageDetail = (image) => {
  selectedImage.value = image
}

const closeImageDetail = () => {
  selectedImage.value = null
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    if (selectedImage.value) {
      closeImageDetail()
    } else {
      closeModal()
    }
  }
}

const handleImageError = (event) => {
  console.log('Image failed to load:', event.target.src)
  // You could set a placeholder image here
}

// Chart helper methods
const formatTimeLabel = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
}

const formatChartTooltip = (point) => {
  const time = new Date(point.timestamp).toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
  return `Image ${point.imageIndex} at ${time}: ${point.peopleCount} people`
}

const showChartImageDetail = (point) => {
  // Find the full image object and show detail modal
  const fullImage = imagesWithAnalysis.value.analyzedImages.find(img => img.id === point.imageId)
  if (fullImage) {
    openImageDetail(fullImage)
  }
}

const startAnalysis = async () => {
  if (!props.capture?.id || isAnalyzing.value || isResetting.value) return

  try {
    isAnalyzing.value = true
    analysisError.value = null
    analysisResults.value = null
    analysisStatus.value = true
    analysisProgress.value = { current: 0, total: 0, percentage: 0 }
    downloadSuccess.value = false

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
    downloadSuccess.value = false
    
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

const downloadAnalysisData = () => {
  if (!props.capture || !imagesWithAnalysis.value) {
    console.error('[CaptureAnalyzeModal] Missing data for download')
    return
  }
  
  if (!hasAnalyzedImages.value) {
    console.error('[CaptureAnalyzeModal] No analyzed images available for download')
    return
  }

  try {
    console.log('[CaptureAnalyzeModal] Generating analysis data for download')

    // Create comprehensive analysis data object
    const analysisData = {
      // Capture metadata
      capture: {
        id: props.capture.id,
        name: props.capture.name || 'Unnamed Capture',
        description: props.capture.description || '',
        cameraId: props.capture.cameraId,
        createdAt: props.capture.createdAt,
        processedAt: props.capture.processedAt,
        startDate: props.capture.startDate,
        duration: props.capture.duration,
        interval: props.capture.interval,
        imageCount: props.capture.imageCount || 0,
        eenUserEmailField: props.capture.eenUserEmailField
      },
      
      // Analysis summary
      analysisSummary: {
        ...(analysisResults.value || {}), // Handle case where analysisResults is null
        analysisCompletedAt: new Date().toISOString(),
        totalImagesInCapture: imagesWithAnalysis.value.totalImages,
        imagesAnalyzed: imagesWithAnalysis.value.analyzedImages.length,
        imagesNotAnalyzed: imagesWithAnalysis.value.unanalyzedImages.length,
        analysisProgress: Math.round(imagesWithAnalysis.value.analysisProgress),
        // Calculate summary from actual image data if analysisResults is null
        totalPeopleDetected: imagesWithAnalysis.value.analyzedImages.reduce((sum, img) => 
          sum + (img.geminiAnalysis?.peopleCount || 0), 0),
        averagePeoplePerImage: imagesWithAnalysis.value.analyzedImages.length > 0
          ? Math.round((imagesWithAnalysis.value.analyzedImages.reduce((sum, img) => 
              sum + (img.geminiAnalysis?.peopleCount || 0), 0) / imagesWithAnalysis.value.analyzedImages.length) * 10) / 10
          : 0
      },
      
      // Detailed image analysis results
      imageAnalysis: imagesWithAnalysis.value.analyzedImages.map(image => ({
        // Image metadata
        imageId: image.id,
        imageIndex: image.index,
        timestamp: image.timestamp,
        uploadedAt: image.uploadedAt,
        downloadUrl: image.downloadUrl,
        storagePath: image.storagePath,
        size: image.size,
        
        // Gemini analysis results
        geminiAnalysis: image.geminiAnalysis ? {
          success: image.geminiAnalysis.success,
          description: image.geminiAnalysis.description,
          peopleCount: image.geminiAnalysis.peopleCount,
          confidence: image.geminiAnalysis.confidence,
          analysisTimestamp: image.geminiAnalysis.analysisTimestamp,
          error: image.geminiAnalysis.error || null
        } : null
      })),
      
      // Images without analysis (for completeness)
      unanalyzedImages: imagesWithAnalysis.value.unanalyzedImages.map(image => ({
        imageId: image.id,
        imageIndex: image.index,
        timestamp: image.timestamp,
        uploadedAt: image.uploadedAt,
        downloadUrl: image.downloadUrl,
        storagePath: image.storagePath,
        size: image.size,
        status: 'not_analyzed'
      })),
      
      // Export metadata
      exportMetadata: {
        exportedAt: new Date().toISOString(),
        exportedBy: props.capture.eenUserEmailField || 'unknown',
        version: '1.0',
        format: 'JSON',
        description: 'AI Image Analysis Results Export from EEN-GNG Application'
      }
    }

    // Create filename with capture name and timestamp
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-')
    const captureName = (props.capture.name || 'capture').replace(/[^a-zA-Z0-9-_]/g, '_')
    const filename = `analysis_${captureName}_${timestamp}.json`

    // Create and download the file
    const jsonString = JSON.stringify(analysisData, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    // Create temporary download link
    const downloadLink = document.createElement('a')
    downloadLink.href = url
    downloadLink.download = filename
    downloadLink.style.display = 'none'
    
    // Trigger download
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
    
    // Clean up object URL
    URL.revokeObjectURL(url)
    
    console.log(`[CaptureAnalyzeModal] Analysis data downloaded as: ${filename}`)
    console.log(`[CaptureAnalyzeModal] Export included ${analysisData.imageAnalysis.length} analyzed images`)
    
    // Show success message
    downloadSuccess.value = true
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      downloadSuccess.value = false
    }, 3000)
    
  } catch (error) {
    console.error('[CaptureAnalyzeModal] Error downloading analysis data:', error)
    // Show error in the existing error display
    analysisError.value = `Download failed: ${error.message}`
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
    currentPage.value = 1
    isResetting.value = false
    closeImageDetail()
  }
}, { immediate: true })

// Watch for modal visibility
watch(() => props.show, async (show) => {
  if (show && props.capture) {
    await loadImagesWithAnalysis()
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeydown)
  } else {
    // Remove keyboard event listener
    document.removeEventListener('keydown', handleKeydown)
    // Close image detail if modal is closing
    closeImageDetail()
  }
})

// Load data when component mounts
onMounted(async () => {
  if (props.show && props.capture) {
    await loadImagesWithAnalysis()
    document.addEventListener('keydown', handleKeydown)
  }
})

// Cleanup when component unmounts
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
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