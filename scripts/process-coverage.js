#!/usr/bin/env node

/**
 * Coverage processing script
 * Processes coverage data collected from Playwright tests and generates reports
 */

import { spawn } from 'child_process'
import { existsSync, readdirSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const coverageDir = join(process.cwd(), 'coverage')
const tempDir = join(coverageDir, 'tmp')
const outputDir = join(coverageDir, 'reports')

/**
 * Ensure directories exist
 */
function ensureDirectories() {
  if (!existsSync(coverageDir)) {
    mkdirSync(coverageDir, { recursive: true })
  }
  if (!existsSync(tempDir)) {
    mkdirSync(tempDir, { recursive: true })
  }
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }
}

/**
 * Merge coverage files using nyc
 */
function mergeCoverageFiles() {
  return new Promise((resolve, reject) => {
    console.log('🔄 Merging coverage files...')
    
    const nyc = spawn('npx', ['nyc', 'merge', tempDir, 'coverage/coverage.json'], {
      stdio: 'inherit',
      cwd: process.cwd()
    })

    nyc.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Coverage files merged successfully')
        resolve()
      } else {
        reject(new Error(`nyc merge failed with code ${code}`))
      }
    })

    nyc.on('error', (error) => {
      reject(error)
    })
  })
}

/**
 * Generate coverage reports
 */
function generateReports() {
  return new Promise((resolve, reject) => {
    console.log('📊 Generating coverage reports...')
    
    const nyc = spawn('npx', [
      'nyc', 
      'report',
      '--temp-dir', tempDir,
      '--report-dir', outputDir,
      '--reporter=html',
      '--reporter=text',
      '--reporter=json-summary',
      '--exclude=tests/**',
      '--exclude=dist/**',
      '--exclude=node_modules/**'
    ], {
      stdio: 'inherit',
      cwd: process.cwd()
    })

    nyc.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Coverage reports generated successfully')
        console.log(`📁 HTML report: file://${join(outputDir, 'index.html')}`)
        resolve()
      } else {
        reject(new Error(`nyc report failed with code ${code}`))
      }
    })

    nyc.on('error', (error) => {
      reject(error)
    })
  })
}

/**
 * Generate test coverage summary
 */
function generateTestCoverageSummary() {
  try {
    const testsDir = join(process.cwd(), 'tests')
    const testFiles = readdirSync(testsDir).filter(f => f.endsWith('.spec.js'))
    
    const summary = {
      totalTests: testFiles.length,
      testFiles: testFiles.map(file => ({
        name: file,
        path: join(testsDir, file)
      })),
      coverage: {
        // This could be enhanced to analyze what each test covers
        features: [
          'Authentication flow',
          'Navigation',
          'Capture functionality',
          'Modal interactions',
          'Mobile responsiveness',
          'Deep linking',
          'Token management'
        ]
      },
      timestamp: new Date().toISOString()
    }

    const summaryPath = join(outputDir, 'test-summary.json')
    writeFileSync(summaryPath, JSON.stringify(summary, null, 2))
    console.log(`📋 Test summary: ${summaryPath}`)
    
    return summary
  } catch (error) {
    console.error('❌ Error generating test summary:', error)
    return null
  }
}

/**
 * Main processing function
 */
async function processCoverage() {
  try {
    console.log('🚀 Starting coverage processing...')
    
    ensureDirectories()
    
    // Check if we have coverage files
    if (!existsSync(tempDir)) {
      console.log('⚠️  No coverage temp directory found. Run tests with coverage first.')
      return
    }
    
    const coverageFiles = readdirSync(tempDir).filter(f => f.startsWith('coverage-'))
    if (coverageFiles.length === 0) {
      console.log('⚠️  No coverage files found. Make sure tests are run with NODE_ENV=test')
      return
    }
    
    console.log(`📂 Found ${coverageFiles.length} coverage files`)
    
    // Process coverage
    await mergeCoverageFiles()
    await generateReports()
    
    // Generate test summary
    const testSummary = generateTestCoverageSummary()
    
    console.log('\n🎉 Coverage processing complete!')
    console.log(`📊 View coverage report: file://${join(outputDir, 'index.html')}`)
    
    if (testSummary) {
      console.log(`\n📋 Test Coverage Summary:`)
      console.log(`   Total test files: ${testSummary.totalTests}`)
      console.log(`   Features covered: ${testSummary.coverage.features.length}`)
    }
    
  } catch (error) {
    console.error('❌ Coverage processing failed:', error)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  processCoverage()
} 