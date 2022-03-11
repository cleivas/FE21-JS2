import { Product } from "./Product.js";

//Hämtar alla produkter från firebase
export async function fetchProducts(url){

    console.log('before fetch');
    const response = await fetch(url);
    // console.log(response);
    console.log('after fetch');

    console.log('before json()');
    const data = await response.json();
    console.log(data);
    console.log('after json()');

    //Skapar en array med produkterna 
    //Varje produkt är ett objekt skapat med Produkt-klassen
    const products = [];
    for(const el of data){
        products.push( new Product(el.name, el.imgUrl, el.price));
    }

    return products;
}

//Lägger till en produkt till firebase
export async function putProduct(url, product){
    const init = {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
}