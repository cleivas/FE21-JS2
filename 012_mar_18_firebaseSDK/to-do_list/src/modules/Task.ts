import { db } from "./firebaseApp";
import { ref, remove, update } from "firebase/database";

//Class for each task
export class Task{
    constructor(
        public readonly id:string,
        public readonly task:string,
        public done:boolean
    ){
        this.displayTask();
    }

    //Create all DOM elements to display the task
    private displayTask():void{
        const container:HTMLElement = document.createElement('section');
        container.id = this.id;
        document.body.append(container);

        const h3:HTMLHeadingElement = document.createElement('h3');
        h3.innerText = this.task;
        if(this.done) h3.style.textDecorationLine = 'line-through';

        const removeBtn:HTMLButtonElement = document.createElement('button');
        removeBtn.innerText = 'X';
        container.append(removeBtn, h3);

        //Change done status
        h3.addEventListener('click', ()=>{
            this.toggleDone();
        })
        //Remove task
        removeBtn.addEventListener('click', ()=>{
            const taskRef = ref(db, '/to-do/' + this.id);
            remove(taskRef);
        })
    }
    private toggleDone():void{
        this.done = !this.done;

        const taskRef = ref(db, '/to-do/' + this.id);
        const newDone = {};
        newDone['/done'] = this.done;
        update(taskRef, newDone);
    }

    //Remove all DOM elements
    public clearDOM():void{
        document.querySelector(`#${this.id}`).remove();
    }
}