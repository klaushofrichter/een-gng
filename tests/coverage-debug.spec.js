import { test, expect } from '@playwright/test'

/**
 * Debug test to check coverage instrumentation
 */

test.describe('Coverage Debug', () => {
  
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
    
    // Check if any coverage-related globals exist
    if (coverageInfo.hasCoverage) {
      console.log('✅ __coverage__ global found')
      
      const coverageData = await page.evaluate(() => {
        return window.__coverage__ ? Object.keys(window.__coverage__).length : 0
      })
      
      console.log(`📊 Coverage data for ${coverageData} files`)
    } else {
      console.log('❌ No __coverage__ global found')
    }
    
    // Check if Istanbul is available
    if (coverageInfo.hasIstanbul) {
      console.log('✅ __istanbul__ global found')
    }
    
    // Log environment
    console.log(`🌍 NODE_ENV coverage flag: ${coverageInfo.nodeEnv}`)
    console.log(`🔍 Coverage-related window keys: ${coverageInfo.windowKeys.join(', ') || 'none'}`)
    
    // Just verify the page loaded
    await expect(page.getByText('Sign in with Eagle Eye Networks')).toBeVisible()
  })
  
}) 