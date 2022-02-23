class Person{
    #name;
    #height;
    constructor(name, height){
        this.#name = name;
        this.#height = height;
    }
    getName(){
        return this.#name;
    }
    getHeight(){
        return this.#height;
    }
    setHeight(newHeight){
        this.#height = newHeight;
    }
}

class Student extends Person{
    #school;
    constructor(name, height, school){
        super(name, height);
        this.#school = school;
    }
    getSchool(){
        return this.#school;
    }
    intro(){
        //Vill vi komma åt data i Person-klassen kan vi anropa metoder i den med hjälp av keyword super
        console.log(`Hi my name is ${super.getName()}, and I study at ${this.#school}`)
    }
}
const person = new Person('Natha', 168);
console.log(person);

const student = new Student('Felix', 182, 'Grit Academy');
console.log(student);
student.intro();
console.log( student.getName() );