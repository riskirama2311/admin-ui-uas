// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-d1cb6.firebaseapp.com",
  projectId: "store-tutorial-d1cb6",
  storageBucket: "store-tutorial-d1cb6.appspot.com",
  messagingSenderId: "733431122470",
  appId: "1:733431122470:web:aa9ecec8a37349640174e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
