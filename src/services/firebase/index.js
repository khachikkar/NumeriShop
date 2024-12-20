// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRlqqeaJ7DGKEhJxkxSTmBbpy53M2-XK4",
  authDomain: "numerishop-4bde7.firebaseapp.com",
  projectId: "numerishop-4bde7",
  storageBucket: "numerishop-4bde7.appspot.com",
  messagingSenderId: "301301814560",
  appId: "1:301301814560:web:0d13737c3cfdc1fd55b345",
  measurementId: "G-SY85D0HS19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const db = getFirestore(app)

export {
  db,
  auth
}