#!/usr/bin/env node

/**
 * Check for email conflicts in Firebase Authentication
 * 
 * This script helps identify users who might have conflicts
 * when trying to use EEN authentication.
 * 
 * Usage: node scripts/check-email-conflicts.js [email]
 */

const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp();
}

const auth = admin.auth();

async function checkEmailConflict(email) {
  try {
    console.log(`🔍 Checking email: ${email}`);
    
    // Try to get user by email
    const userRecord = await auth.getUserByEmail(email);
    
    console.log(`\n📧 Email: ${email}`);
    console.log(`🆔 UID: ${userRecord.uid}`);
    console.log(`🔐 Provider: ${userRecord.providerData.map(p => p.providerId).join(', ')}`);
    console.log(`✅ Email Verified: ${userRecord.emailVerified}`);
    console.log(`📅 Created: ${new Date(userRecord.metadata.creationTime).toLocaleString()}`);
    console.log(`🔄 Last Sign In: ${new Date(userRecord.metadata.lastSignInTime).toLocaleString()}`);
    
    // Check if this is an EEN user
    const isEenUser = userRecord.uid.startsWith('een_');
    console.log(`🦅 EEN User: ${isEenUser ? 'Yes' : 'No'}`);
    
    if (!isEenUser) {
      console.log(`\n⚠️  CONFLICT DETECTED:`);
      console.log(`   This email is already used by a non-EEN Firebase account.`);
      console.log(`   EEN authentication will fail for this email.`);
      console.log(`\n💡 Solutions:`);
      console.log(`   1. Use a different email for EEN authentication`);
      console.log(`   2. Delete this Firebase user (will lose data)`);
      console.log(`   3. Contact development team for account migration`);
    } else {
      console.log(`\n✅ No conflict - this is already an EEN user`);
    }
    
    return { conflict: !isEenUser, userRecord };
    
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      console.log(`\n✅ No conflict - email not found in Firebase`);
      console.log(`   EEN authentication should work for this email.`);
      return { conflict: false, userRecord: null };
    } else {
      console.error(`\n❌ Error checking email:`, error.message);
      return { conflict: null, error: error.message };
    }
  }
}

async function listAllUsers() {
  try {
    console.log(`🔍 Scanning all Firebase users for potential conflicts...\n`);
    
    let nextPageToken;
    let totalUsers = 0;
    let eenUsers = 0;
    let nonEenUsers = 0;
    let potentialConflicts = [];
    
    do {
      const listUsersResult = await auth.listUsers(1000, nextPageToken);
      
      listUsersResult.users.forEach((userRecord) => {
        totalUsers++;
        
        const isEenUser = userRecord.uid.startsWith('een_');
        if (isEenUser) {
          eenUsers++;
        } else {
          nonEenUsers++;
          if (userRecord.email) {
            potentialConflicts.push({
              email: userRecord.email,
              uid: userRecord.uid,
              providers: userRecord.providerData.map(p => p.providerId),
              created: userRecord.metadata.creationTime
            });
          }
        }
      });
      
      nextPageToken = listUsersResult.pageToken;
    } while (nextPageToken);
    
    console.log(`📊 Summary:`);
    console.log(`   Total Users: ${totalUsers}`);
    console.log(`   EEN Users: ${eenUsers}`);
    console.log(`   Non-EEN Users: ${nonEenUsers}`);
    console.log(`   Potential Conflicts: ${potentialConflicts.length}`);
    
    if (potentialConflicts.length > 0) {
      console.log(`\n⚠️  Potential Conflicts (non-EEN users with emails):`);
      potentialConflicts.forEach((user, index) => {
        console.log(`\n   ${index + 1}. ${user.email}`);
        console.log(`      UID: ${user.uid}`);
        console.log(`      Providers: ${user.providers.join(', ')}`);
        console.log(`      Created: ${new Date(user.created).toLocaleString()}`);
      });
      
      console.log(`\n💡 These users would experience conflicts if they try to use EEN authentication.`);
    } else {
      console.log(`\n✅ No potential conflicts found!`);
    }
    
  } catch (error) {
    console.error(`❌ Error listing users:`, error.message);
  }
}

async function main() {
  const email = process.argv[2];
  
  if (email) {
    // Check specific email
    await checkEmailConflict(email);
  } else {
    // List all users and identify conflicts
    await listAllUsers();
  }
  
  process.exit(0);
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run the script
main(); 