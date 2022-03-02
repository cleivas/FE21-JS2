import {Product} from "./product-class.js"


const url = "https://online-store-f1ffa-default-rtdb.europe-west1.firebasedatabase.app/products.json";

async function fetchProducts(){
    const products = await fetch(url)
            .then(response=>response.json())
            .then(data=>{
                const array = []
                for(const d of data){
                    array.push(new Product(d));
                }
                return array;
            });
    return products;
}

export {fetchProducts};