function sayHello(name){
    const greeting = `Hello, ${name}`;
 
    function say(){
        console.log(greeting);
    };
    return say;
}
 
const sayHelloToEveryone = sayHello('Everyone');
const sayHelloToTheMoon = sayHello('the Moon');
 
sayHelloToEveryone(); //Hello, Everyone
sayHelloToTheMoon(); //Hello, the Moon

console.log(sayHelloToEveryone); //Funktionen say
console.log(sayHelloToTheMoon); //Också funktionen say