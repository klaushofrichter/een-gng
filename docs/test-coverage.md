# Test Coverage Guide

This guide explains how to measure and analyze test coverage in the EEN Grab-and-Go application.

## Overview

We implement **two types of coverage measurement**:

1. **Code Coverage** - Measures how much of the source code is executed during tests
2. **Feature Coverage** - Tracks what application features and functionality are tested

## 🚀 Quick Start

### Run Tests with Coverage

```bash
# Run all tests with coverage collection
npm run test:coverage

# Run tests with UI and coverage
npm run test:coverage:ui

# Clean previous coverage data
npm run coverage:clean

# Process coverage data (if you have raw coverage files)
npm run coverage:process

# Open coverage report in browser (macOS)
npm run coverage:open
```

### View Coverage Reports

After running tests with coverage, open the HTML report:

```bash
# macOS
npm run coverage:open

# Or manually open
open coverage/reports/index.html

# Linux/Windows
# Navigate to coverage/reports/index.html in your browser
```

## 📊 Coverage Reports

### HTML Report

The main coverage report includes:

- **Overall coverage percentages** for statements, branches, functions, and lines
- **File-by-file breakdown** showing which parts of code are covered
- **Visual highlighting** of covered (green) and uncovered (red) code
- **Interactive navigation** through your source files

### Text Report

Terminal output shows:

```
=============================== Coverage summary ===============================
Statements   : 75.23% ( 245/326 )
Branches     : 68.12% ( 89/131 )
Functions    : 82.35% ( 42/51 )
Lines        : 74.81% ( 239/319 )
================================================================================
```

### JSON Summary

Machine-readable summary in `coverage/reports/coverage-summary.json`:

```json
{
  "total": {
    "lines": { "total": 319, "covered": 239, "skipped": 0, "pct": 74.81 },
    "statements": { "total": 326, "covered": 245, "skipped": 0, "pct": 75.23 },
    "functions": { "total": 51, "covered": 42, "skipped": 0, "pct": 82.35 },
    "branches": { "total": 131, "covered": 89, "skipped": 0, "pct": 68.12 }
  }
}
```

## 🔧 Configuration

### Coverage Thresholds

Coverage thresholds are defined in `.nycrc.json`:

```json
{
  "check-coverage": true,
  "statements": 70,
  "branches": 60,
  "functions": 70,
  "lines": 70
}
```

**Thresholds Explained**:
- **Statements**: 70% - Individual executable statements
- **Branches**: 60% - If/else, switch cases, ternary operators
- **Functions**: 70% - Function definitions that are called
- **Lines**: 70% - Physical lines of code executed

### File Inclusion/Exclusion

Coverage includes:
```json
{
  "include": [
    "src/**/*.js",
    "src/**/*.vue"
  ],
  "exclude": [
    "tests/**",
    "dist/**",
    "node_modules/**",
    "coverage/**",
    "scripts/**"
  ]
}
```

## 🧪 Adding Coverage to Tests

### Basic Coverage Collection

For new tests, import and use the coverage helper:

```javascript
import { collectCoverage } from './coverage-helper.js'

test('my feature test', async ({ page }) => {
  // ... test logic ...
  
  // Collect coverage at the end
  await collectCoverage(page, 'my-feature-test')
})
```

### Advanced Coverage Integration

For more detailed coverage collection:

```javascript
import { test, expect } from '@playwright/test'
import { collectCoverage } from './coverage-helper.js'

test.describe('Feature Testing with Coverage', () => {
  
  test('comprehensive feature test', async ({ page }) => {
    // Navigate and test your feature
    await page.goto('/')
    
    // Exercise different code paths
    await page.click('[data-testid="feature-button"]')
    await page.fill('[data-testid="input-field"]', 'test data')
    
    // Collect coverage for this specific test
    await collectCoverage(page, 'comprehensive-feature-test')
  })
  
})
```

## 📈 Understanding Coverage Metrics

### Statement Coverage
- **What it measures**: Individual executable statements
- **Good threshold**: 70-80%
- **Example**: `const x = 5;` or `return true;`

### Branch Coverage  
- **What it measures**: Decision points (if/else, switch cases)
- **Good threshold**: 60-75%
- **Example**: Both paths of `if (condition) { ... } else { ... }`

### Function Coverage
- **What it measures**: Functions that are called during tests
- **Good threshold**: 70-85%
- **Example**: Every function definition that gets executed

### Line Coverage
- **What it measures**: Physical lines of code executed
- **Good threshold**: 70-80%
- **Example**: Any line that contains executable code

## 🎯 Feature Coverage

### Current Test Coverage

Our tests cover these key features:

- ✅ **Authentication Flow** - Login/logout with EEN OAuth
- ✅ **Navigation** - Page routing and menu navigation  
- ✅ **Capture Functionality** - Image capture and processing
- ✅ **Modal Interactions** - Dialog boxes and forms
- ✅ **Mobile Responsiveness** - Mobile menu and layout
- ✅ **Deep Linking** - Direct URL navigation
- ✅ **Token Management** - Authentication token handling
- ✅ **Error Handling** - Invalid routes and error states

### Coverage Gaps

Areas that might need additional testing:

- 🔄 **Offline Functionality** - App behavior without network
- 🔄 **Edge Cases** - Error conditions and boundary values
- 🔄 **Performance** - Load testing and stress scenarios
- 🔄 **Accessibility** - Screen reader and keyboard navigation

## 🚨 Coverage Troubleshooting

### No Coverage Data Collected

**Problem**: Coverage reports show 0% or missing data

**Solutions**:
1. Ensure `NODE_ENV=test` is set when running tests
2. Check that `vite-plugin-istanbul` is properly configured
3. Verify tests are calling `collectCoverage()` function

```bash
# Debug coverage collection
NODE_ENV=test npm run dev
# Then run a single test to see if coverage is instrumented
```

### Coverage Files Not Found

**Problem**: `No coverage files found` error

**Solutions**:
1. Run tests first: `npm run test:coverage`
2. Check that `coverage/tmp/` directory exists
3. Verify Istanbul instrumentation is working

### Low Coverage Numbers

**Problem**: Coverage percentages are lower than expected

**Solutions**:
1. **Add more test scenarios** covering different code paths
2. **Test error conditions** and edge cases
3. **Exercise different user flows** in your tests
4. **Check excluded files** - make sure important files aren't excluded

### Coverage Reports Won't Open

**Problem**: `npm run coverage:open` doesn't work

**Solutions**:
```bash
# macOS alternative
open coverage/reports/index.html

# Linux
xdg-open coverage/reports/index.html

# Windows
start coverage/reports/index.html

# Or just navigate to the file in any browser
```

## 📝 Coverage Best Practices

### 1. **Test Critical Paths First**
Focus on the most important user journeys:
- Authentication flow
- Core business functionality
- Error handling

### 2. **Aim for Meaningful Coverage**
- 70-80% statement coverage is usually sufficient
- 100% coverage is rarely necessary or cost-effective
- Focus on testing behavior, not just coverage numbers

### 3. **Use Coverage to Find Gaps**
- Look for **red areas** in coverage reports
- Identify **untested error conditions**
- Find **unused code** that might be removed

### 4. **Regular Coverage Monitoring**
```bash
# Add to CI/CD pipeline
npm run test:coverage
# Parse coverage/reports/coverage-summary.json for metrics
```

### 5. **Coverage-Driven Test Development**
1. Write your test
2. Run coverage
3. Look for gaps
4. Add targeted tests for uncovered areas
5. Repeat

## 🔗 Integration with CI/CD

### GitHub Actions Example

```yaml
- name: Run tests with coverage
  run: npm run test:coverage

- name: Upload coverage reports
  uses: actions/upload-artifact@v3
  with:
    name: coverage-report
    path: coverage/reports/
```

### Coverage Badges

Add to README using shields.io:

```markdown
![Coverage](https://img.shields.io/badge/coverage-75%25-brightgreen)
```

## 📚 Additional Resources

- [Istanbul Documentation](https://istanbul.js.org/)
- [NYC Coverage Tool](https://github.com/istanbuljs/nyc)
- [Playwright Testing](https://playwright.dev/)
- [Vite Plugin Istanbul](https://github.com/iFaxity/vite-plugin-istanbul)

---

This coverage system helps ensure code quality and identifies areas that need additional testing. Use it as a guide to improve test completeness and application reliability. 