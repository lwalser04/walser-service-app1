// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgzb-zQEuOHpk7QyiDLfDWS3gWodCjWts",
  authDomain: "walser-service-app.firebaseapp.com",
  projectId: "walser-service-app",
  storageBucket: "walser-service-app.appspot.com",
  messagingSenderId: "586727503009",
  appId: "1:586727503009:web:779fcfd037553f8bceece0",
  measurementId: "G-NXXTDBDZQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);