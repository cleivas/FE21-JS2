import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDKFpHf-PjsNUkqA2eIMxnjHENhHlnm4MI",
  authDomain: "to-do-2a859.firebaseapp.com",
  databaseURL: "https://to-do-2a859-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "to-do-2a859",
  storageBucket: "to-do-2a859.appspot.com",
  messagingSenderId: "24887847936",
  appId: "1:24887847936:web:811b013ba5dfd32cbcbce5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
