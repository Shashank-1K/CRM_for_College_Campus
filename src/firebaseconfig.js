import { initializeApp } from 'firebase/app';
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB5UyU2oHHxHK-rP5asqGaGgeaMy085O0s",
  authDomain: "fir-demo-97d95.firebaseapp.com",
  projectId: "fir-demo-97d95",
  storageBucket: "fir-demo-97d95.appspot.com",
  messagingSenderId: "1045614018836",
  appId: "1:1045614018836:web:bb3f0bc6cdba8006fcc201",
  measurementId: "G-XZLSVB4W2S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
