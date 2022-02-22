//Med class
class Car{

    //Konstruktorn som anropas när vi skapar ett nytt objekt utifrån mallen
    constructor(model, color, engine, hp){
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.hp = hp;
    }

    drive(){ 
        console.log(`I'm driving with ${this.hp} horse power.`)
    }
    getColor(){
        return this.color;
    }
}

//Vi kan fortfarande lägga till egenskaper till Car prototype på samma sätt som innan
Car.prototype.honk = function(){
    console.log(`Honk, hoooonk!`)
}

const tesla = new Car('Tesla', 'hotpink', 'electric', 250);
const saab = new Car('saab', 'black', 'v12', 550);
tesla.drive();
saab.drive();

console.log(tesla);
console.log(Car);


//Skriv en växtmall
//Egenskaper: typ, färg, blommar (boolean)
//Metoder: presentation, uttryck behov (behöver du vattnas eller sol) 
//Skapa minst två objekt utifrån mallen

class Plant{
    water = 'little';
    constructor(type, color, blooming){
        this.type = type;
        this.color = color;
        this.blooming = blooming;
    }

    presentation(){
        console.log(`Hi, I'm ${this.type}!`);
        if(this.blooming){
            console.log('I need water!')
        }
        else{
            console.log('I need sun!')
        }
        console.log(this.water);
    }
}

const zenia = new Plant('flower', 'purple', true);
const ivy = new Plant('ivy', 'green', false);
zenia.presentation();
ivy.presentation();
