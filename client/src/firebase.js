// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "magic-estate.firebaseapp.com",
  projectId: "magic-estate",
  storageBucket: "magic-estate.appspot.com",
  messagingSenderId: "790625910159",
  appId: "1:790625910159:web:f0e63deb8676ec3a4d5ffa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);