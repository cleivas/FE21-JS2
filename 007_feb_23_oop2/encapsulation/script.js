class Person{
    #name; //Private fields börjar med hash
    #height;
    constructor(name, height){
        this.#name = name;
        this.#height = height;
    }
    getName(){
        return this.#name; //Ge tillgång till värdet i en private field genom att returnera det med en metod
    }
    getHeight(){
        return this.#height;
    }
    setHeight(newHeight){
        this.#height = newHeight; //Vi kan fortfarande ändra värden på en private field genom att göra det med en metod
    }
}

const person = new Person('Forqan', 195);
console.log(person);
console.log(person.height);//Undefined
//console.log(person.#height);//Error
console.log(person.getHeight(), person.getName());
person.setHeight(176);
console.log(person.getHeight(), person.getName());
