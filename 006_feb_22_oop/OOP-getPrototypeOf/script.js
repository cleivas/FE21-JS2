const string = 'Det här är lite text';
console.log(string);

//Här loggar vi prototypen till en string
console.log( Object.getPrototypeOf(string) );


const array = [4, 3, 32, 57, 3];
console.log(array);
//Här loggar vi prototypen till en array
console.log(Object.getPrototypeOf(array));