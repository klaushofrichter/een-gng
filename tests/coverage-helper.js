/**
 * Coverage collection helper for Playwright tests
 * This helper collects code coverage from the browser and saves it for processing
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

/**
 * Collect coverage from the page and save it to a file
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} testName - Name of the test for unique coverage file
 */
export async function collectCoverage(page, testName) {
  try {
    // Check if coverage is available (only when instrumented)
    const coverage = await page.evaluate(() => {
      // Check if Istanbul coverage object exists
      if (typeof window.__coverage__ !== 'undefined') {
        return window.__coverage__
      }
      return null
    })

    if (coverage) {
      // Ensure coverage directory exists
      const coverageDir = join(process.cwd(), 'coverage', 'tmp')
      if (!existsSync(coverageDir)) {
        mkdirSync(coverageDir, { recursive: true })
      }

      // Save coverage data with unique filename
      const timestamp = Date.now()
      const filename = join(coverageDir, `coverage-${testName}-${timestamp}.json`)
      writeFileSync(filename, JSON.stringify(coverage, null, 2))
      
      console.log(`✅ Coverage collected for test: ${testName}`)
      return filename
    } else {
      console.log(`⚠️  No coverage data available for test: ${testName}`)
      return null
    }
  } catch (error) {
    console.error(`❌ Error collecting coverage for test ${testName}:`, error)
    return null
  }
}

/**
 * Setup coverage collection hooks for a test
 * @param {import('@playwright/test').TestInfo} testInfo - Playwright test info
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
export async function setupCoverageHooks(testInfo, page) {
  // Collect coverage after each test
  testInfo.afterEach = async () => {
    await collectCoverage(page, testInfo.title.replace(/[^a-zA-Z0-9]/g, '-'))
  }
}

/**
 * Get coverage summary for reporting
 * @param {string} coverageDir - Directory containing coverage files
 */
export function getCoverageSummary(coverageDir) {
  // This would integrate with nyc/c8 to generate summary
  // For now, return basic info about collected files
  try {
    const fs = require('fs')
    const files = fs.readdirSync(coverageDir)
    const coverageFiles = files.filter(f => f.startsWith('coverage-') && f.endsWith('.json'))
    
    return {
      filesCollected: coverageFiles.length,
      coverageFiles: coverageFiles
    }
  } catch (error) {
    return {
      filesCollected: 0,
      coverageFiles: [],
      error: error.message
    }
  }
} 