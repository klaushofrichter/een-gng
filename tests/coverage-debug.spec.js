import { test, expect } from '@playwright/test'

/**
 * Debug test to check coverage instrumentation
 * This test only runs when coverage instrumentation is expected (NODE_ENV=test)
 */

test.describe('Coverage Debug', () => {
  
  // Skip this test if NODE_ENV is not 'test' 
  test.skip(() => process.env.NODE_ENV !== 'test', 'Coverage tests only run in test environment')
  
  test('check coverage instrumentation', async ({ page }) => {
    // Navigate to application
    await page.goto('/')
    
    // Check if coverage globals exist
    const coverageInfo = await page.evaluate(() => {
      return {
        hasCoverage: typeof window.__coverage__ !== 'undefined',
        hasIstanbul: typeof window.__istanbul__ !== 'undefined',
        hasNyc: typeof window.__nyc__ !== 'undefined',
        windowKeys: Object.keys(window).filter(key => key.includes('coverage') || key.includes('istanbul') || key.includes('nyc')),
        nodeEnv: window.__COVERAGE__ || 'not set'
      }
    })
    
    console.log('Coverage Information:', JSON.stringify(coverageInfo, null, 2))
    
    // Only proceed with coverage checks if we're in a test environment
    if (process.env.NODE_ENV === 'test') {
      // Check if any coverage-related globals exist
      if (coverageInfo.hasCoverage) {
        console.log('✅ __coverage__ global found')
        
        const coverageData = await page.evaluate(() => {
          return window.__coverage__ ? Object.keys(window.__coverage__).length : 0
        })
        
        console.log(`📊 Coverage data for ${coverageData} files`)
        
        // Expect coverage to be available in test environment
        expect(coverageData).toBeGreaterThan(0)
      } else {
        console.log('❌ No __coverage__ global found in test environment')
        // In test environment, we expect coverage to be available
        expect(coverageInfo.hasCoverage).toBe(true)
      }
    } else {
      console.log('ℹ️ Running in non-test environment - coverage instrumentation not expected')
    }
    
    // Check if Istanbul is available
    if (coverageInfo.hasIstanbul) {
      console.log('✅ __istanbul__ global found')
    }
    
    // Log environment
    console.log(`🌍 NODE_ENV coverage flag: ${coverageInfo.nodeEnv}`)
    console.log(`🔍 Coverage-related window keys: ${coverageInfo.windowKeys.join(', ') || 'none'}`)
    
    // Just verify the page loaded (this should work in any environment)
    await expect(page.getByText('Sign in with Eagle Eye Networks')).toBeVisible()
  })
  
}) 