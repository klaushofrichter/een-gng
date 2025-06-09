# Analysis Download Feature

## Overview

The Analyze modal now includes a **Download** button that appears after a successful analysis. This button generates and downloads a comprehensive JSON file containing:

1. **Capture metadata** - Information about the capture session
2. **Analysis summary** - Overall statistics and results
3. **Detailed image analysis** - Individual image results with Gemini AI descriptions
4. **Unanalyzed images** - Images that weren't processed (for completeness)
5. **Export metadata** - Information about the export itself

## Download Button Behavior

- **Visibility**: Only appears when analysis has been completed successfully (`hasAnalyzedImages && analysisResults`)
- **State**: Disabled during analysis or reset operations
- **Feedback**: Shows a green success message for 3 seconds after download
- **Error Handling**: Displays errors in the existing error message area

## JSON File Structure

The downloaded file follows this structure:

```json
{
  "capture": {
    "id": "capture_123",
    "name": "Backyard Camera - Morning Session",
    "description": "Monitoring backyard activity from 8-10 AM",
    "cameraId": "1005963a",
    "createdAt": "2025-01-07T08:00:00.000Z",
    "processedAt": "2025-01-07T08:05:00.000Z",
    "startDate": "2025-01-07T08:00:00.000Z",
    "duration": { "value": 2, "unit": "hours" },
    "interval": { "value": 30, "unit": "seconds" },
    "imageCount": 240,
    "eenUserEmailField": "user@example.com"
  },
  
  "analysisSummary": {
    "success": true,
    "captureId": "capture_123",
    "totalImages": 240,
    "analyzedImages": 240,
    "successfulAnalyses": 235,
    "failedAnalyses": 5,
    "totalPeopleDetected": 45,
    "averagePeoplePerImage": 0.2,
    "duration": 180,
    "analysisCompletedAt": "2025-01-07T09:15:00.000Z",
    "totalImagesInCapture": 240,
    "imagesAnalyzed": 235,
    "imagesNotAnalyzed": 5,
    "analysisProgress": 98
  },
  
  "imageAnalysis": [
    {
      "imageId": "img_001",
      "imageIndex": 1,
      "timestamp": "2025-01-07T08:00:00.000Z",
      "uploadedAt": "2025-01-07T08:05:15.000Z",
      "downloadUrl": "https://storage.googleapis.com/...",
      "storagePath": "captures/capture_123/image_001.jpg",
      "size": 245760,
      "geminiAnalysis": {
        "success": true,
        "description": "The image shows a backyard scene with green grass and trees. There are 2 people visible: one person walking a dog near the fence, and another person sitting on a bench reading. The lighting suggests it's morning time with soft natural light filtering through the trees.",
        "peopleCount": 2,
        "confidence": "high",
        "analysisTimestamp": "2025-01-07T09:10:15.000Z",
        "error": null
      }
    },
    {
      "imageId": "img_002", 
      "imageIndex": 2,
      "timestamp": "2025-01-07T08:00:30.000Z",
      "uploadedAt": "2025-01-07T08:05:45.000Z",
      "downloadUrl": "https://storage.googleapis.com/...",
      "storagePath": "captures/capture_123/image_002.jpg", 
      "size": 251840,
      "geminiAnalysis": {
        "success": true,
        "description": "The backyard appears empty in this frame. The grass and trees are visible, with morning shadows cast across the lawn. No people or animals are present in the scene.",
        "peopleCount": 0,
        "confidence": "high",
        "analysisTimestamp": "2025-01-07T09:10:45.000Z",
        "error": null
      }
    }
  ],
  
  "unanalyzedImages": [
    {
      "imageId": "img_240",
      "imageIndex": 240,
      "timestamp": "2025-01-07T09:59:30.000Z",
      "uploadedAt": "2025-01-07T10:05:00.000Z",
      "downloadUrl": "https://storage.googleapis.com/...",
      "storagePath": "captures/capture_123/image_240.jpg",
      "size": 248320,
      "status": "not_analyzed"
    }
  ],
  
  "exportMetadata": {
    "exportedAt": "2025-01-07T10:30:00.000Z",
    "exportedBy": "user@example.com",
    "version": "1.0",
    "format": "JSON",
    "description": "AI Image Analysis Results Export from EEN-GNG Application"
  }
}
```

## Filename Convention

Downloaded files use the format: `analysis_{capture_name}_{timestamp}.json`

Example: `analysis_Backyard_Camera_Morning_Session_2025-01-07T10-30-00.json`

## Use Cases

This comprehensive export enables:

1. **Data Analysis**: Import into spreadsheets or analysis tools
2. **Reporting**: Generate reports on people detection patterns
3. **Backup**: Archive analysis results for future reference
4. **Integration**: Use data in other applications or workflows
5. **Compliance**: Maintain records of AI analysis results

## Technical Implementation

- **File Generation**: Client-side using `JSON.stringify()` with 2-space indentation
- **Download Method**: Creates temporary blob URL and triggers download
- **Memory Management**: Automatically cleans up blob URLs after download
- **Error Handling**: Catches and displays any download errors
- **User Feedback**: Shows success message with auto-hide after 3 seconds 