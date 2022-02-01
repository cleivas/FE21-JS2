const url = `https://api.punkapi.com/v2/beers`;

//Här följer 4 olika sätt att utföra exakt samma sak. 
//Lägg märke till att det inte är självklart i vilken ordning det loggas i konsolen.
//Det beror helt enkelt på vilka promises som blir fulfilled först


//Vi sparar ner varje promise i en variabel
const beerPromise = fetch(url); //fetch returnerar ett promise
console.log(beerPromise);

const jsonPromise = beerPromise.then(
    function(promiseValue){
        // console.log(promiseValue);
        return promiseValue.json(); //json() tar json-datan i responseobjectets body och gör om till JS objekt. Metoden returnerar ett promise
    }
);
console.log(jsonPromise);

jsonPromise.then(
    function(promiseValue){
        console.log('Promise i variabler', promiseValue);
    }
)

//Vi kan skriva det som en enda promisekedja
fetch(url).then(
    function(response){
        return response.json();
    }
).then(
    function(data){
        console.log('Promisekedja', data);
    }
)

//Exakt samma kedja men med arrowfunktioner
fetch(url).then(r=>r.json()).then(d=>console.log('Arrowfunktioner', d));

//Exakt samma igen men med definierade funktioner som används som callbackfunktioner

fetch(url).then(fetchCallback).then(jsonCallback);

function fetchCallback(response){
    return response.json();
}

function jsonCallback(data){
    console.log('Definierade funktioner', data);
}