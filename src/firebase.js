// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8h_siyr1Bdv45s7dPP0Cb8BYcyHCs_4g",
  authDomain: "asc-water-treatment.firebaseapp.com",
  projectId: "asc-water-treatment",
  storageBucket: "asc-water-treatment.firebasestorage.app",
  messagingSenderId: "812999671239",
  appId: "1:812999671239:web:0073baea32f927bebb6de2",
  measurementId: "G-L4VVPDHH72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
