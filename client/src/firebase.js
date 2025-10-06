// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANwakGWFJo9RB_SxZpMYt3Mbkh9gvGdYw",
  authDomain: "mern-auth-ffa98.firebaseapp.com",
  projectId: "mern-auth-ffa98",
  storageBucket: "mern-auth-ffa98.firebasestorage.app",
  messagingSenderId: "575153189577",
  appId: "1:575153189577:web:b95dd4d354bbdb7124d318"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);