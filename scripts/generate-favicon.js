#!/usr/bin/env node

/* eslint-env node */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Read the SVG favicon
const svgPath = join(__dirname, '..', 'public', 'favicon.svg')
const svgContent = readFileSync(svgPath, 'utf-8')

console.log('📄 SVG favicon found and ready')

// Generate PNG files for different sizes
const sizes = [16, 32, 48, 64, 96, 128, 192, 256, 512]
const publicDir = join(__dirname, '..', 'public')

console.log('🔄 Generating PNG files...')

// Generate PNG files
for (const size of sizes) {
  const outputPath = join(publicDir, `favicon-${size}x${size}.png`)
  await sharp(Buffer.from(svgContent))
    .resize(size, size)
    .png()
    .toFile(outputPath)
  console.log(`✅ Generated ${size}x${size} PNG`)
}

// Generate Apple Touch Icon (180x180)
const appleTouchIconPath = join(publicDir, 'apple-touch-icon.png')
await sharp(Buffer.from(svgContent))
  .resize(180, 180)
  .png()
  .toFile(appleTouchIconPath)
console.log('✅ Generated 180x180 Apple Touch Icon')

// Create PNG icons array for manifest
const icons = sizes.map(size => ({
  src: `/favicon-${size}x${size}.png`,
  sizes: `${size}x${size}`,
  type: 'image/png'
}))

// Add SVG icon for modern browsers
icons.push({
  src: '/favicon.svg',
  sizes: 'any',
  type: 'image/svg+xml'
})

// Create a web app manifest with updated theme color
const manifest = {
  name: 'EEN Capture',
  short_name: 'Capture',
  description: 'EEN Capture Application',
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#059669',
  icons
}

// Write the web app manifest
const manifestPath = join(__dirname, '..', 'public', 'manifest.json')
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))

console.log('✅ Web app manifest updated at public/manifest.json')
console.log('📱 Includes PNG icons for sizes:', sizes.join(', '))

// Create a simple HTML snippet to show how to include all favicon formats
const htmlSnippet = `
<!-- Favicon links for better browser compatibility -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#059669" />
`

console.log('\n📝 Suggested HTML additions:')
console.log(htmlSnippet)

console.log('\n🎨 Favicon generation complete!')
console.log('✨ Generated PNG files for all required sizes and updated theme color') 