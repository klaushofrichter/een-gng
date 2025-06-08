# 🔒 Secure Gemini AI Deployment Guide

This guide shows how to migrate from the insecure client-side API key approach to a secure Cloud Function implementation.

## 🚨 Why You Need This

**Current Security Issues:**
- ❌ Gemini API key exposed in client code
- ❌ Anyone can extract and abuse your key
- ❌ No rate limiting or cost control
- ❌ Unlimited billing exposure

**Secure Solution Benefits:**
- ✅ API key stays server-side and hidden
- ✅ User authentication required
- ✅ Rate limiting (50/hour, 200/day per user)
- ✅ Cost control and usage monitoring
- ✅ Audit logging of all requests

## 📋 Prerequisites

1. **Google Cloud Project** with billing enabled
2. **Firebase project** already set up
3. **Google Cloud CLI** installed (`gcloud`)
4. **Gemini API key** (will be moved to server-side)

## 🚀 Deployment Steps

### Step 1: Enable Required APIs

```bash
# Enable Cloud Functions and related APIs
gcloud services enable cloudfunctions.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
```

### Step 2: Deploy the Cloud Function

```bash
# Navigate to the cloud function directory
cd cloud-function-secure

# Deploy the function with your Gemini API key as environment variable
gcloud functions deploy analyze_image_secure \
  --runtime python311 \
  --trigger-http \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY="YOUR_ACTUAL_GEMINI_API_KEY_HERE" \
  --memory 512MB \
  --timeout 300s \
  --region us-central1
```

### Step 3: Get Your Cloud Function URL

After deployment, note the Cloud Function URL (will look like):
```
https://us-central1-klaus-hofrichter-simple.cloudfunctions.net/analyze_image_secure
```

### Step 4: Update Client Configuration

Add to your `.env` file:
```bash
# Remove the insecure client-side API key
# VITE_GEMINI_API_KEY=your_key_here  # DELETE THIS LINE

# Add the secure Cloud Function URL
VITE_GEMINI_CLOUD_FUNCTION_URL=https://us-central1-YOUR-PROJECT.cloudfunctions.net/analyze_image_secure
```

### Step 5: Update Your Analysis Service

Modify `src/services/analysis.js` to use the secure service:

```javascript
// Replace this import:
// import { geminiService } from './gemini.js'

// With this:
import { secureGeminiService } from './gemini-secure.js'

// Then in the analyzeCaptureImages method, replace:
// const analysisResults = await geminiService.analyzeImagesFromCapture(...)

// With:
const analysisResults = await secureGeminiService.analyzeImagesFromCapture(...)
```

## 🔧 Testing the Secure Setup

1. **Remove client-side API key** from environment variables
2. **Restart your development server**
3. **Test analysis** - should work via Cloud Function
4. **Check Cloud Function logs** in Google Cloud Console

## 📊 Monitor Usage and Costs

### View Function Logs
```bash
gcloud functions logs read analyze_image_secure --limit 50
```

### Monitor Usage in Firebase Console
- Go to Firestore
- Check the `api_usage` collection for rate limiting data
- Monitor per-user usage patterns

### Set Up Billing Alerts
1. Go to Google Cloud Console → Billing
2. Set up budget alerts for your project
3. Monitor Gemini API usage in the APIs & Services section

## 🛡️ Security Features Included

### Authentication
- ✅ Firebase Auth token required for all requests
- ✅ User email validation and logging
- ✅ Request origin validation

### Rate Limiting
- ✅ 50 requests per hour per user
- ✅ 200 requests per day per user
- ✅ Graceful error messages with retry timing

### Input Validation
- ✅ All inputs sanitized and validated
- ✅ Required fields checked
- ✅ Storage path validation

### Audit Logging
- ✅ All requests logged with user, timestamp, and image ID
- ✅ Error tracking and monitoring
- ✅ Usage patterns for optimization

## 🔄 Migration Checklist

- [ ] Deploy Cloud Function with secure API key
- [ ] Update client code to use secure service  
- [ ] Remove client-side API key from environment
- [ ] Test analysis functionality works
- [ ] Verify rate limiting is active
- [ ] Check Cloud Function logs
- [ ] Set up billing alerts
- [ ] Monitor usage in Firestore

## ⚡ Performance Considerations

- **Cold starts**: First request may be slower (3-5 seconds)
- **Rate limiting**: Built-in delays prevent API overwhelming
- **Caching**: Consider adding result caching for frequently analyzed images
- **Scaling**: Cloud Functions auto-scale based on demand

## 💰 Cost Optimization

1. **Monitor Gemini API usage** in Google Cloud Console
2. **Set up billing alerts** for unexpected costs
3. **Consider image compression** to reduce API payload size
4. **Implement result caching** to avoid re-analyzing same images

## 🆘 Troubleshooting

### "Service configuration error"
- Check that `GEMINI_API_KEY` is set in Cloud Function environment

### "Authentication failed"
- Ensure user is logged in to Firebase Auth
- Check that Firebase Auth is properly configured

### "Rate limit exceeded"
- Normal behavior when user exceeds limits
- Check `api_usage` collection in Firestore for usage data

### "Failed to fetch image from storage"
- Verify Firebase Storage permissions
- Check that storage path extraction is working correctly

## 🔮 Next Steps

After deploying the secure version:

1. **Remove all client-side API keys** from your codebase
2. **Monitor usage patterns** and adjust rate limits if needed
3. **Consider implementing result caching** for better performance
4. **Set up automated alerts** for unusual usage spikes
5. **Document the new secure workflow** for your team

---

**🎉 You're now running a secure, scalable AI analysis service!** 