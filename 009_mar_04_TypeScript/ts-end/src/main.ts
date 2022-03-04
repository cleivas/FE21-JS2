//Variabler
let word:string = 'Det här är lite text';
word = 'okejdå';
let calc:number;
calc = 5+6;
console.log(word, calc);
let firstName = 'Clara';
// firstName = 56;

//Arrayer
let arrayOfNumbers: number[] = [3, 3, 5];

//Funktioner
function multiply(x:number, y:number):number{
    return x*y;
}
console.log( multiply(4, 7) );

function logName(first:string, last:string):void{
    console.log('your full name is: ', first, last);
}
logName('Arbi', 'Rydberg');

//Higher order funktion
function callback(textC:string):void{
    console.log('In callback', textC);
}
function higherOrder(func: Function, textH:string):void{
    console.log('in higherOrder');
    func(textH);
}
higherOrder(callback, 'today is the day!');

//Higher order funktion som tar emot en funktion och en array med number
//Higherorder funktionen ska loopa igenom arrayen
//För varje loop ska callbackfunktionen anropas


//Skriv minst två olika callback funktioner, som tar emot ett number, utför någon beräkning på det numret och returnerar ett number
//Higherorder funktionen ska returnera en array med numbers som innehåller resultat av beräkningarna 

//higherOrder(timesTwo, [1, 2, 3]) 
//resultet ska bli-> [2, 4, 6]

function doCalcOnArray(calc: Function, arr:number[]):number[]{
    let resultArr:number[] = [];
    for(const el of arr){
        resultArr.push(calc(el));
    }
    return resultArr;
}

function timesTwo(x:number):number{
    return x*2;
}
function square(x:number):number{
    return x*x;
}

const arr:number[] = [1, 2, 3, 4, 5];
let timesTwoResult:number[];
let squareResult:number[];

timesTwoResult = doCalcOnArray(timesTwo, arr);
squareResult = doCalcOnArray(square, arr);
console.log(arr, timesTwoResult, squareResult);


//Object
function sayHello(objekt: {first:string, last:string}):void{
    console.log('Hello ', objekt.first, objekt.last);
}
sayHello({first: 'Alaa', last: 'Johansson'});

const obj = {
    first: 'Alaa',
    last: 'Johansson'
}
sayHello(obj);

//Type Aliases
type Name = {
    first: string,
    last: string
    alias?: string //valfritt
}
//Parametern är av typen Name
function sayHi(obj: Name){
    console.log('Hi,', obj.first, obj.last);
}
//Vi skapar ett nytt objekt av typen Name
//Lägger vi till eller tar bort en egenskap får vi ett error
const nameObject:Name = {
    first: 'Clara',
    last: 'The Dragon'
}
const anotherNameObject:Name ={
    first: 'Gustav',
    last: 'The king',
    alias: 'knugen'
}
sayHi(nameObject);
sayHi(anotherNameObject);

//Här har vi lagt till två metoder, metoder är av typen Function
//Frågetecknet efter speak betyder att den egenskapen är valfri
type Animal = {
    type: string,
    legs: number,
    run: Function,
    speak?: Function
}
const dog:Animal = {
    type: 'dog',
    legs: 4,
    run(){
        console.log(`Running on ${this.legs} legs`);
    },
    speak(){
        console.log('Woof Woof');
    }
}
const spider:Animal = {
    type: 'spider',
    legs: 8,
    run(){
        console.log(`Running on ${this.legs} legs`);
    },
}
dog.run();
dog.speak();
spider.run();


/*
skapa en typ som ska heta Book
behöver innehålla egenskaperna
- title
- author
- pages
- metod existsAsEbook
- metod logga info om boken

Skapa några börkcer utifårn mallen
*/

type Book = {
    title: string,
    author: string,
    pages: number,
    ebook: Function,
    logInfo: Function
}

const book1:Book = {
    title: 'Muhammed Ali',
    author: 'Muhammed Ali',
    pages: 244,
    ebook():boolean{
        return true;
    },
    logInfo():void{
        console.log(this.title, this.author, this.pages);
    }
}
console.log( book1.ebook() );
book1.logInfo();

//sålänge ebook är en funktion ch finns med i objektet spelar det ingen roll vad den returnerar.
const book2:Book = {
    title: 'Cars',
    author: 'Forqan',
    pages: 23,
    ebook():string{ 
        return 'finns som ebook';
    },
    logInfo():void{
        console.log(this.title, this.author, this.pages);
    }
}

console.log( book2.ebook() );
book2.logInfo();