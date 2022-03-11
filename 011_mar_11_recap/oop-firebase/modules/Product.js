
class Product{
    name;
    imgUrl;
    price;

    constructor(name, imgUrl, price){
        this.name = name;
        this.imgUrl = imgUrl;
        this.price = price;
    }
    logInfo(){
        console.log(this.name, this.price, this.imgUrl);
    }
}


export {Product};