import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC78Gd7q0SJD37p7TiNDthDaDx6yHaI4KY",
    authDomain: "ws001-d6bf5.firebaseapp.com",
    projectId: "ws001-d6bf5",
    storageBucket: "ws001-d6bf5.appspot.com",
    messagingSenderId: "98300526143",
    appId: "1:98300526143:web:d8a848b1eb4bd7e7ab428a"
};

const app = initializeApp(firebaseConfig);

const functions = getFunctions(app);
const firestore = getFirestore(app);
const auth = getAuth(app)

export { app, functions, firestore, auth  };