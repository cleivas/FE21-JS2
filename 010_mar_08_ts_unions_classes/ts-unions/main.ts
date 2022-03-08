import {Coin, getUserDataResult} from "./Types"

//Arrayer med olika datatyper
let arr: [string, number];
arr = ['Ayub', 22];
arr.push('Ali'); 
console.log(arr);

//Unions
let alt: 'ena'|'andra'|number;
alt = 'ena';
alt = 78978;

//Skriv en funktion som singlar slant
//Och endast får returnera krona eller klave

function singlaSlant():Coin{
    if(Math.random()<0.5) return 'krona';
    else return 'klave';
}

// console.log( singlaSlant() );

function getUserData():getUserDataResult {

    if(singlaSlant() === 'klave') {
        return ["error", Error('user not found')];
    }
    else{
        return ["success", {userName: 'bigF', id: 2134354}];
    }
}

const userResult = getUserData();
if(userResult[0]=== 'error' ){
    console.log( userResult[1] );
}
else{
    console.log( userResult[1].userName );
}