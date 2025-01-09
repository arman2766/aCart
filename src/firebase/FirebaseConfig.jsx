// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuW4F5f79vRUYwgiEVWhAayBehyLMtrjI",
  authDomain: "a-cart-ec16b.firebaseapp.com",
  projectId: "a-cart-ec16b",
  storageBucket: "a-cart-ec16b.firebasestorage.app",
  messagingSenderId: "61018582907",
  appId: "1:61018582907:web:4e046c0958a3da339217de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB };
