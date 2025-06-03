import { test, expect } from '@playwright/test'
import { loginToApplication, logoutFromApplication } from './utils.js'
import { collectCoverage } from './coverage-helper.js'

/**
 * Example test demonstrating coverage collection
 * This test can be used as a template for other tests that need coverage
 * Coverage collection is gracefully skipped when not available (e.g., in production)
 */

test.describe('Coverage Collection Example', () => {
  
  test('basic navigation with coverage collection', async ({ page }) => {
    // Navigate to application
    await page.goto('/')
    
    // Verify we're on login page
    await expect(page.getByText('Sign in with Eagle Eye Networks')).toBeVisible()
    
    // Login
    await loginToApplication(page)
    
    // Verify we're logged in and on home page
    await expect(page.getByText('Welcome to')).toBeVisible()
    
    // Navigate to different pages to exercise code
    await page.getByRole('link', { name: 'Capture' }).click()
    await expect(page.getByRole('heading', { name: 'Capture', level: 3 })).toBeVisible()
    
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page.getByRole('heading', { name: 'About', level: 3 })).toBeVisible()
    
    await page.getByRole('link', { name: 'Profile' }).click()
    await expect(page.getByRole('heading', { name: 'Profile', level: 3 })).toBeVisible()
    
    // Collect coverage data before logout (gracefully skips if not available)
    await collectCoverage(page, 'basic-navigation')
    
    // Logout
    await logoutFromApplication(page, false, true)
  })
  
  test('capture page functionality with coverage', async ({ page }) => {
    await loginToApplication(page)
    
    // Navigate to capture page
    await page.getByRole('link', { name: 'Capture' }).click()
    await expect(page.getByRole('heading', { name: 'Capture', level: 3 })).toBeVisible()
    
    // Test capture functionality (if available)
    if (await page.locator('[data-testid="new-capture-button"]').isVisible()) {
      await page.locator('[data-testid="new-capture-button"]').click()
      // Add more capture testing here
    }
    
    // Collect coverage for this specific functionality (gracefully skips if not available)
    await collectCoverage(page, 'capture-functionality')
    
    await logoutFromApplication(page, false, true)
  })
  
}) 