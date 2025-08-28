// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6UpINnh7sbz2oqKQMxPl_nSG3U3ZS8WY",
  authDomain: "delivery-1fe42.firebaseapp.com",
  projectId: "delivery-1fe42",
  storageBucket: "delivery-1fe42.appspot.com",
  messagingSenderId: "315989310177",
  appId: "1:315989310177:web:87b9fdafbd9377518855a0",
  measurementId: "G-TQGQY0J7XP"
};

// ✅ Only initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
