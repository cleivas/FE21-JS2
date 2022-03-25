import {Message} from './Message'

function guiStartChatting(username: string): void {

    //Set placeholder text in ChatForm input
    const chatInput: HTMLTextAreaElement = document.querySelector('#chat textarea');
    chatInput.placeholder = `${username} says...`;

    //Hide start form, show chat form
    const usernameForm: HTMLFormElement = document.querySelector('#username');
    const chatForm: HTMLFormElement = document.querySelector('#chat');
    usernameForm.style.display = 'none';
    chatForm.style.display = 'block';
}

function renderMessages(messages: Message[]): void{
    const wrapper: HTMLDivElement = document.querySelector('#messages');
    wrapper.innerHTML = '';

    //Loop through all messages, create the message and att it to the message wrapper
    for(const message of messages){
        wrapper.append( message.createMessageElement() );
    }
    wrapper.scrollTop = wrapper.scrollHeight; //Makes the wrapper always scroll to the bottom

}

export {guiStartChatting, renderMessages};