// Clear localStorage script for debugging Firebase authentication issues
// Run this in the browser console if you're experiencing authentication problems

console.log('🧹 Clearing localStorage for EEN GNG application...');

// List of localStorage keys used by the application
const keysToRemove = [
  'eenBaseUrl',      // Old key that might cause issues
  'eenHostname',     // New hostname key
  'eenPort',         // New port key
  'eenToken',        // EEN access token
  'eenUserProfile',  // EEN user profile
  'auth_token',      // Auth store token
  'user_data',       // Auth store user data
  'hostname',        // Auth store hostname
  'port',            // Auth store port
  'token_expiration', // Auth store token expiration
  'refresh_token',   // Auth store refresh token
  'redirectAfterLogin', // Router redirect
  'isValidRoute'     // Router validation
];

// Clear each key and log the action
keysToRemove.forEach(key => {
  const value = localStorage.getItem(key);
  if (value !== null) {
    localStorage.removeItem(key);
    console.log(`✅ Removed ${key}: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}`);
  } else {
    console.log(`ℹ️  ${key}: not found`);
  }
});

console.log('🎉 localStorage cleared! Please refresh the page and try logging in again.');
console.log('📝 If you continue to experience issues, check the browser console for detailed error messages.'); 