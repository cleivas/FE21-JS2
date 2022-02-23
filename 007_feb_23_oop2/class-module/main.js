//Vi importerar Animal-klassen och displayAnimal-funktionen
import { Animal } from "./modules/animal-class.js";
import {displayAnimals} from "./modules/display.js";

//Vi skapar en array med tre objekt
//Objekten skapas med Animal-konstruktorn
const animals = [];
animals.push( new Animal('Cat', 'meow'));
animals.push(new Animal('Crocodile', 'grpphh'));
animals.push(new Animal('Toucan', 'KAH KAAHHH'));

//Vi visar åp webbsidan vad djuren säger med hjälp av den importerade funktionen
displayAnimals(animals);
