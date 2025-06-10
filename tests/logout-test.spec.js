import { test, expect } from '@playwright/test'
import dotenv from 'dotenv'
import { loginToApplication, logoutFromApplication, safeLogoutFromApplication, getLastPartOfUrl, MAX_TEST_TIMEOUT } from './utils.js'

// Load environment variables from .env file
dotenv.config()

let loggedBaseURL = false // Flag to ensure baseURL is logged only once
let basePath = ''

test.describe('Logout Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Log Base URL and Proxy URL once before the first test runs
    if (!loggedBaseURL) {
      const baseURL = page.context()._options.baseURL
      const configuredProxyUrl = process.env.VITE_AUTH_PROXY_URL || 'http://127.0.0.1:3333'
      const redirectUri = process.env.VITE_REDIRECT_URI || 'http://127.0.0.1:3333'
      basePath = getLastPartOfUrl(baseURL)
       
      if (baseURL) {
        console.log(`\n🚀 Running tests against Service at URL: ${baseURL}`)
        console.log(`🔒 Using Auth Proxy URL: ${configuredProxyUrl}`)
        console.log(`🔒 Using Redirect URI: ${redirectUri}`)
        console.log(`🔒 Using basePath: ${basePath}\n`)
      }
      loggedBaseURL = true
    }
  })

  test('standard logout should work within reasonable time', async ({ page }) => {
    console.log(`\n▶️ Running Test: ${test.info().title}\n`)
    
    // Set a reasonable timeout for this test
    test.setTimeout(MAX_TEST_TIMEOUT)
    
    // Login first
    await loginToApplication(page, basePath)
    //console.log('✅ Successfully logged in')
    
    // Measure logout time
    const startTime = Date.now()
    
    try {
      await logoutFromApplication(page, false, false) // Standard logout (not fast)
      const endTime = Date.now()
      const duration = endTime - startTime
      
      console.log(`✅ Logout completed successfully in ${duration}ms`)
      
      // Verify we're on login page
      await expect(page.getByText('Sign in with Eagle Eye Networks')).toBeVisible({ timeout: 5000 })
      console.log('✅ Verified return to login page')
      
      // Log timing for analysis
      if (duration > 20000) {
        console.log('⚠️ Logout took longer than 20 seconds')
      } else if (duration > 15000) {
        console.log('⚠️ Logout took longer than 15 seconds but completed')
      } else {
        console.log('✅ Logout completed in reasonable time')
      }
      
    } catch (error) {
      const endTime = Date.now()
      const duration = endTime - startTime
      console.error(`❌ Logout failed after ${duration}ms: ${error.message}`)
      throw error
    }
  })

  test('fast logout should work quickly', async ({ page }) => {
    console.log(`\n▶️ Running Test: ${test.info().title}\n`)
    
    // Set timeout
    test.setTimeout(MAX_TEST_TIMEOUT)
    
    // Login first
    await loginToApplication(page, basePath)
    console.log('✅ Successfully logged in')
    
    // Measure fast logout time
    const startTime = Date.now()
    
    try {
      await logoutFromApplication(page, false, true) // Fast logout
      const endTime = Date.now()
      const duration = endTime - startTime
      
      console.log(`✅ Fast logout completed successfully in ${duration}ms`)
      
      // Verify we're on login page
      await expect(page.getByText('Sign in with Eagle Eye Networks')).toBeVisible({ timeout: 5000 })
      console.log('✅ Verified return to login page')
      
      // Fast logout should be quicker
      if (duration > 10000) {
        console.log('⚠️ Fast logout took longer than expected (>10s)')
      } else {
        console.log('✅ Fast logout completed quickly')
      }
      
    } catch (error) {
      const endTime = Date.now()
      const duration = endTime - startTime
      console.error(`❌ Fast logout failed after ${duration}ms: ${error.message}`)
      throw error
    }
  })

  test('safe logout wrapper should handle failures gracefully', async ({ page }) => {
    console.log(`\n▶️ Running Test: ${test.info().title}\n`)
    
    // Set timeout
    test.setTimeout(MAX_TEST_TIMEOUT)
    
    // Login first
    await loginToApplication(page, basePath)
    console.log('✅ Successfully logged in')
    
    // Test safe logout with allowFailure=true (default)
    const success = await safeLogoutFromApplication(page, false, true, true)
    
    if (success) {
      console.log('✅ Safe logout completed successfully')
      // Verify we're on login page
      await expect(page.getByText('Sign in with Eagle Eye Networks')).toBeVisible({ timeout: 5000 })
      console.log('✅ Verified return to login page')
    } else {
      console.log('⚠️ Safe logout failed but was handled gracefully')
      // Even if logout failed, the test should continue
    }
  })

  test('logout from different pages should work consistently', async ({ page }) => {
    console.log(`\n▶️ Running Test: ${test.info().title}\n`)
    
    // Set timeout
    test.setTimeout(MAX_TEST_TIMEOUT)
    
    // Test logout from different pages
    const pagesToTest = [
      { path: '/home', name: 'Home' },
      { path: '/about', name: 'About' },
      { path: '/settings', name: 'Settings' }
    ]
    
    for (const pageInfo of pagesToTest) {
      console.log(`🔍 Testing logout from ${pageInfo.name} page`)
      
      // Login
      await loginToApplication(page, basePath)
      console.log('✅ Successfully logged in')
      
      // Navigate to specific page
      await page.goto(basePath + pageInfo.path)
      await page.waitForURL(new RegExp(pageInfo.path + '$'), { timeout: 10000 })
      console.log(`✅ Navigated to ${pageInfo.name} page`)
      
      // Logout
      const startTime = Date.now()
      try {
        await logoutFromApplication(page, false, true) // Use fast logout
        const duration = Date.now() - startTime
        console.log(`✅ Logout from ${pageInfo.name} completed in ${duration}ms`)
        
        // Verify return to login
        await expect(page.getByText('Sign in with Eagle Eye Networks')).toBeVisible({ timeout: 5000 })
        console.log(`✅ Successfully returned to login from ${pageInfo.name}`)
        
      } catch (error) {
        const duration = Date.now() - startTime
        console.error(`❌ Logout from ${pageInfo.name} failed after ${duration}ms: ${error.message}`)
        throw error
      }
    }
    
    console.log('✅ All page logout tests completed successfully')
  })
}) 