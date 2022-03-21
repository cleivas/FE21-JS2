import { onValue, ref, push, update } from "firebase/database";
import {db} from "./modules/firebaseApp"
import {Task} from "./modules/Task";

const dbRef = ref(db, '/to-do');
let tasks:Task[] = [];

//On every value change in the database
onValue(dbRef, snapshot=>{
    const todoData = snapshot.val();

    //Remove ech task from the dom
    for(const task of tasks){
        task.clearDOM();
    }

    tasks = []; //empty the array before we add new objects to it
    for(const key in todoData){
        tasks.push(new Task(
            key,
            todoData[key].task,
            todoData[key].done
        ));
    }
    console.log(tasks);
})

//Add a task
document.querySelector('#add').addEventListener('click', e=>{
    e.preventDefault();
    const taskToAdd = {
        task: document.querySelector('input').value,
        done: false
    }

    const newKey:string = push(dbRef).key;
    const newTask = {};
    newTask[newKey] = taskToAdd;

    update(dbRef, newTask);
})