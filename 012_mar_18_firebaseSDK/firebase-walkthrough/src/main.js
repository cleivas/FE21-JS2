import {db} from "./modules/firebaseApp.js";
import {onValue, ref, remove, push, update, query } from "firebase/database";

//databasreferens
const dbRef = ref(db, '/moviesDB/test/');
console.log(dbRef);

onValue(dbRef, snapshot=>{
    const data = snapshot.val();
    console.log(data);
    displayNames(data);
})


function displayNames(data){
    const div = document.querySelector('#db-names');
    div.innerHTML = '';

    for(const key in data){
        console.log(key, data[key].name);
        const h3 = document.createElement('h3');
        h3.innerText = data[key].name;
        div.append(h3);
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const idInput = document.querySelector('#remove-movie')
    console.log(idInput.value);

    const movieRef = ref(db, '/moviesDB/test/' + idInput.value);
    remove(movieRef);
})

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const directorInput = document.querySelector('#director');
    const scoreInput = document.querySelector('#score');

    const movieToPost = {
        name: nameInput.value,
        director: directorInput.value,
        score: scoreInput.value
    }
    console.log(movieToPost);

    const newMovieKey = push(dbRef).key;
    console.log(newMovieKey);

    const newMovie = {};
    newMovie[newMovieKey] = movieToPost;
    update(dbRef, newMovie);
})

const changeBtn = document.querySelector('#change');
changeBtn.addEventListener('click', e=>{
    e.preventDefault();
    const nameInput = document.querySelector('#change-name');

    const id = '-Mv3wGBcItKloScNyZNw';
    const movieToUpdate = {};
    movieToUpdate[id+'/name'] = nameInput.value;
    update(dbRef, movieToUpdate);
})