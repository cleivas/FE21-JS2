import { guiStartChatting } from "./modules/gui";
import { subscribeToMessages, submitMessage } from "./modules/firebase";

//Buttons and eventlisteners
const startBtn: HTMLButtonElement = document.querySelector('#username button');
const submitBtn: HTMLButtonElement = document.querySelector('#chat button');
startBtn.addEventListener('click', start);
submitBtn.addEventListener('click', submit);

let currentUsername = 'Anonymous';

function start(event: Event): void {
    event.preventDefault();

    //Get username
    const usernameInput: HTMLInputElement = document.querySelector('#username input');
    if(usernameInput.value) {
        currentUsername = usernameInput.value;
        usernameInput.value = '';
    }

    guiStartChatting(currentUsername); //hide username form, show message form
    subscribeToMessages(currentUsername); //Set up subscription to changes to database
}

//Submitting a new message
function submit(event: Event): void {
    event.preventDefault();

    //Get message
    const chatInput: HTMLTextAreaElement = document.querySelector('#chat textarea');
    const message = chatInput.value;
    chatInput.value = '';

    submitMessage(message, currentUsername); //Write message to firebase
}
