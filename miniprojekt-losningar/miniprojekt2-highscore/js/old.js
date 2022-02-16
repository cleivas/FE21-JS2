//Element med de olika spelmomenten som ska synas eler inte
const gameStart = document.getElementById("game-start");
const gamePlay = document.getElementById("game-play");
const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");

//Alla element som ska ha eventListeners
const playBtn = document.getElementById("play");
const choiceBtns = document.getElementById("choice-btns");
const nextRound = document.getElementById("next-round");

//Spel-variabler
let playerScore = 0;
let computerScore = 0;
let round = 1;
let playerName = "Player 1";

//Start Game btn - endast klickbar när den är synlig
playBtn.addEventListener("click", function (e) {
    //Hämta value i inputen endast om den inte är tom
    const nameInput = document.getElementById("namn");
    if (nameInput.value !== "") {
        playerName = nameInput.value;
    }
    //Visa spelarens namn
    const h1Name = document.getElementById("player-name");
    h1Name.innerText = playerName;

    //Dölj inputen och visa spelet
    gameStart.style.display = "none";
    gamePlay.style.display = "block";
});

//Sten sax påse knappar - endast klickbara när de är synliga
choiceBtns.addEventListener("click", function (e) {
    //Endast om spelaren har klickat på en knapp
    if (e.target.tagName === "BUTTON") {
        //Ta texten på knappen som blev klickad och sätt det på h2-elementet
        playerChoice.innerText = e.target.innerText;

        //generera 'datorns' val
        const choises = ["Sten", "Sax", "Påse"];
        const randomIndex = Math.floor(Math.random() * 3);
        computerChoice.innerText = choises[randomIndex];

        //Kolla vem som vann ronden
        //spelarens val
        if(e.target.innerText === 'Sten'){
            //Datorns val
            if(choises[randomIndex] === 'Sax'){
                playerScore++;
            }
            else if(choises[randomIndex] === 'Påse'){
                computerScore++;
            }
        }
        //Spelarens val
        else if(e.target.innerText === 'Sax'){
            //Datorns val
            if(choises[randomIndex] === 'Sten'){
                computerScore++;
            }
            else if(choises[randomIndex] === 'Påse'){
                playerScore++;
            }
        }
        //Spelarens val (Påse)
        else{
            //Datorns val
            if(choises[randomIndex] === 'Sten'){
                playerScore++;
            }
            else if(choises[randomIndex] === 'Sax'){
                computerScore++;
            }
        }

        //Visa score 
        document.getElementById('computer-score').innerText = `Score: ${computerScore}`;
        document.getElementById('player-score').innerText = `Score: ${playerScore}`;

        //Visa valen och knappen för nästa rond, och dölj spelknapparna
        playerChoice.style.display = "block";
        computerChoice.style.display = "block";
        nextRound.style.display = "block";
        choiceBtns.style.display = "none";

        if(computerScore === 3){
            alert('Du förlorade :(');
            resetGame();
        }
        else if(playerScore === 3){
            alert('Du vann!! :D');
            resetGame();
        }
    }
});

//Nästa rond knappen
nextRound.addEventListener("click", function () {

    round++;
    document.getElementById('rounds').innerText = `Round ${round}`;

    //Dölj valen och knappen för nästa rond, och visa spelknapparna
    playerChoice.style.display = "none";
    computerChoice.style.display = "none";
    nextRound.style.display = "none";
    choiceBtns.style.display = "block";
});



function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;

    //Visa score 0 och Round 1
    document.getElementById('computer-score').innerText = `Score: ${computerScore}`;
    document.getElementById('player-score').innerText = `Score: ${playerScore}`;
    document.getElementById('rounds').innerText = `Round ${round}`;

    gameStart.style.display = "block";
    gamePlay.style.display = "none";
    nextRound.style.display = "none";

    playerChoice.style.display = "none";
    computerChoice.style.display = "none";
    choiceBtns.style.display = "block";
}
