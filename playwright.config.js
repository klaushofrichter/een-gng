import { defineConfig, devices } from '@playwright/test'

// Read base URL from environment variable, default to local dev server
const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://127.0.0.1:3333'

// Determine if we're testing locally vs production deployment using proper URL parsing
let isLocalTesting = false
let isProductionTesting = false

try {
  const url = new URL(baseURL)
  // Properly validate hostname instead of using substring search
  isLocalTesting = url.hostname === '127.0.0.1' || url.hostname === 'localhost'
  isProductionTesting = url.hostname.endsWith('.github.io') && url.hostname.includes('.')
} catch (error) {
  console.warn('Invalid base URL provided:', baseURL)
  // Default to local testing if URL parsing fails
  isLocalTesting = true
  isProductionTesting = false
}

// Define webServer config only when testing locally (not in CI)
const webServer = !process.env.CI && isLocalTesting
  ? {
      command: 'NODE_ENV=test npm run dev',
      url: 'http://127.0.0.1:3333',
      reuseExistingServer: true, // Allow reusing existing server
      timeout: 120 * 1000, // Increased timeout for server start
      env: {
        NODE_ENV: 'test' // Enable coverage instrumentation
      }
    }
  : undefined

// Define test patterns based on environment
const getTestIgnorePatterns = () => {
  const patterns = []
  
  // Skip coverage tests when testing production deployments
  if (isProductionTesting) {
    patterns.push('**/coverage-*.spec.js')
    console.log('🏭 Production testing mode - skipping coverage tests')
  }
  
  return patterns
}

export default defineConfig({
  testDir: './tests',
  // Conditionally ignore coverage tests for production testing
  testIgnore: getTestIgnorePatterns(),
  fullyParallel: false, // Keep false due to shared auth state potentially
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1, // Keep workers at 1 due to auth tests potentially interfering
  reporter: process.env.CI ? 'github' : 'html',
  use: {
    baseURL: baseURL, // Use the dynamic baseURL
    trace: 'on-first-retry',
    video: 'retain-on-failure', // Only keep videos when tests fail
    screenshot: 'only-on-failure'
  },
  outputDir: './test-results/',
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Enable coverage collection in browser context
        contextOptions: {
          // Collect coverage if instrumentation is available
          ...(process.env.NODE_ENV === 'test' ? {
            // Enable coverage collection
            recordVideo: { dir: './test-results/videos/' }
          } : {})
        }
      }
    }
    // Add other browsers if needed
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  // Conditionally define webServer
  webServer: webServer
})
