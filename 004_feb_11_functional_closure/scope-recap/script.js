//Bortkommenterade consol.log ger error pga scopet

//Global scope
const global = 'Den här är i det globala scopet';
console.log(global);


(function myFunction(){
    //Function scope
    const functionScope = 'Det här i funktionen';

    console.log(global);
    console.log(functionScope);
    // console.log(block);
})()

// console.log(functionScope);

if(true){
    //block scope
    const block = 'i block scopet';
    console.log(global);
    console.log(block);
    // console.log(functionScope);
}
// console.log(block);
console.log('-----------------');



function count(){
    let counter = 0;
    
    function countUp(){
        counter++;
    }
    countUp();
    countUp();
    countUp();
    countUp();
    console.log(counter);
}
count();
count();
count();
count();