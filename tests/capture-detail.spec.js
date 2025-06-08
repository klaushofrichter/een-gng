import { test, expect } from '@playwright/test'
import {
  navigateToLogin,
  loginToApplication,
  clickNavButton,
  logoutFromApplication,
  MAX_TEST_TIMEOUT
} from './utils'
import dotenv from 'dotenv'; // Import dotenv
import fs from 'fs'; // Import fs for file operations
import path from 'path'; // Import path for path manipulation

dotenv.config(); // Load environment variables from .env file

let loggedBaseURL = false // Flag to ensure baseURL is logged only once
let basePath = ''
let consoleLogs = []; // Array to store console logs for each test

// this is used to confirm the user that is logged in
const TEST_USER = process.env.TEST_USER|| 'testuser@example.com';
const configuredProxyUrl = process.env.VITE_AUTH_PROXY_URL || 'http://127.0.0.1:3333' // Default logic

test.describe('Capture Details Modal Tests', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    // Clear logs and set up listener for each test
    consoleLogs = [];
    page.on('console', msg => {
      consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
    });

    // Log Base URL and Proxy URL once before the first test runs
    if (!loggedBaseURL) {
      const baseURL = page.context()._options.baseURL
      const redirectUri = process.env.VITE_REDIRECT_URI || 'http://127.0.0.1:3333'
      const configuredProxyUrl = process.env.VITE_AUTH_PROXY_URL || 'http://127.0.0.1:3333' // Default logic
      basePath = ''
      if (baseURL) {
        const url = new URL(baseURL)
        if (url.pathname !== '/') basePath = url.pathname
        console.log(`\n🚀 Running tests against Service at URL: ${baseURL}`)
        console.log(`🔒 Using Auth Proxy URL: ${configuredProxyUrl}`)
        console.log(`🔒 Using Redirect URI: ${redirectUri}`)
        console.log(`🔒 Using basePath: ${basePath}\n`)
      }
      loggedBaseURL = true // Set flag so it doesn't log again
    }
    // Go to login page and login
    await navigateToLogin(page, basePath)
    await loginToApplication(page, basePath)
  })

  test.afterEach(async ({}, testInfo) => {
    // Save console logs to a file after each test
    const logFileName = `browser-console.log`;
    const logFilePath = path.join(testInfo.outputDir, logFileName);
    const logDir = path.dirname(logFilePath); // Get the directory path

    // Create the directory if it doesn't exist
    fs.mkdirSync(logDir, { recursive: true });

    fs.writeFileSync(logFilePath, consoleLogs.join('\n'));
    console.log(`📚 Browser console logs saved to: ${logFilePath}`);
  });

  test('open capture details modal, inspect elements, and close', async ({ page }) => {
    console.log(`\n▶️ Running Test: ${test.info().title}\n`)
    console.log('🔍 Testing Capture Details Modal functionality')
    test.setTimeout(MAX_TEST_TIMEOUT) // max 40 seconds overall

    // Navigate to Capture page
    await clickNavButton(page, 'Capture')
    console.log('✅ Navigated to Capture page')

    // Verify that the displayed email matches TEST_USER environment variable
    console.log(`🔍 Checking displayed email matches TEST_USER: ${TEST_USER}`)
    
    // Wait for the email to actually load - wait for a span that contains the TEST_USER email
    console.log('⏳ Waiting for email to load in the user display...')
    
    // Wait for the email to appear by looking for the blue span containing the email
    const emailSpan = page.locator('p:has-text("Capture and manage your content") span.text-blue-600')
    await expect(emailSpan).toBeVisible({ timeout: 10000 })
    
    // Get the email text content
    const displayedEmail = await emailSpan.textContent()
    console.log(`📧 Found displayed email: ${displayedEmail}`)
    console.log(`📧 Expected email: ${TEST_USER}`)
    
    expect(displayedEmail.trim()).toBe(TEST_USER)
    console.log('✅ Email verification successful - displayed email matches TEST_USER')

    // Wait for captures to load by waiting for either "No captures found" or capture list items
    console.log('⏳ Waiting for captures to load...')
    try {
      // Wait for either captures to appear or "No captures found" message
      await Promise.race([
        page.locator('li[class*="bg-gray-100"]').first().waitFor({ timeout: 10000 }),
        page.locator('text=No captures found').waitFor({ timeout: 10000 })
      ])
    } catch (e) {
      // If neither appears, continue - captures might be loading
      console.log('⚠️ Captures loading state unclear, continuing...')
    }

    // Check if there are any captures available
    const captureCards = page.locator('ul.space-y-2 li')
    const captureCount = await captureCards.count()
    console.log(`📊 Found ${captureCount} capture(s) on the page`)

    if (captureCount === 0) {
      console.log('⚠️ No captures found - cannot test details modal')
      console.log('✅ Test completed - no captures available to test')
      
      // Still logout to complete the test flow
      await logoutFromApplication(page)
      return
    }

    // Click on the first capture to open the details modal
    console.log('🔍 Opening details modal for the first capture')
    const firstCapture = captureCards.first()
    const captureContent = firstCapture.locator('div.cursor-pointer')
    await captureContent.click()
    console.log('✅ Clicked on first capture')

    // Wait for the details modal to appear
    console.log('⏳ Waiting for Capture Details Modal to open...')
    const detailsModal = page.locator('h3:has-text("Capture Details")')
    await expect(detailsModal).toBeVisible({ timeout: 10000 })
    console.log('✅ Capture Details Modal opened successfully')

    // Inspect modal elements
    console.log('🔍 Inspecting modal elements...')

    // Check modal header
    const modalHeader = page.locator('h3:has-text("Capture Details")')
    await expect(modalHeader).toBeVisible()
    console.log('✅ Modal header "Capture Details" is visible')

    // Check close button (X)
    const closeButton = page.locator('button[aria-label="Close modal"]')
    await expect(closeButton).toBeVisible()
    console.log('✅ Close button (X) is visible')

    // Check for capture name field
    const nameLabel = page.locator('label:has-text("Name")')
    await expect(nameLabel).toBeVisible()
    console.log('✅ Name label is visible')

    // Check for user email field
    const emailLabel = page.locator('label:has-text("User Email")')
    await expect(emailLabel).toBeVisible()
    console.log('✅ User Email label is visible')

    // Check for action buttons in footer
    const processButton = page.locator('div.fixed.inset-0 button:has-text("Get Images")')
    const deleteButton = page.locator('div.fixed.inset-0 button:has-text("Delete Capture")')
    const closeFooterButton = page.locator('div.fixed.inset-0 button:has-text("Close")')

    await expect(processButton).toBeVisible()
    await expect(deleteButton).toBeVisible()
    await expect(closeFooterButton).toBeVisible()
    console.log('✅ All action buttons (Get Images, Delete Capture, Close) are visible')

    // Check if there are optional fields (these may or may not be present)
    console.log('🔍 Checking for optional fields...')
    
    // Check for camera ID (should be present for most captures)
    const cameraIdElements = page.locator('label:has-text("Camera ID")')
    const cameraIdCount = await cameraIdElements.count()
    if (cameraIdCount > 0) {
      console.log('✅ Camera ID field is present')
    } else {
      console.log('ℹ️ Camera ID field not present in this capture')
    }

    // Check for start date
    const startDateElements = page.locator('label:has-text("Start Date & Time")')
    const startDateCount = await startDateElements.count()
    if (startDateCount > 0) {
      console.log('✅ Start Date & Time field is present')
    } else {
      console.log('ℹ️ Start Date & Time field not present in this capture')
    }

    // Check for description
    const descriptionElements = page.locator('label:has-text("Description")')
    const descriptionCount = await descriptionElements.count()
    if (descriptionCount > 0) {
      console.log('✅ Description field is present')
    } else {
      console.log('ℹ️ Description field not present in this capture')
    }

    // Check for stored images summary
    const storedImagesElements = page.locator('label:has-text("Stored Images")')
    const storedImagesCount = await storedImagesElements.count()
    if (storedImagesCount > 0) {
      console.log('✅ Stored Images summary is present')
    } else {
      console.log('ℹ️ Stored Images summary not present (capture may have no images)')
    }

    // Check for Raw Data debug section
    const rawDataSummary = page.locator('summary:has-text("Raw Data (Debug)")')
    await expect(rawDataSummary).toBeVisible()
    console.log('✅ Raw Data debug section is present')

    // Test modal backdrop behavior
    console.log('🔍 Testing modal backdrop click behavior...')
    
    // Click on the modal backdrop (should close the modal)
    const modalBackdrop = page.locator('div.fixed.inset-0.bg-black.bg-opacity-50')
    await modalBackdrop.click({ position: { x: 10, y: 10 } }) // Click near the edge to hit backdrop
    
    // Wait for modal to close
    await expect(detailsModal).toBeHidden({ timeout: 5000 })
    console.log('✅ Modal closed successfully via backdrop click')

    // Reopen the modal to test the X button
    console.log('🔍 Reopening modal to test X button...')
    await captureContent.click()
    await expect(detailsModal).toBeVisible({ timeout: 5000 })
    console.log('✅ Modal reopened successfully')

    // Test X button close
    console.log('🔍 Testing X button close...')
    const xButton = page.locator('button[aria-label="Close modal"] svg')
    await xButton.click()
    await expect(detailsModal).toBeHidden({ timeout: 5000 })
    console.log('✅ Modal closed successfully via X button')

    // Reopen modal one more time to test footer Close button
    console.log('🔍 Reopening modal to test footer Close button...')
    await captureContent.click()
    await expect(detailsModal).toBeVisible({ timeout: 5000 })
    console.log('✅ Modal reopened successfully')

    // Test footer Close button
    console.log('🔍 Testing footer Close button...')
    const footerCloseButton = page.locator('div.fixed.inset-0 button:has-text("Close")')
    await footerCloseButton.click()
    await expect(detailsModal).toBeHidden({ timeout: 5000 })
    console.log('✅ Modal closed successfully via footer Close button')

    // Verify we're back to the main capture page
    const capturePageTitle = page.locator('h3:has-text("Capture")')
    await expect(capturePageTitle).toBeVisible()
    console.log('✅ Successfully returned to main Capture page')

    // Logout and end
    await logoutFromApplication(page)
    console.log('✅ Capture Details Modal test completed successfully')
  });

  test('test ESC key closes details modal', async ({ page }) => {
    console.log(`\n▶️ Running Test: ${test.info().title}\n`)
    console.log('🔍 Testing ESC key functionality on Capture Details Modal')

    // Navigate to Capture page
    await clickNavButton(page, 'Capture')
    console.log('✅ Navigated to Capture page')

    // Wait for captures to load
    console.log('⏳ Waiting for captures to load...')
    try {
      await Promise.race([
        page.locator('li[class*="bg-gray-100"]').first().waitFor({ timeout: 10000 }),
        page.locator('text=No captures found').waitFor({ timeout: 10000 })
      ])
    } catch (e) {
      console.log('⚠️ Captures loading state unclear, continuing...')
    }

    // Check if there are any captures available
    const captureCards = page.locator('ul.space-y-2 li')
    const captureCount = await captureCards.count()
    console.log(`📊 Found ${captureCount} capture(s) on the page`)

    if (captureCount === 0) {
      console.log('⚠️ No captures found - cannot test ESC key functionality')
      console.log('✅ Test completed - no captures available to test')
      
      await logoutFromApplication(page)
      return
    }

    // Open the details modal
    console.log('🔍 Opening details modal for ESC key test')
    const firstCapture = captureCards.first()
    const captureContent = firstCapture.locator('div.cursor-pointer')
    await captureContent.click()

    // Wait for the details modal to appear
    const detailsModal = page.locator('h3:has-text("Capture Details")')
    await expect(detailsModal).toBeVisible({ timeout: 10000 })
    console.log('✅ Capture Details Modal opened successfully')

    // Press ESC key
    console.log('🔍 Testing ESC key to close modal...')
    await page.keyboard.press('Escape')
    
    // Wait for modal to close
    await expect(detailsModal).toBeHidden({ timeout: 5000 })
    console.log('✅ Modal closed successfully via ESC key')

    // Verify we're back to the main capture page
    const capturePageTitle = page.locator('h3:has-text("Capture")')
    await expect(capturePageTitle).toBeVisible()
    console.log('✅ Successfully returned to main Capture page')

    // Logout and end
    await logoutFromApplication(page)
    console.log('✅ ESC key test completed successfully')
  });
}); 