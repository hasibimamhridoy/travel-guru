// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVf6fMC16E9Ux7GBx1WA3PeOmDcZ7_fOs",
  authDomain: "email-pass-login-ea40b.firebaseapp.com",
  databaseURL: "https://email-pass-login-ea40b-default-rtdb.firebaseio.com",
  projectId: "email-pass-login-ea40b",
  storageBucket: "email-pass-login-ea40b.appspot.com",
  messagingSenderId: "615668380674",
  appId: "1:615668380674:web:92e9165859d2eb6bcd631b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);