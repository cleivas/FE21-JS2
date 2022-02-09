let object = {
    firstName: "Clara",
    age: 35,
    salary: 2000000,
    height: '20 meters',
    weight: '51.85 KG',
}
//De här objekten pekar på samma ställe i minnet, ändrar du ett ändras det andra också
const newObject = object;

newObject.firstName = 'Forqan';
console.log(object);

//Klonar objektet, alltså det finns nu två ställen i minnet
objectClone = {...object};
objectClone.firstName = 'Cornelia';
console.log('klonat');
console.log(object, objectClone); 

//Lägg ihop objekt
const object1 = {
    name: "Clara",
    age: 35,
}
const object2 = {
    salary: 2000000,
    height: '20 meters',
    weight: '51.85 KG'
}
const object3 = {...object1, ...object2};
console.log('objekt 3', object3); //??

//Sprider ut arr1s element i mitten på arr2, varje element blir ett nytt element
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, ...arr1, 8, 9, 10];
console.log(arr2); //??

//JÄmför 
arr3 = [arr1, 3, 4, arr2];
console.log(arr3);