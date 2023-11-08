// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT5-Bs-3JOI6KHKUBdvzjJkZQdlrd7wIs",
  authDomain: "angelic-pipe-307119.firebaseapp.com",
  projectId: "angelic-pipe-307119",
  storageBucket: "angelic-pipe-307119.appspot.com",
  messagingSenderId: "272005394302",
  appId: "1:272005394302:web:99b38735f69bef33d7cd2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storageFirebase = getStorage(app);
