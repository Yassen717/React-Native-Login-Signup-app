// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClod14_QHaTYoBbQSEjZv7KpkB-CsrIXg",
  authDomain: "react-native-login-4835a.firebaseapp.com",
  projectId: "react-native-login-4835a",
  storageBucket: "react-native-login-4835a.appspot.com",
  messagingSenderId: "162059147284",
  appId: "1:162059147284:web:d69033e4b58e40ce2faf01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)