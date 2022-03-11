import { displayProducts } from "./modules/display.js";
import { fetchProducts, putProduct } from "./modules/fetchProducts.js";

const databaseUrl = 'https://grit-dc348-default-rtdb.europe-west1.firebasedatabase.app/products.json'

console.log('before fetchProducts');
fetchProducts(databaseUrl)
  .then(
    products =>{
      console.log(products.length);
      for(const product of products){
        displayProducts(product);
      }

      //Lägg till en ny produkt
      const putUrl = `https://grit-dc348-default-rtdb.europe-west1.firebasedatabase.app/products/${products.length}.json`

      const productToAdd = {
        name: 'pilbåge',
        price: 1000000,
        imgUrl: 'https://media.litenleker.se/litenleker/images/leg6743-2017-02-08-153322785/0/0/0/legler-pilbage-bow-set-34-inches.jpg'
      }
      
      putProduct(putUrl, productToAdd);

    }
  )
  console.log('after fetchProducts');