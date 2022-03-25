import { initializeApp } from "firebase/app";
import {getDatabase, onValue, ref, push, update, remove} from "firebase/database"
import { renderMessages } from "./gui";
import { Message, createMessageInstances } from "./Message";


const firebaseConfig = {
    apiKey: "AIzaSyD4HKVGcWT7aG8kJ8yB0M3nsdxT9uxoVWM",
    authDomain: "chatt-9a0d1.firebaseapp.com",
    databaseURL: "https://chatt-9a0d1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatt-9a0d1",
    storageBucket: "chatt-9a0d1.appspot.com",
    messagingSenderId: "389837837818",
    appId: "1:389837837818:web:a41c54e26707beef818043"
  };

//The firebase app and database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, '/messages/');

function subscribeToMessages(currentUsername: string): void{
    onValue(dbRef, snapshot=>{
        const messages = snapshot.val();
        const messageObjects: Message[] = createMessageInstances(messages, currentUsername);
        renderMessages( messageObjects );
    });
}

function submitMessage(message: string, username: string){
    //All data related to the new message
    const newMessage = {
        message: message,
        username: username
    }
    //Create a new object to add to firebase with one property
    //The property name is a generated unique key
    const newKey:string = push(dbRef).key;
    const toAdd = {};
    toAdd[newKey] = newMessage;
    update(dbRef, toAdd);
}

function deleteMessage(id: string){
    const messageRef = ref(db, '/messages/' + id);
    remove(messageRef);
}

export {subscribeToMessages, submitMessage, deleteMessage};