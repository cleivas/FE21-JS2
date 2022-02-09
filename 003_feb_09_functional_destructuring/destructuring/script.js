let array = [1, 2, 3, 4];
 
// const indexOne = array[0];
// const indexTwo = array[1];
// const indexThree = array[2];

//Ordningen är det bestämmer värdet av variabeln
//Det går att ange default värde som endast gäller om det elementet inte existerar
const [ indexTwo, indexOne, indexThree, indexFour = 100] = array;
console.log(indexOne, indexTwo, indexThree, indexFour);
console.log(array);

//Endast sista elementet i en varabel
const [ , , last] = array;
console.log(last);

//Destructuring med objekt
let object = {
    firstName: "Clara",
    age: 35,
    salary: 2000000,
    height: '20 meters',
    weight: '51.85 KG',
}
 
// const name = object.name;
// const age = object.age;
// const weight = object.weight;

//Variabelnamnen måste stämma överens med egenskapsnamnen på objektet
//Går ange ett nytt default, det läggs ej till till objektet
const { age, firstName, weight, tail = false} = object;
console.log(firstName, age, weight, tail);
console.log(object);

//I funktionen är inte hela arrayen tillgänglig utan de enskilda variablerna
function getSample([a, b, c]){
    return b;
}
const sample = getSample(array);
console.log('sample', sample);//2

//objektet är inte tillgängligt i funktionen, endast de enskilda variablerna
function printData({firstName, age}){
    console.log(firstName, age);
    console.log(object);
}
printData(object); //??
