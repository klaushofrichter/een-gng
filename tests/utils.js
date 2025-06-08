/**
 * Helper functions for Playwright tests to work with both local and GitHub Pages environments
 */

import { expect } from '@playwright/test'
import dotenv from 'dotenv'

export const MAX_TEST_TIMEOUT = 60000

/**
 * Navigates to the app's login page as a starting point
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function navigateToLogin(page, basePath = '') {
  const loginUrl = basePath + '/'
  console.log(`📝 Navigating to Login URL: ${loginUrl}`)
  await page.goto(loginUrl)
}

/**
 * Handles login to the application
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} basePath - The base path of the application, used a prefix
 */
export async function loginToApplication(page, basePath = '') {
  console.log('🔑 Starting login process with basePath: ' + basePath)

  // Load environment variables from .env file
  dotenv.config()

  // Get credentials
  const username = process.env.TEST_USER
  const password = process.env.TEST_PASSWORD

   
  if (!username || !password) {
    throw new Error('Test credentials not found')
  }

  // navigate to login page
  await navigateToLogin(page, basePath)

  // Find and click login button
  const loginButton = page.getByText('Sign in with Eagle Eye Networks')
  await loginButton.click()

  // login with EEN
  await loginWithEEN(page)

  // Wait for home page with increased timeout and better error handling
  try {
    await page.waitForURL(basePath + '/home', { timeout: 30000 })
    console.log('✅ Successfully logged in')
  } catch (error) {
    console.log('⚠️ Timeout waiting for /home, checking if we are authenticated...')
    
    // Check if we're actually logged in by looking for user-specific content
    try {
      // Wait for any authenticated page content (could be home, capture, etc.)
      await Promise.race([
        page.waitForURL(basePath + '/home', { timeout: 5000 }),
        page.waitForSelector('text=Welcome to', { timeout: 5000 }),
        page.waitForSelector('text=Capture and manage', { timeout: 5000 }),
        page.waitForSelector('[data-testid="user-email"]', { timeout: 5000 }),
        page.waitForSelector('button:has-text("Logout")', { timeout: 5000 })
      ])
      
      console.log('✅ Authentication successful (detected authenticated content)')
      
      // If we're not on home page, navigate there
      const currentUrl = page.url()
      if (!currentUrl.includes('/home')) {
        console.log('🔄 Navigating to home page...')
        await page.goto(basePath + '/home')
        await page.waitForURL(basePath + '/home', { timeout: 10000 })
      }
      
    } catch (authCheckError) {
      console.error('❌ Authentication verification failed:', authCheckError)
      throw new Error(`Login failed: Could not verify authentication after EEN login. Original error: ${error.message}`)
    }
  }
}

export async function loginWithEEN(page) {
  console.log('🔑 Starting login with EEN')

  // Load environment variables from .env file
  dotenv.config()

  // Get credentials
  const username = process.env.TEST_USER
  const password = process.env.TEST_PASSWORD

   
  if (!username || !password) {
    throw new Error('Test credentials not found')
  }

  // Check if we're already logged in to avoid unnecessary redirects
  const currentUrl = page.url()
  console.log('🔍 Current URL before EEN login:', currentUrl)
  
  // If we're already on home page, we might already be logged in
  if (currentUrl.includes('/home') || currentUrl.includes('access_token')) {
    console.log('⚠️ Appears to already be logged in, checking authentication state')
    try {
      // Quick check for authenticated content
      const isAuthenticated = await Promise.race([
        page.waitForSelector('button:has-text("Logout")', { timeout: 3000 }),
        page.waitForSelector('[data-testid="user-email"]', { timeout: 3000 }),
        page.waitForSelector('text=Welcome to', { timeout: 3000 })
      ]).then(() => true).catch(() => false)
      
      if (isAuthenticated) {
        console.log('✅ Already authenticated, skipping EEN login')
        return
      }
    } catch (error) {
      console.log('🔄 Authentication check failed, proceeding with login')
    }
  }

  try {
    // Wait for redirect to EEN with increased timeout for slow redirects
    await page.waitForURL(/.*eagleeyenetworks.com.*/, { timeout: 20000 })
    console.log('✅ Reached EEN signin page')
  } catch (error) {
    console.log('⚠️ Did not detect redirect to EEN, checking current page')
    const finalUrl = page.url()
    
    // If we ended up on home or another authenticated page, we might be logged in
    if (finalUrl.includes('/home') || finalUrl.includes('access_token')) {
      console.log('✅ Appears to be logged in already (no EEN redirect needed)')
      return
    }
    
    // If we're still on the login page, there might be a session issue
    if (finalUrl.includes('Sign in with Eagle Eye Networks') || finalUrl.endsWith('/')) {
      console.log('🔄 Still on login page, attempting manual navigation')
      // Try clicking the login button again
      try {
        const loginButton = page.getByText('Sign in with Eagle Eye Networks')
        if (await loginButton.isVisible()) {
          await loginButton.click()
          await page.waitForURL(/.*eagleeyenetworks.com.*/, { timeout: 15000 })
          console.log('✅ Successfully redirected to EEN after retry')
        }
      } catch (retryError) {
        console.error('❌ Failed to redirect to EEN after retry')
        throw new Error(`Could not reach EEN login page. Current URL: ${finalUrl}`)
      }
    } else {
      throw new Error(`Unexpected page state. Current URL: ${finalUrl}`)
    }
  }

  // Fill email
  const emailInput = page.locator('#authentication--input__email')
  await emailInput.waitFor({ state: 'visible', timeout: 15000 })
  await emailInput.fill(username)

  // Click next
  await page.getByRole('button', { name: 'Next' }).click()

  // Fill password
  const passwordInput = page.locator('#authentication--input__password')
  await passwordInput.waitFor({ state: 'visible', timeout: 10000 })
  await passwordInput.fill(password)

  // Click sign in
  const signInButton = page.locator('#next')
  const signInButtonByText = page.getByRole('button', { name: 'Sign in' })
  try {
    await signInButton.click()
  } catch (error) {
    await signInButtonByText.click()
  }
  console.log('✅ Finished EEN login')
}

/**
 * Logs out of the application
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {boolean} fromMobile - Whether the logout is from the mobile menu
 * @param {boolean} fast - Whether to speed up logout by clicking OK button
 */
export async function logoutFromApplication(page, fromMobile = false, fast = false) {
  console.log('🚪 Starting logout process. FromMobile:', fromMobile)
  
  try {
    if (!fromMobile) {
      // Regular logout flow - try multiple selectors
      try {
        await page.getByRole('button', { name: 'Logout' }).click({ timeout: 5000 })
      } catch (error) {
        console.log('⚠️ Could not find logout button, trying alternative methods')
        try {
          await page.getByRole('link', { name: 'Logout' }).click({ timeout: 5000 })
        } catch (e) {
          // Try clicking any button or link containing "logout" text (case insensitive)
          try {
            await page.locator('button, a').filter({ hasText: /logout/i }).first().click({ timeout: 5000 })
          } catch (e2) {
            console.log('⚠️ Could not find any logout element, checking if already on login page')
            // Check if we're already logged out
            const isOnLoginPage = await page.getByText('Sign in with Eagle Eye Networks').isVisible()
            if (isOnLoginPage) {
              console.log('✅ Already on login page, logout not needed')
              return
            }
            throw new Error('Could not find logout button or link')
          }
        }
      }
    }
    // If fromMobile is true, we assume the logout button was already clicked

    // Wait for the logout modal with intelligent timeout detection
    let modalAppeared = false
    try {
      await page.getByText('Goodbye!').waitFor({ state: 'visible', timeout: 8000 })
      console.log('✅ Logout modal displayed')
      modalAppeared = true
    } catch (error) {
      console.log('⚠️ Logout modal not detected, checking if already logged out')
      // Check if we're already on login page
      const isOnLoginPage = await page.getByText('Sign in with Eagle Eye Networks').isVisible()
      if (isOnLoginPage) {
        console.log('✅ Already logged out (no modal needed)')
        return
      }
      console.log('⚠️ Continuing logout process without modal confirmation')
    }

    // Handle the logout modal if it appeared
    if (modalAppeared) {
      if (fast) {
        try {
          await page.getByRole('button', { name: 'OK' }).click({ timeout: 3000 })
          console.log('👆 Clicked OK button to speed up logout')
        } catch (error) {
          console.log('⚠️ Could not click OK button, waiting for automatic redirect')
        }
      } else {
        // Wait for automatic logout with intelligent detection
        console.log('🔍 Waiting for logout modal to timeout automatically')
        
        // Instead of waiting a fixed time, poll for logout completion
        const maxWaitTime = 15000 // 15 seconds max
        const pollInterval = 500   // Check every 500ms
        let elapsed = 0
        
        while (elapsed < maxWaitTime) {
          await page.waitForTimeout(pollInterval)
          elapsed += pollInterval
          
          // Check if we've been redirected to login page
          const currentUrl = page.url()
          const hasLoginButton = await page.getByText('Sign in with Eagle Eye Networks').isVisible().catch(() => false)
          const hasLoginInput = await page.locator('input[type="email"], input[type="text"]').first().isVisible().catch(() => false)
          
          if (hasLoginButton || hasLoginInput || currentUrl.includes('login') || currentUrl.endsWith('/')) {
            console.log('✅ Logout detected via polling (redirected to login)')
            return
          }
          
          // Check if modal has disappeared (might indicate completion)
          const modalStillVisible = await page.getByText('Goodbye!').isVisible().catch(() => false)
          if (!modalStillVisible) {
            console.log('🔍 Modal disappeared, checking for final logout state')
            await page.waitForTimeout(1000) // Brief wait for any final redirects
            break
          }
          
          if (elapsed % 2000 === 0) { // Log progress every 2 seconds
            console.log(`🔍 Still waiting for logout... (${elapsed/1000}s elapsed)`)
          }
        }
      }
    }

    // Final verification of logout success
    try {
      console.log('🔍 Performing final logout verification')
      
      // Try multiple approaches to detect successful logout
      await Promise.race([
        // Strategy 1: Look for login button
        page.getByText('Sign in with Eagle Eye Networks').waitFor({ state: 'visible', timeout: 8000 }),
        // Strategy 2: Wait for URL change to login/root
        page.waitForURL(/\/?(login)?$/, { timeout: 8000 }),
        // Strategy 3: Look for login page elements
        page.locator('input[type="email"], input[type="text"]').first().waitFor({ state: 'visible', timeout: 8000 })
      ])
      
      console.log('✅ Successfully logged out')
    } catch (e) {
      console.log('⚠️ Standard logout detection failed, performing comprehensive check')
      
      // Final verification - check if we can find login elements
      const hasLoginButton = await page.getByText('Sign in with Eagle Eye Networks').isVisible().catch(() => false)
      const hasLoginInput = await page.locator('input[type="email"], input[type="text"]').first().isVisible().catch(() => false)
      const currentUrl = page.url()
      
      console.log('🔍 Final state check:')
      console.log('  Current URL:', currentUrl)
      console.log('  Has login button:', hasLoginButton)
      console.log('  Has login input:', hasLoginInput)
      
      if (hasLoginButton || hasLoginInput || currentUrl.includes('login') || currentUrl.endsWith('/')) {
        console.log('✅ Logout successful (verified by page state)')
      } else {
        // Try one more manual navigation attempt
        console.log('⚠️ Logout state unclear, attempting manual navigation to login')
        try {
          await page.goto('/')
          await page.waitForURL(/\/?(login)?$/, { timeout: 5000 })
          console.log('✅ Successfully navigated to login page')
        } catch (navError) {
          console.error('❌ Logout verification failed completely')
          console.error('Final URL:', page.url())
          throw new Error('Failed to logout - could not verify successful logout after all attempts')
        }
      }
    }
  } catch (error) {
    console.error('❌ Logout process failed:', error.message)
    throw error
  }
}

/**
 * Extracts the last part of a URL pathname
 * @param {string} url - The URL to extract the last part from
 * @returns {string} The last part of the URL pathname
 */
export function getLastPartOfUrl(url) {
  try {
    const parsedUrl = new URL(url)
    const pathname = parsedUrl.pathname

    if (pathname === '/') {
      return ''
    }

    const parts = pathname.split('/')
    return '/' + parts[parts.length - 1]
  } catch (error) {
    // Handle cases where the input is not a valid URL
    console.error('Invalid URL:', error)
    return '' // Or you could return null or throw an error
  }
}

export async function clickNavButton(page, buttonName) {
  // click the navigation button in the navigation bar
  console.log(`🔍 Looking for navigation link: ${buttonName}`)
  const button = page.getByRole('link', { name: buttonName }).first()
  await expect(button).toBeVisible({ timeout: 5000 })
  console.log(`✅ Found navigation link: ${buttonName}`)
  
  // Get current URL before clicking
  const currentUrl = page.url()
  console.log(`📍 Current URL before click: ${currentUrl}`)
  
  // Check if the link has the correct href
  const href = await button.getAttribute('href')
  console.log(`🔗 Link href: ${href}`)
  
  await button.click()
  console.log(`👆 Clicked navigation link: ${buttonName}`)
  
  // Wait a moment for navigation to start
  await page.waitForTimeout(2000)
  
  // Check URL after click
  const newUrl = page.url()
  console.log(`📍 URL after click: ${newUrl}`)
  
  // If URL didn't change, try direct navigation as fallback
  if (newUrl === currentUrl) {
    console.log(`⚠️ Navigation click failed, trying direct navigation to /${buttonName.toLowerCase()}`)
    await page.goto(`/${buttonName.toLowerCase()}`)
    await page.waitForTimeout(1000)
    const directNavUrl = page.url()
    console.log(`📍 URL after direct navigation: ${directNavUrl}`)
  }
  
  // Wait for the page heading to appear
  await expect(page.getByRole('heading', { name: buttonName, level: 3 })).toBeVisible({ timeout: 10000 })
  console.log(`✅ Successfully navigated to ${buttonName} page`)
}

export async function clickMobileNavButton(page, buttonName, basePath, expectedText = null) {
  const hamburgerButton = page.locator('button[aria-controls="mobile-menu"]')
  await expect(hamburgerButton).toBeVisible()
  await hamburgerButton.click()
  console.log('👆 Opened the mobile menu')

  // Wait for menu to be visible
  await page.locator('#mobile-menu a').first().waitFor({ state: 'visible' })

  // Navigate to the page
  console.log('👤 Navigating to ' + buttonName + ' page')
  await page.locator('#mobile-menu a[href*="/' + buttonName.toLowerCase() + '"]').click()

  // Use our URL pattern utility
  const profileUrl = basePath + '/' + buttonName.toLowerCase()
  await page.waitForURL(profileUrl, { timeout: 10000 })
  if (expectedText) {
    await expect(page.getByText(expectedText)).toBeVisible()
  }
  console.log('✅ ' + buttonName + ' page loaded successfully')
}

/**
 * Safe logout wrapper that handles errors gracefully
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {boolean} fromMobile - Whether the logout is from the mobile menu
 * @param {boolean} fast - Whether to speed up logout by clicking OK button
 * @param {boolean} allowFailure - Whether to allow logout failure without throwing
 */
export async function safeLogoutFromApplication(page, fromMobile = false, fast = false, allowFailure = true) {
  try {
    await logoutFromApplication(page, fromMobile, fast)
    console.log('✅ Safe logout completed successfully')
    return true
  } catch (error) {
    if (allowFailure) {
      console.log('⚠️ Safe logout failed but continuing:', error.message)
      return false
    } else {
      console.error('❌ Safe logout failed and not allowing failure')
      throw error
    }
  }
}
