// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // ✅ Import Firestore properly
import { getStorage } from "firebase/storage";      // ✅ Import Firebase Storage

// Firebase configuration
const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);     // ✅ Firestore initialized correctly
const storage = getStorage(app);  // ✅ Firebase Storage initialized correctly
const auth = getAuth(app);        // ✅ Firebase Auth initialized correctly

// Export Firebase services
export { db, storage, auth };
