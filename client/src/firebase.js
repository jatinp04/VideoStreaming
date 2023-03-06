// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA7wQuF39iWIIJWoR32OvaCiHVYseS87c",
  authDomain: "video-f6bee.firebaseapp.com",
  projectId: "video-f6bee",
  storageBucket: "video-f6bee.appspot.com",
  messagingSenderId: "380397710631",
  appId: "1:380397710631:web:e01fde64cd1727fb8f4d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;