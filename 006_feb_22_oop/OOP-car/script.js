//Konstruktorn - våran mall
function Car(model, color, engine, hp){
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.hp = hp;
}

//Car (och precis alla andra objekt) har en egenskap som heter prototype, den är ett objekt som innehåller alla metoder och egenskaper som objekt som skapas utifrån våran mall ska kunna ha tillgång till
//Här lägger vi till tre metoder till prototype
Car.prototype.drive = function(){
    console.log(`${this.model} is driving with ${this.hp} horse power.`);
}
Car.prototype.honk = function(){
    console.log('honk, hooooonk');
}
Car.prototype.getColor = function(){
    return this.color;
}

//Vi skapar två objekt med hjälp av Car-konstruktiorn
const bmw = new Car('bmw', 'red', 'v8', 480);
bmw.drive();
bmw.honk();
console.log( bmw.getColor());

const volvo = new Car('volvo', 'hotpink', 'v5', 270);
volvo.drive();
volvo.honk();
console.log( volvo.getColor() );

console.log('----------');
console.log(bmw);
console.log(volvo);
console.log(Car);

bmw.year = 1987; //egenskapen läggs endast till till bmw
console.log(bmw);
console.log(volvo);

Car.seats = 5; //Egenskapen läggs endast till till objektet Car 
Car.prototype.windows = 'electric'; //Egenskapen läggs till till prototype vilket betyder att alla objekt som skapas med konstruktorn kommer ha tillgång till denna egenskap


bmw.windows = 'manual'; //Läggs till till bmw
console.log(bmw.windows); //Finns i bmw-objektet
console.log(volvo.windows); //Finns i Car prototype objektet



