import {deleteMessage} from './firebase';

class Message {
    constructor(
        public readonly id: string,
        public readonly username: string,
        public readonly message: string,
        private readonly deletable: boolean
    ) {

    }
    public createMessageElement(): HTMLDivElement {
        //Create all elements
        const messageWrapper: HTMLDivElement = document.createElement('div');
        const userElement: HTMLParagraphElement = document.createElement('p');
        const messageElement: HTMLParagraphElement = document.createElement('p');

        //Add classes for styling
        messageWrapper.classList.add('message-wrapper');
        userElement.classList.add('user-name');
        messageElement.classList.add('message');

        //Get username and message from firebase
        messageElement.innerText = this.message;
        userElement.innerText = this.username;

        //Append all elements to the DOM
        messageWrapper.append(userElement);

        //If the message is deletable by the current user we add a button
        if(this.deletable){
            const deleteBtn: HTMLButtonElement = document.createElement('button');
            deleteBtn.innerText = 'X';
            messageWrapper.append(deleteBtn);
            deleteBtn.addEventListener('click', ()=>{
                deleteMessage(this.id);
            })
        }
        messageWrapper.append(messageElement);
        return messageWrapper;
    }
}

function createMessageInstances(messages: object, currentUsername: string): Message[]{
    
    //If there are 25 messages already, remove the first one
    if(Object.keys(messages).length>=25){    
        deleteMessage( Object.keys(messages)[0] );
    }

    const messageObjects: Message[] = [];
    for(const id in messages){
        //Get the key values through destructuring
        const {username, message} = messages[id]; 
        const deletable: boolean = currentUsername===username;
        messageObjects.push( 
            new Message( id, username, message, deletable)
            );
    }
    return messageObjects;
}

export { Message, createMessageInstances };