// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0kiSHkVQKMSbvqxwTwy4mgkHTw84rOFI",
  authDomain: "ws001-31bf0.firebaseapp.com",
  projectId: "ws001-31bf0",
  storageBucket: "ws001-31bf0.appspot.com",
  messagingSenderId: "1086228988707",
  appId: "1:1086228988707:web:a1881908674b1e432c8296",
  measurementId: "G-L71CGMV1L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Utils
const auth = firebase.auth();

// Export
export{auth};