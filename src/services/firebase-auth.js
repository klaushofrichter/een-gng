import { getFunctions, httpsCallable } from 'firebase/functions'
import { getAuth, signInWithCustomToken, signOut as firebaseSignOut } from 'firebase/auth'
import { useAuthStore } from '../stores/auth'

/**
 * Firebase Custom Authentication Service
 * Integrates EEN OAuth authentication with Firebase custom tokens
 */
class FirebaseAuthService {
  constructor() {
    this.auth = null
    this.functions = null
    this.currentUser = null
    this.tokenCheckInterval = null
  }

  /**
   * Initialize Firebase Auth and Functions
   * @param {Object} firebaseApp - The Firebase app instance
   */
  initialize(firebaseApp) {
    console.log('[FirebaseAuth] Initializing Firebase Auth and Functions')
    
    if (!firebaseApp) {
      throw new Error('Firebase app instance is required for initialization')
    }
    
    try {
      this.auth = getAuth(firebaseApp)
      console.log('[FirebaseAuth] Firebase Auth initialized successfully')
      
      this.functions = getFunctions(firebaseApp)
      console.log('[FirebaseAuth] Firebase Functions initialized successfully')
    } catch (error) {
      console.error('[FirebaseAuth] Error during initialization:', error)
      throw new Error(`Firebase initialization failed: ${error.message}`)
    }
    
    // Listen for auth state changes
    this.auth.onAuthStateChanged((user) => {
      this.currentUser = user
      if (user) {
        //console.log('[FirebaseAuth] User signed in:', user.uid)
        
        // Set up token refresh listener
        this.checkAndRefreshToken()
        
        // Set up periodic token check
        if (this.tokenCheckInterval) {
          clearInterval(this.tokenCheckInterval)
        }
        this.tokenCheckInterval = setInterval(() => {
          this.checkAndRefreshToken()
        }, 60000) // Check every minute
      } else {
        console.log('[FirebaseAuth] User signed out')
        // Clear token check interval
        if (this.tokenCheckInterval) {
          clearInterval(this.tokenCheckInterval)
          this.tokenCheckInterval = null
        }
      }
    })
  }

  /**
   * Check if the Firebase token needs to be refreshed and refresh if necessary
   */
  async checkAndRefreshToken() {
    if (!this.currentUser) return

    try {
      const idTokenResult = await this.currentUser.getIdTokenResult()
      const expirationTime = new Date(idTokenResult.expirationTime).getTime()
      const now = Date.now()
      const timeUntilExpiration = expirationTime - now
      
      // If token will expire in less than 5 minutes, refresh it
      if (timeUntilExpiration < 300000) {
        console.log('[FirebaseAuth] Firebase token expiring soon, refreshing...')
        await this.refreshAuth()
      }
    } catch (error) {
      console.error('[FirebaseAuth] Error checking token expiration:', error)
    }
  }

  /**
   * Get the current Firebase user
   * @returns {Object|null} Current Firebase user or null
   */
  getCurrentUser() {
    console.log('[FirebaseAuth] Getting current user:', this.currentUser)
    return this.currentUser
  }

  /**
   * Check if user is authenticated with Firebase
   * @returns {boolean} True if authenticated
   */
  isAuthenticated() {
    console.log('[FirebaseAuth] Checking if user is authenticated:', !!this.currentUser)
    return !!this.currentUser
  }

  /**
   * Check if Firebase services are properly initialized
   * @returns {boolean} True if initialized
   */
  isInitialized() {
    const initialized = !!(this.auth && this.functions)
    console.log('[FirebaseAuth] Checking if Firebase services are initialized:', initialized)
    return initialized
  }

  /**
   * Get a custom Firebase token from the server using EEN credentials
   * @returns {Promise<string>} Custom Firebase token
   */
  async getCustomToken() {
    console.log('[FirebaseAuth] Getting custom token')
    const eenAuthStore = useAuthStore()
    
    //console.log('[FirebaseAuth] EEN Auth Store State:', {
    //  isAuthenticated: eenAuthStore.isAuthenticated,
    //  hasToken: !!eenAuthStore.token,
    //  token: eenAuthStore.token ? eenAuthStore.token.substring(0, 20) + '...' : null,
    //  hasUserProfile: !!eenAuthStore.userProfile,
    //  userProfile: eenAuthStore.userProfile,
    //  baseUrl: eenAuthStore.baseUrl
    //})
    
    if (!eenAuthStore.isAuthenticated) {
      console.error('[FirebaseAuth] EEN user not authenticated')
      throw new Error('EEN user not authenticated')
    }
    
    if (!eenAuthStore.userProfile) {
      console.error('[FirebaseAuth] EEN user profile not available')
      throw new Error('EEN user profile not available')
    }

    // Check for baseUrl
    if (!eenAuthStore.baseUrl) {
      console.error('[FirebaseAuth] EEN base URL not configured')
      throw new Error('EEN base URL not configured')
    }

    // Extract EEN user information
    const eenUserId = eenAuthStore.userProfile.id || eenAuthStore.userProfile.userId
    const eenUserEmail = eenAuthStore.userProfile.email
    const eenAccessToken = eenAuthStore.token

    if (!eenUserId || !eenUserEmail || !eenAccessToken) {
      throw new Error('Missing required EEN user information')
    }

    try {
      // Validate Firebase functions are initialized
      if (!this.functions) {
        throw new Error('Firebase Functions not initialized. Please refresh the page and try again.')
      }
      
      //console.log('[FirebaseAuth] Calling Firebase function with data:', {
      //  eenUserId: String(eenUserId),
      //  eenUserEmail,
      //  eenBaseUrl: eenAuthStore.baseUrl,
      //  hasAccessToken: !!eenAccessToken
      //})
      
      // Call the Firebase function to create a custom token
      const createCustomToken = httpsCallable(this.functions, 'createCustomToken')
      const result = await createCustomToken({
        eenUserId: String(eenUserId),
        eenUserEmail,
        eenAccessToken,
        eenBaseUrl: eenAuthStore.baseUrl,
        additionalClaims: {
          // Add any additional claims you want in the token
          eenUserName: eenAuthStore.userProfile.name || 
                      (eenAuthStore.userProfile.firstName && eenAuthStore.userProfile.lastName 
                        ? `${eenAuthStore.userProfile.firstName} ${eenAuthStore.userProfile.lastName}` 
                        : eenAuthStore.userProfile.firstName || eenAuthStore.userProfile.lastName || 'Unknown'),
          authProvider: 'een'
        }
      })

      console.log('[FirebaseAuth] Custom token created successfully')
      
      if (!result || !result.data || !result.data.customToken) {
        throw new Error('Invalid response from Firebase function - missing custom token')
      }
      
      return result.data.customToken
    } catch (error) {
      console.error('[FirebaseAuth] Error getting custom token:', error)
      
      // Handle specific error cases with user-friendly messages
      if (error.code === 'functions/already-exists') {
        throw new Error(`Email address conflict: ${error.message}`)
      } else if (error.code === 'functions/unauthenticated') {
        throw new Error(`Authentication failed: ${error.message}`)
      } else if (error.code === 'functions/permission-denied') {
        throw new Error(`Permission denied: ${error.message}`)
      } else if (error.code === 'functions/unavailable') {
        throw new Error(`Service unavailable: ${error.message}`)
      } else {
        throw new Error(`Failed to get custom token: ${error.message}`)
      }
    }
  }

  /**
   * Sign in to Firebase using EEN authentication
   * @returns {Promise<Object>} Firebase user object
   */
  async signInWithEEN() {
    try {
      console.log('[FirebaseAuth] Signing in with EEN')
      // Get custom token from server
      const customToken = await this.getCustomToken()
      
      // Sign in to Firebase with the custom token
      const userCredential = await signInWithCustomToken(this.auth, customToken)
      const user = userCredential.user

      console.log('[FirebaseAuth] Successfully signed in with custom token:', user.uid)
      
      // Get the Firebase ID token for API calls
      const idToken = await user.getIdToken()
      console.log('[FirebaseAuth] Firebase ID token obtained')

      // Debug: Parse and log the ID token claims
      try {
        const idTokenResult = await user.getIdTokenResult()
        //console.log('[FirebaseAuth] ID Token Claims:', {
        //  email: idTokenResult.claims.email,
        //  eenUserEmail: idTokenResult.claims.eenUserEmail,
        //  eenUserId: idTokenResult.claims.eenUserId,
        //  provider: idTokenResult.claims.provider,
        //  authProvider: idTokenResult.claims.authProvider,
        //  allClaims: idTokenResult.claims
        //})
      } catch (claimsError) {
        console.error('[FirebaseAuth] Error getting ID token claims:', claimsError)
      }

      return {
        user,
        idToken,
        uid: user.uid
      }
    } catch (error) {
      console.error('[FirebaseAuth] Error signing in with custom token:', error)
      throw new Error(`Firebase sign-in failed: ${error.message}`)
    }
  }

  /**
   * Sign out from Firebase
   * @returns {Promise<void>}
   */
  async signOut() {
    console.log('[FirebaseAuth] Signing out')
    try {
      await firebaseSignOut(this.auth)
      this.currentUser = null
      console.log('[FirebaseAuth] Successfully signed out')
    } catch (error) {
      console.error('[FirebaseAuth] Error signing out:', error)
      throw new Error(`Firebase sign-out failed: ${error.message}`)
    }
  }

  /**
   * Get the current Firebase ID token
   * @param {boolean} forceRefresh - Whether to force refresh the token
   * @returns {Promise<string|null>} Firebase ID token or null if not authenticated
   */
  async getIdToken(forceRefresh = false) {
    console.log('[FirebaseAuth] Getting ID token')
    if (!this.currentUser) {
      return null
    }

    try {
      return await this.currentUser.getIdToken(forceRefresh)
    } catch (error) {
      console.error('[FirebaseAuth] Error getting ID token:', error)
      return null
    }
  }

  /**
   * Refresh the Firebase authentication if the EEN token is still valid
   * @returns {Promise<boolean>} True if refresh was successful
   */
  async refreshAuth() {
    console.log('[FirebaseAuth] Refreshing Firebase auth')
    const eenAuthStore = useAuthStore()
    
    if (!eenAuthStore.isAuthenticated) {
      console.log('[FirebaseAuth] EEN user not authenticated, cannot refresh Firebase auth')
      return false
    }

    // Check if Firebase services are initialized
    if (!this.isInitialized()) {
      console.error('[FirebaseAuth] Firebase services not initialized, cannot refresh auth')
      return false
    }

    try {
      await this.signInWithEEN()
      console.log('[FirebaseAuth] Refreshed Firebase auth')
      return true
    } catch (error) {
      console.error('[FirebaseAuth] Error refreshing Firebase auth:', error)
      
      // If it's a Firebase initialization error, suggest page refresh
      if (error.message.includes('not initialized')) {
        console.error('[FirebaseAuth] Firebase initialization issue detected. User should refresh the page.')
      }
      
      return false
    }
  }
}

// Create and export a singleton instance
export const firebaseAuthService = new FirebaseAuthService()

// Export the class for testing or multiple instances if needed
export { FirebaseAuthService } 