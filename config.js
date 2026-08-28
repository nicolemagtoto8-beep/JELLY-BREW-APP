// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc4H-7-HA-fTHTFHJPir3YYmtbzOrzoLg",
  authDomain: "coffee-jelly-orders.firebaseapp.com",
  projectId: "coffee-jelly-orders",
  storageBucket: "coffee-jelly-orders.firebasestorage.app",
  messagingSenderId: "931814669127",
  appId: "1:931814669127:web:aa9353c460a8597898aa62",
  measurementId: "G-27W7MP76SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);