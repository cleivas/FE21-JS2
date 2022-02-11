function count(){
    let counter = 0;

    function countUp(){
        return ++counter;
    }
    return countUp;
}


const myCounter = count();
console.log(myCounter);
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

const mySecondCounter = count();
console.log( mySecondCounter() );

console.log(myCounter());


