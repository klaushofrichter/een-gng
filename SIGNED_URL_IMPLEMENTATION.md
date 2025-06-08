# Signed URL Implementation for Uniform Token Management

## Overview

This implementation ensures that all image URLs stored in Firestore use Google-generated signed URLs from the beginning, providing uniformity with the token rotation system.

## Changes Made

### 1. New Firebase Function: `generateSignedUrl`

**File**: `functions/index.js`

A new Firebase Function that generates signed URLs for uploaded images:

```javascript
exports.generateSignedUrl = onCall(async (request) => {
  // Generates 24-hour signed URLs using Admin SDK
  const [signedUrl] = await file.getSignedUrl({
    action: 'read',
    expires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  });
});
```

**Features**:
- ✅ **Authentication Required**: Only authenticated users can generate URLs
- ✅ **Input Validation**: Validates storage path format and capture ID
- ✅ **Security**: Sanitizes inputs and validates file existence
- ✅ **Consistent Expiration**: 24-hour expiration (same as rotation)

### 2. Updated Storage Service

**File**: `src/services/storage.js`

Modified the `uploadImage` method to use signed URLs:

**Before**:
```javascript
// Old: Token-based URL
const downloadUrl = await getDownloadURL(snapshot.ref)
```

**After**:
```javascript
// New: Signed URL with fallback
try {
  const result = await generateSignedUrl({ storagePath, captureId })
  downloadUrl = result.data.signedUrl
} catch (error) {
  // Fallback to token URL if signed URL generation fails
  downloadUrl = await getDownloadURL(snapshot.ref)
}
```

### 3. Updated Token Rotation

The `rotateImageTokens` method now also uses the same Firebase Function for consistency.

## Benefits

### 1. **Uniformity**
- ✅ All URLs use the same Google-signed format
- ✅ No difference between initial and rotated URLs
- ✅ Consistent 24-hour expiration across all URLs

### 2. **Security**
- ✅ Server-side URL generation with proper validation
- ✅ Consistent security model for all image access
- ✅ Centralized URL generation logic

### 3. **Reliability**
- ✅ Fallback mechanism if signed URL generation fails
- ✅ Graceful degradation to token URLs
- ✅ Comprehensive error handling and logging

### 4. **Maintainability**
- ✅ Single source of truth for URL generation
- ✅ Easier to update URL generation logic
- ✅ Consistent logging and monitoring

## URL Format Comparison

### Before (Mixed URLs)
```
Initial Upload: https://firebasestorage.googleapis.com/v0/b/project.appspot.com/o/captures%2Fcapture123%2Fimage_001.jpg?alt=media&token=abc123
After Rotation: https://storage.googleapis.com/project.appspot.com/captures/capture123/image_001.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=...
```

### After (Uniform URLs)
```
Initial Upload: https://storage.googleapis.com/project.appspot.com/captures/capture123/image_001.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=...
After Rotation: https://storage.googleapis.com/project.appspot.com/captures/capture123/image_001.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=...
```

## Implementation Details

### Error Handling
- **Primary**: Generate signed URL via Firebase Function
- **Fallback**: Use token-based URL if signed URL fails
- **Logging**: Comprehensive logging for debugging

### Performance
- **Minimal Impact**: Single additional function call per image
- **Parallel Processing**: Maintains existing parallel upload performance
- **Caching**: Firebase Functions automatically cache for performance

### Security
- **Authentication**: Requires Firebase authentication
- **Validation**: Validates storage paths and capture ownership
- **Sanitization**: All inputs are sanitized before processing

## Testing

### Verification Steps
1. **Upload New Images**: Check console logs for "✅ Generated signed URL"
2. **URL Format**: Verify URLs contain `googleapis.com` and signing parameters
3. **Fallback**: Test behavior when function is unavailable
4. **Token Rotation**: Verify rotation still works with new URLs

### Console Logging
```
[StorageService] Generating signed URL for captures/capture123/image_001.jpg
[StorageService] ✅ Generated signed URL for captures/capture123/image_001.jpg
[StorageService] URL type: Signed URL
```

## Migration

### Existing Captures
- **No Action Required**: Existing token URLs continue to work
- **Gradual Migration**: New uploads use signed URLs immediately
- **Token Rotation**: Existing captures get signed URLs when rotated

### Rollback Plan
If issues arise, the fallback mechanism ensures continued operation with token URLs.

## Future Enhancements

1. **Batch URL Generation**: Generate multiple signed URLs in a single function call
2. **Custom Expiration**: Allow different expiration times based on use case
3. **URL Caching**: Cache signed URLs to reduce function calls
4. **Monitoring**: Add metrics for signed URL generation success/failure rates

## Deployment

The implementation is now live and active:
- ✅ Firebase Function deployed
- ✅ Storage service updated
- ✅ Fallback mechanism in place
- ✅ Comprehensive logging enabled

All new image uploads will automatically use signed URLs for uniformity with the token rotation system. 