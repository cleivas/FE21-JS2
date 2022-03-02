import { fetchProducts } from "./modules/fetch-products.js";
import {Cart} from "./modules/cart-class.js"
import {displayProducts, displayCartProducts, displayTotal} from "./modules/display.js";

const cart = new Cart();

let productArray = [];
fetchProducts()
    .then(products=>{
        displayProducts(products, cart);

    }); 


document.querySelector('#cart button').addEventListener('click', checkoutEvent);

//Callback functions for events
function checkoutEvent(e){
    document.querySelector('#products').style.display = 'none';
    document.querySelector('#cart button').style.display = 'none';
    document.querySelector('#cart-products').style.display = 'block';
    
    displayCartProducts(cart);
    displayTotal(cart);
}