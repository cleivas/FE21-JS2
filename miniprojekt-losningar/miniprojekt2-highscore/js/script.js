(function () {
    const playerScore = newScore(); //Enda variabeln som kan kommas åt i de andra funktionerna. Men eftersom det är en const går den inte att ändra på. 

    document.getElementById("play").addEventListener("click", startGame); //Starta spelet
    document.getElementById("choice-btns").addEventListener("click", playHand); //Välj hand

    //Hämta och visa highscore
    getHighscore()
        .then(highscoreArray => displayHighscore(highscoreArray));

    /*----Gameplay related---*/
    function startGame(e) {
        e.preventDefault();

        //Hämta value i inputen, om den är tom sätter vi ett default namn
        const nameInput = document.getElementById("namn");
        let name = nameInput.value;
        if (name === "") {
            name = "Terminator";
        }
        document.getElementById("player-name").innerText = name;

        //Dölj inputen och visa spelet
        document.getElementById("game-start").style.display = "none";
        document.getElementById("game-play").style.display = "block";
    }

    function playHand(e) {
        //Endast om spelaren har klickat på en knapp
        if (e.target.tagName === "BUTTON") {
            //spara spelarens och datorns val
            const playerHand = e.target.innerText;
            const computerHand = getComputerHand();

            //Visa vad spelare och datorn har valt
            document.getElementById("player-choice").innerText = playerHand;
            document.getElementById("computer-choice").innerText = computerHand;

            //Avgör och visa vinnaren
            const winner = getWinner(playerHand, computerHand);
            if (winner === "player") {
                playerScore.addOne();
                document.getElementById("score").innerText = `Score: ${playerScore.getScore()}`;
            }

            //Show winner returnerar ett promise. När det är resolved kollar vi om datorn vann
            //Om datorn vinner kollar vi om highscore ska uppdateras, vi meddelar att det är gameover och om vi kommit in på highscore, och så resetar vi spelet

            showWinner(winner)
                .then(() => {
                    if (winner === "computer") {
                        alert("Gameover");
                        //hämta highscore igen från firebase 
                        getHighscore()
                            //När det är hämtat kollar vi om nytt score platsar på highscore
                            .then((highscoreArray) => {
                                const checked = checkHighscore(
                                    playerScore.getScore(),
                                    highscoreArray
                                );
                                if (checked !== null) {
                                    alert('New highscore!')
                                    //Om det platsar uppdaterar vi firebase. Eftersom updateHighscore är en async-funktion kan vi fortsätta promisekedjan
                                    return updateHighscore(checked, highscoreArray);
                                }
                            })
                            //Vi hämtar highscore från firebase igen nu när vi vet att den är uppdaterad
                            .then(() => getHighscore())
                            //Sen visar vi den nya highscoren och resetar spelet
                            .then((highscoreArray) => {
                                displayHighscore(highscoreArray);
                                resetGame();
                            });
                    }
                });
        }
    }

    function getComputerHand() {
        //generera 'datorns' val
        const choices = ["👊", "✌️", "✋"];
        const randomIndex = Math.floor(Math.random() * 3);
        // return choices[randomIndex];
        return "👊";
    }

    //Bestäm vem som vann ronden
    function getWinner(playerHand, computerHand) {
        if (playerHand === "👊") {
            if (computerHand === "✌️") {
                return "player";
            } else if (computerHand === "✋") {
                return "computer";
            }
        } else if (playerHand === "✌️") {
            if (computerHand === "👊") {
                return "computer";
            } else if (computerHand === "✋") {
                return "player";
            }
        } else {
            if (computerHand === "👊") {
                return "player";
            } else if (computerHand === "✌️") {
                return "computer";
            }
        }
    }

    function showWinner(winner) {
        //Visa valen och dölj spelknapparna
        document.getElementById("player-choice").style.display = "block";
        document.getElementById("computer-choice").style.display = "block";
        document.getElementById("choice-btns").style.display = "none";
        //Lägger till gul skugga kring vinnaren
        if (winner !== undefined) {
            document.querySelector(`.${winner}`).classList.add("winner");
        }

        //Skapar ett promise som blir resolved när timern är färdig
        const timerPromise = new Promise(function (resolve) {
            setTimeout(() => {
                document.getElementById("player-choice").style.display = "none";
                document.getElementById("computer-choice").style.display = "none";
                document.getElementById("choice-btns").style.display = "block";
                if (winner !== undefined) {
                    document.querySelector(`.${winner}`).classList.remove("winner");
                }
                resolve(true);
            }, 1200);
        });
        //Returnerar promiset
        return timerPromise;
    }

    function resetGame() {
        playerScore.reset();
        document.getElementById("score").innerText = `Score: 0`;
        document.getElementById("game-start").style.display = "block";
        document.getElementById("game-play").style.display = "none";
    }

    //Funktion för score med closure
    function newScore() {
        let score = 0;

        const reset = () => {score = 0};
        const addOne = () => {score++};
        const getScore = () => score;

        return {
            reset: reset,
            addOne: addOne,
            getScore: getScore,
        };
    }


    /*--- Highscore related ---*/

    //Hämta highscore från firebase
    async function getHighscore() {
        const url =
            "https://grit-dc348-default-rtdb.europe-west1.firebasedatabase.app/highscore.json";
        const res = await fetch(url);
        const highscoreArray = await res.json();
        return highscoreArray;
    }

    //Visa highscore på webbsidan
    function displayHighscore(highscoreArray) {
        const lis = document.querySelectorAll("li");
        for (let i = 0; i < lis.length; i++) {
            lis[i].innerText = `${highscoreArray[i].name} - ${highscoreArray[i].score}`;
        }
    }

    function checkHighscore(score, highscoreArray) {
        let place = 5;
        for (let i = 4; i >= 0; i--) {
            if (score <= highscoreArray[i].score) {
                place = i + 1;
                break;
            } else {
                place = 0;
            }
        }
        if (place < 5) {
            return {
                score: score,
                place: place,
                playerName: document.getElementById("player-name").innerText,
            };
        } else return null;
    }

    async function updateHighscore({ score, place, playerName }, highscoreArray) {
        //Add the new score
        highscoreArray.splice(place, 0, {
            name: playerName,
            score: score,
        });
        highscoreArray.pop(); //Remove the last score in the array

        //Uppdatera databasen
        for (let i = place; i < 5; i++) {
            const url = `https://grit-dc348-default-rtdb.europe-west1.firebasedatabase.app/highscore/${i}.json`;

            const res = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(highscoreArray[i]),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
        }
    }
})();
