// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBxokTZ0Gv6XU4f5h9xlX3dw4ZzcZ6ZJYo",
  authDomain: "petcare-b9a57.firebaseapp.com",
  projectId: "petcare-b9a57",
  storageBucket: "petcare-b9a57.appspot.com",
  messagingSenderId: "1042346017586",
  appId: "1:1042346017586:web:7077717b8f4d90531f4d2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getAuth(app);