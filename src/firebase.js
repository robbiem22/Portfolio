// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrn8Nzmuf2U52_eIF6ecWsiWThVArmvgg",
  authDomain: "portfolio-f5e00.firebaseapp.com",
  projectId: "portfolio-f5e00",
  storageBucket: "portfolio-f5e00.firebasestorage.app",
  messagingSenderId: "794164956872",
  appId: "1:794164956872:web:559db9082d708bd8ffdffd",
  measurementId: "G-W51G3614YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }