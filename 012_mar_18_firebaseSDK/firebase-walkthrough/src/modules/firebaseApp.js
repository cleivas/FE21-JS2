// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLv9CjGoiIF36FbU0AQKwlGBPNelMV1Hw",
  authDomain: "firstdatabaseproject-10160.firebaseapp.com",
  databaseURL: "https://firstdatabaseproject-10160-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firstdatabaseproject-10160",
  storageBucket: "firstdatabaseproject-10160.appspot.com",
  messagingSenderId: "180398793181",
  appId: "1:180398793181:web:a3828288a1cdaa76031634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };