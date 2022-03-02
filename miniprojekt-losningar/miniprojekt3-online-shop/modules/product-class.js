
class Product{
    #name;
    #img;
    #price;
    #stock;
    #id;

    constructor({name, img, price, stock, id}){
        this.#name = name;
        this.#img = img;
        this.#price = price;
        this.#stock = stock;
        this.#id = id;
    }
    removeStock(amount){
        if(amount>this.#stock){
            return 'Too much';
        }
        else{
            this.#stock-=amount;
            return this.#stock;
        }
    }
    getStock = () => this.#stock;
    getName = () => this.#name;
    getImg  = () => this.#img;
    getPrice  = () => this.#price;
    getId  = () => this.#id;
}

export {Product};