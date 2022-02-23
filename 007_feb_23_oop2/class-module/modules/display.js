//Den här funktionen tar hand om att lägga till element i domen
//Den tar emot en array med animalobjekt skapat utifrån Animal-klassen
//De har alltså alla metoden makeSound
//Funktionen exporteras så att vi kan använda den i main.js

function displayAnimals(animals){
    for(const animal of animals){
        const h2 = document.createElement('h2');
        h2.innerText = animal.makeSound();
        document.body.append(h2);
    }
}

export {displayAnimals};