
//Funktionen tar ett objekt skapat av klassen Product som argument
//Destructuring 
export function displayProducts({name, imgUrl, price}){

    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h1.innerText = name;
    p.innerText = price;
    img.src = imgUrl;

    document.body.append(h1, p, img); 
}