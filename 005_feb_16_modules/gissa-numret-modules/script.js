import {updateNumberOfGuesses, getGuess, compareNumbers, displayGuessResult} from './modules/gamefunctions.js';

document.querySelector("button").addEventListener("click", guess);

function guess(e) {
    e.preventDefault();

    updateNumberOfGuesses();
    const guessedNumber = getGuess();
    const guessResult = compareNumbers(guessedNumber);
    displayGuessResult(guessResult);
}