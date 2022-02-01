const beerUrl = `https://api.punkapi.com/v2/beers`;

console.log('first log'); //Loggas som första
fetchBeer(beerUrl).catch(e=>console.log(e));
console.log('second log'); //Loggas som tredje

//En asynkron funktion. 
async function fetchBeer(url){
    console.log('fetch beer'); //Loggas som andra

    //tolkandet av koden 'pausas' här medan promisets status är pending. Undertiden kan annan kod, utanför funktionen, efter där funktionen anropas, fortfarande tolkas
    const response = await fetch(url);
    console.log(response); //Loggas som fjärde

    //Även här 'pausas' koden
    const data = await response.json();
    console.log(data); //Loggas som femte
}