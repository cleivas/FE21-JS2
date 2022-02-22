//skriv en egen mall för en person
// egenskaper: characterTrait, hairColor, name
//Metoder: intro (använd name), datingIntro(använd alla tre egenskaper)
//Skapar minst två personobjekt utifrån mallen

function Person(characterTrait, hairColor, name){
    this.characterTrait = characterTrait;
    this.hairColor = hairColor;
    this.name = name;
}

Person.prototype.intro = function(){
    console.log(`This is ${this.name}`);
}
Person.prototype.datingIntro = function(){
    console.log(`I am ${this.name}, my hair is ${this.hairColor}, and I am extremly ${this.characterTrait}. Please date me!`);
}

const shayaan = new Person('unknowing', 'svart', 'Shayaan');
shayaan.datingIntro();