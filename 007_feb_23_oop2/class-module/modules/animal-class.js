//Här definierar vi Animal-klassen och exporterar den

class Animal {
    #type;
    #sound;
    constructor(type, sound) {
        this.#type = type;
        this.#sound = sound;
    }
    makeSound() {
        const str = `The ${this.#type} says '${this.#sound}, ${this.#sound}'`;
        return str;
    }
}

export {Animal};