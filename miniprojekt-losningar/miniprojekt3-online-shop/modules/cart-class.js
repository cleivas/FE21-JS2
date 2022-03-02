class Cart {
    #products = [];

    getProducts() {
        return this.#products;
    }
    addProduct(quantity, productToAdd) {
        let addItem = true;
        //Finns inga produkter lägger vi till produktern
        if (this.#products.length > 0) {
            for (const product of this.#products) {
                if (product.product.getName() === productToAdd.getName()) {
                    addItem = false;
                    product.quantity += quantity;
                    break;
                }
            }
        }
        if (addItem) {
            this.#products.push({
                product: productToAdd,
                quantity: quantity
            });
        }
    }

    removeProduct(quantity, productToRemove) {
        for (const product of this.#products) {
            if (product.product.getName() === productToRemove.getName()) {
                product.quantity -= quantity;
                break;
            }
        }
    }
    emptyAll(){
        this.#products = [];
    }
    getTotal(){
        let sum = 0;
        for( const {quantity, product} of this.#products){
            sum+= quantity * product.getPrice();
        }
        return sum;
    }
}

export { Cart };
