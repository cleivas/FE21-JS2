/**
 * 
 2.6 
 Skriv en funktion med en parameter av typ number Array och returnerar ett värde av typ string Array 
Funktionen ska returnera en array med lika många element som argumentet men alla numbers ska ha gjort om till string
 */

function numberToString(arr: number[]):string[]{
    let stringArray: string[] = [];

    for(const el of arr){
        stringArray.push( el.toString());
    }

    return stringArray;
}

console.log( numberToString([3, 5, 2, 4, 6]) );

//2.7
function add(x:number, y:number):number{
    return x+y;
}
function multiply(x:number, y:number):number{
    return x*y;
}

function ho(arr1:number[], arr2:number[], calc: Function):number[]{
    let resultArr: number[] = [];
    for(let i=0; i<arr1.length; i++){
        resultArr.push( calc(arr1[i], arr2[i]));
    }
    return resultArr;
}

console.log( ho([2, 3, 4], [5, 6, 7], add) );
console.log( ho([2, 3, 4], [5, 6, 7], multiply) );
