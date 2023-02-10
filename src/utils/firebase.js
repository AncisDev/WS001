// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC78Gd7q0SJD37p7TiNDthDaDx6yHaI4KY",
  authDomain: "ws001-d6bf5.firebaseapp.com",
  projectId: "ws001-d6bf5",
  storageBucket: "ws001-d6bf5.appspot.com",
  messagingSenderId: "98300526143",
  appId: "1:98300526143:web:d8a848b1eb4bd7e7ab428a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Utils
  const auth = firebase.auth();

// Export
export{auth};