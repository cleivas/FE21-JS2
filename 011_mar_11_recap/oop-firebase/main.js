import {Product} from "./modules/Product.js";
import { displayProducts } from "./modules/display.js";

const databaseUrl = 'https://grit-dc348-default-rtdb.europe-west1.firebasedatabase.app/products.json'

fetch(databaseUrl).then(
    response=> response.json()
  ).then(
    data => {
      console.log(data);

      const products = [];
      for(const el of data){
        const {name, imgUrl, price} = el;
        products.push( new Product(name, imgUrl, price ) );
      }

      console.log(products);
      for(const p of products){
        p.logInfo();
        displayProducts(p);
      }
    }
  )

