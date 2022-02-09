//Inga globala variabler eftersom allting är inbäddat i en anonym funktion
//I den anonyma funktionen är det endast två variablar som är tillgängliga i de andra funktionerna. RandomNum och numOfGuesses
//Alla andra värden skickas in som argument till eller returneras från en funktion 
(function () {
    let randomNum = getRandomNumber();
    let numOfGuesses = 0;
    document.querySelector("button").addEventListener("click", guess);

    function guess(e) {
        e.preventDefault();
        updateNumberOfGuesses();
        const guessedNumber = getGuess();
        const guessResult = compareNumbers(guessedNumber);
        displayGuessResult(guessResult);
    }

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

})();