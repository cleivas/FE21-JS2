let randomNum = getRandomNumber();
let numOfGuesses = 0;

function updateNumberOfGuesses() {
    numOfGuesses++;
    document.getElementById("guesses").innerText = `Antal gissningar: ${numOfGuesses}`;
}

function getGuess() {
    const input = document.querySelector("input");
    const guess = input.value;
    input.value = "";
    return guess;
}

function compareNumbers(number) {
    let result = "correct";
    if (number > randomNum) {
        result = "lower";
    } else if (number < randomNum) {
        result = "higher";
    }
    return result;
}

function displayGuessResult(result) {
    //Hade varit bättre att använda ett switch-statement
    if (result === 'correct') {
        alert(`Du vann!! På ${numOfGuesses} försök.`);
        resetGame();
    }
    else if (result === 'higher') {
        document.getElementById("high-low").innerText = "Gissa högre";
    }
    else if (result === 'lower') {
        document.getElementById("high-low").innerText = "Gissa lägre";
    }
}

function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

function resetGame() {
    numOfGuesses = 0;
    randomNum = getRandomNumber();
    document.getElementById("high-low").innerText = "";
    document.getElementById("guesses").innerText = `Antal gissningar:`;
}

export {updateNumberOfGuesses, getGuess, compareNumbers, displayGuessResult};