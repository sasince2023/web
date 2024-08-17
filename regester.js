// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByp-0baNIqkVEb0JYhTv5wqIAtF59Ikyg",
  authDomain: "sasince2023-e9b15.firebaseapp.com",
  projectId: "sasince2023-e9b15",
  storageBucket: "sasince2023-e9b15.appspot.com",
  messagingSenderId: "146772893239",
  appId: "1:146772893239:web:716c209a9ab70648f5e9b2",
  measurementId: "G-NBZ5JKLMHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);