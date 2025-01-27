// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8ZDbdrmhWZuIyKazWGmvWDAkJNYWmifc",
  authDomain: "exclusive-register-dac88.firebaseapp.com",
  projectId: "exclusive-register-dac88",
  storageBucket: "exclusive-register-dac88.firebasestorage.app",
  messagingSenderId: "616074765587",
  appId: "1:616074765587:web:7dc4941a2517334c2ce6e6",
  measurementId: "G-BBSCRF92MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)