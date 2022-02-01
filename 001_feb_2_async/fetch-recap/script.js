const url = `https://api.punkapi.com/v2/beers`;
const beerPromise = fetch(url); //fetch returnerar ett promise
console.log(beerPromise);

const jsonPromise = beerPromise.then(
    function(promiseValue){
        console.log(promiseValue);
        return promiseValue.json(); //json() tar json-datan i responseobjectets body och gör om till JS objekt. Metoden returnerar ett promise
    }
);
console.log(jsonPromise);

jsonPromise.then(
    function(promiseValue){
        console.log(promiseValue);
    }
)

//Vi kan skriva det som en enda promisekedja
fetch(url).then(
    function(response){
        return response.json();
    }
).then(
    function(data){
        console.log(data);
    }
)

//Exakt samma kedja men med arrowfunktioner
fetch(url).then(r=>r.json()).then(d=>console.log(d));
