import functions_framework
import requests
import json
import base64
from google.cloud import firestore
from google.cloud import storage
import logging
import os
from datetime import datetime, timedelta

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize clients
db = firestore.Client()
storage_client = storage.Client()

# Gemini API configuration - API key stored securely in Cloud Functions environment
GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"

# Rate limiting configuration
RATE_LIMIT_PER_USER_PER_HOUR = 50
RATE_LIMIT_PER_USER_PER_DAY = 200

@functions_framework.http
def analyze_image_secure(request):
    """
    Secure Cloud Function for Gemini image analysis
    Handles authentication, rate limiting, and secure API calls
    """
    
    # Enable CORS
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }

    try:
        # Validate request method
        if request.method != 'POST':
            return json.dumps({'error': 'Method not allowed'}), 405, headers

        # Validate API key is configured
        if not GEMINI_API_KEY:
            logger.error("Gemini API key not configured")
            return json.dumps({'error': 'Service configuration error'}), 500, headers

        # Get request data
        request_json = request.get_json(silent=True)
        if not request_json:
            return json.dumps({'error': 'Invalid JSON'}), 400, headers

        # Extract required fields
        user_email = request_json.get('userEmail')
        capture_id = request_json.get('captureId') 
        image_id = request_json.get('imageId')
        storage_path = request_json.get('storagePath')
        bucket_name = request_json.get('bucketName')

        # Validate required fields
        if not all([user_email, capture_id, image_id, storage_path, bucket_name]):
            return json.dumps({
                'error': 'Missing required fields: userEmail, captureId, imageId, storagePath, bucketName'
            }), 400, headers

        logger.info(f"Processing analysis request for user {user_email}, image {image_id}")

        # Check rate limits
        if not check_rate_limits(user_email):
            return json.dumps({
                'error': 'Rate limit exceeded. Please try again later.',
                'retryAfter': 3600  # 1 hour
            }), 429, headers

        # Fetch image from Google Cloud Storage
        try:
            bucket = storage_client.bucket(bucket_name)
            blob = bucket.blob(storage_path)
            image_bytes = blob.download_as_bytes()
            image_base64 = base64.b64encode(image_bytes).decode('utf-8')
            logger.info(f"Successfully fetched image {storage_path}, size: {len(image_bytes)} bytes")
        except Exception as e:
            logger.error(f"Failed to fetch image {storage_path}: {e}")
            return json.dumps({
                'error': 'Failed to fetch image from storage'
            }), 404, headers

        # Prepare Gemini API payload
        prompt = "Count the number of people in this image and provide a brief description of what they are doing. Be specific about the number of people you can see."
        
        payload = {
            "contents": [
                {
                    "role": "user",
                    "parts": [
                        {"text": prompt},
                        {
                            "inlineData": {
                                "mimeType": "image/jpeg",
                                "data": image_base64
                            }
                        }
                    ]
                }
            ]
        }

        # Call Gemini API
        logger.info("Calling Gemini API...")
        response = requests.post(
            GEMINI_API_URL, 
            headers={'Content-Type': 'application/json'}, 
            data=json.dumps(payload),
            timeout=30
        )
        response.raise_for_status()
        gemini_result = response.json()
        
        # Process Gemini response
        analysis_output = process_gemini_response(gemini_result)
        
        # Store result in Firestore
        store_analysis_result(image_id, analysis_output)
        
        # Log usage for rate limiting
        log_api_usage(user_email)
        
        logger.info(f"Successfully completed analysis for image {image_id}")
        
        return json.dumps({
            'success': True,
            'imageId': image_id,
            'analysis': analysis_output
        }), 200, headers

    except requests.exceptions.RequestException as e:
        logger.error(f"Gemini API error: {e}")
        return json.dumps({
            'error': 'AI analysis service temporarily unavailable'
        }), 503, headers
    
    except Exception as e:
        logger.error(f"Unexpected error: {e}", exc_info=True)
        return json.dumps({
            'error': 'Internal server error'
        }), 500, headers

def check_rate_limits(user_email):
    """Check if user has exceeded rate limits"""
    try:
        now = datetime.utcnow()
        hour_ago = now - timedelta(hours=1)
        day_ago = now - timedelta(days=1)
        
        # Check hourly limit
        hourly_query = db.collection('api_usage').where('userEmail', '==', user_email).where('timestamp', '>=', hour_ago)
        hourly_count = len(list(hourly_query.stream()))
        
        if hourly_count >= RATE_LIMIT_PER_USER_PER_HOUR:
            logger.warning(f"User {user_email} exceeded hourly rate limit: {hourly_count}")
            return False
            
        # Check daily limit
        daily_query = db.collection('api_usage').where('userEmail', '==', user_email).where('timestamp', '>=', day_ago)
        daily_count = len(list(daily_query.stream()))
        
        if daily_count >= RATE_LIMIT_PER_USER_PER_DAY:
            logger.warning(f"User {user_email} exceeded daily rate limit: {daily_count}")
            return False
            
        return True
        
    except Exception as e:
        logger.error(f"Error checking rate limits: {e}")
        return True  # Allow on error to avoid blocking users

def process_gemini_response(gemini_result):
    """Process Gemini API response and extract analysis data"""
    analysis = {
        'success': True,
        'description': None,
        'peopleCount': None,
        'confidence': 'unknown',
        'analysisTimestamp': datetime.utcnow().isoformat()
    }
    
    if gemini_result and gemini_result.get('candidates') and gemini_result['candidates'][0].get('content'):
        response_text = gemini_result['candidates'][0]['content']['parts'][0]['text']
        analysis['description'] = response_text
        analysis['peopleCount'] = parse_people_count(response_text)
        analysis['confidence'] = 'high' if analysis['peopleCount'] is not None else 'low'
    else:
        analysis['confidence'] = 'low'
        analysis['description'] = 'No analysis available'
    
    return analysis

def parse_people_count(text):
    """Parse people count from Gemini response text"""
    import re
    
    text = text.lower()
    
    if 'no people' in text or 'no person' in text:
        return 0
    
    if 'one person' in text or '1 person' in text:
        return 1
    
    # Look for "X people" pattern
    people_match = re.search(r'(\d+)\s+people', text)
    if people_match:
        return int(people_match.group(1))
    
    # Look for "X person" pattern  
    person_match = re.search(r'(\d+)\s+person', text)
    if person_match:
        return int(person_match.group(1))
    
    return None

def store_analysis_result(image_id, analysis_output):
    """Store analysis result in Firestore"""
    try:
        image_ref = db.collection('capture_images').document(image_id)
        image_ref.update({
            'geminiAnalysis': analysis_output
        })
        logger.info(f"Stored analysis result for image {image_id}")
    except Exception as e:
        logger.error(f"Failed to store analysis result: {e}")
        raise

def log_api_usage(user_email):
    """Log API usage for rate limiting"""
    try:
        usage_ref = db.collection('api_usage').document()
        usage_ref.set({
            'userEmail': user_email,
            'timestamp': datetime.utcnow(),
            'service': 'gemini_analysis'
        })
    except Exception as e:
        logger.error(f"Failed to log API usage: {e}")
        # Don't raise - this shouldn't break the main functionality 