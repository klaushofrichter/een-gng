// Simple test to debug Capture navigation issue
import { test, expect } from '@playwright/test'
import { loginToApplication, clickNavButton } from './tests/utils.js'

test('debug capture navigation', async ({ page }) => {
  // Login first
  await loginToApplication(page)
  console.log('✅ Logged in successfully')
  
  // Try to navigate to Capture page
  console.log('🔍 Attempting to navigate to Capture page...')
  try {
    await clickNavButton(page, 'Capture')
    console.log('✅ Capture navigation successful!')
  } catch (error) {
    console.error('❌ Capture navigation failed:', error.message)
    
    // Try direct URL navigation as backup
    console.log('🔄 Trying direct URL navigation...')
    await page.goto('/capture')
    await page.waitForTimeout(2000)
    
    const finalUrl = page.url()
    console.log('📍 Final URL:', finalUrl)
    
    // Check if page loaded
    const pageText = await page.textContent('body')
    console.log('📄 Page contains "Capture":', pageText.includes('Capture'))
  }
}) 