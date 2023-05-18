// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABL0kjlk7R80o8VhgWp-C2OoohpBnKenc",
  authDomain: "netflix-clone-4dced.firebaseapp.com",
  projectId: "netflix-clone-4dced",
  storageBucket: "netflix-clone-4dced.appspot.com",
  messagingSenderId: "11262719675",
  appId: "1:11262719675:web:e75880d2792c9e3cacdb9e",
  measurementId: "G-MT049J3WSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)