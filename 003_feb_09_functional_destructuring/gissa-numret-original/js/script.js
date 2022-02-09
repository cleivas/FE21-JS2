let randomNum = Math.round( Math.random() * 100 );
let numOfGuesses = 0;

const knapp = document.querySelector('button');

knapp.addEventListener('click', function(e){
    e.preventDefault();
    //Räknar sammanlagda gissningar och visar det i p-elementet med id:t guesses
    numOfGuesses++;
    document.getElementById('guesses').innerText = `Antal gissningar: ${numOfGuesses}`;
    
    //vi hämtar DOM-elementet input
    const input = document.querySelector('input');
    const guess = input.value;
    input.value = '';

    //Om gissningen är samma som genererade numret
    if(guess == randomNum){
        alert(`Du vann!! På ${numOfGuesses} försök.`);
        //Reseta spelet
        numOfGuesses = 0;
        document.getElementById('guesses').innerText = `Antal gissningar:`;
        randomNum = Math.round( Math.random() * 100 );
    }
    else{
        if(guess > randomNum){
            document.getElementById('high-low').innerText = 'Gissa lägre';
        }
        else{
            document.getElementById('high-low').innerText = 'Gissa högre';
        }
    }
    
});