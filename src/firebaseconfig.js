import { initializeApp } from 'firebase/app';
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getDatabase} from "firebase/database"
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  databaseURL : DATABASEURL,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDER_ID,
  appId: API_ID,
  measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
export const realtimedb = getDatabase();
