const url = 'https://firstdatabaseproject-10160-default-rtdb.europe-west1.firebasedatabase.app/moviesDB.json';

//Listar alla movies
fetch(url)
    .then(r=>r.json())
    .then(d=>{
        console.log('Listar alla filmer', d);
        //Logga endast namnet på varje film i konsolen
        for(const movie in d){
            //Movie är egenskapsnamnet, vi itererar igenom alla egenskaper i objektet d
            console.log(d[movie].name);
        }
    });

//POST
//Filmen vi vill lägga till
const newMovie = {
    name: 'Rise of Skywalker',
    director: 'JJ Abrams',
    score: 9.8
};

const headerObject = {
    "Content-type": "application/json; charset=UTF-8"
};

const init = {
    method: 'POST', //Lägger till filmen med ett genererat ID
    body: JSON.stringify(newMovie),
    headers: headerObject
}
const urlNew = 'https://firstdatabaseproject-10160-default-rtdb.europe-west1.firebasedatabase.app/moviesDB/test.json'

fetch(urlNew, init) 
    .then(r=>r.json())
    .then(d=>console.log('Posted new movie', d));



//DELETE
const hanibalUrl = 'https://firstdatabaseproject-10160-default-rtdb.europe-west1.firebasedatabase.app/moviesDB/0.json';

//Efter att vi tagit bort den här så finns den ju inte så då kan vi inte ta bort den igen
// fetch(hanibalUrl, {
//     method: 'DELETE'
// }).then(response=>response.json())
//     .then(data=>console.log(data));


//PUT - det nya objectet ersätter hela det gamla objektet
const skywalkerUrl = 'https://firstdatabaseproject-10160-default-rtdb.europe-west1.firebasedatabase.app/moviesDB/-Mv3CW3BGKYZAlYJxBhO.json';
fetch(skywalkerUrl, {
    method: 'PUT',
    body: JSON.stringify({
        name: 'Scar face'
    }),
    headers: headerObject,
}).then(r=>r.json()).then(d=>console.log(d));

//PATCH - uppdaterar endast de egenskaperna vi skickar med, resten är oförändrat
const skywalkerUrl2 = 'https://firstdatabaseproject-10160-default-rtdb.europe-west1.firebasedatabase.app/moviesDB/-Mv3CW3BGKYZAlYJxBhO.json';
fetch(skywalkerUrl2, {
    method: 'PATCH',
    body: JSON.stringify({
        name: 'Scar face'
    }),
    headers: headerObject,
}).then(r=>r.json()).then(d=>console.log(d));



//PUT - det nya objektet läggs till med id:t 'nyttID'
const newID = 'nyttID'
const nyUrl = `https://firstdatabaseproject-10160-default-rtdb.europe-west1.firebasedatabase.app/moviesDB/${newID}.json`;
fetch(nyUrl, {
    method: 'PUT',
    body: JSON.stringify({
        name: 'Scar face'
    }),
    headers: headerObject,
}).then(r=>r.json()).then(d=>console.log(d));