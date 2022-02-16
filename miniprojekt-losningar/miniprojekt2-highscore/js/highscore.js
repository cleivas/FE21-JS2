//getHighscore är en async-funktion så det returnerar ett promise som blir resolved när highscore arrayen har hämtats från firebase

const newScore = 12;
const playerName = 'nTEST';
getHighscore()
    .then(highscoreArray => displayHighscore(highscoreArray));

//hämta highscore från firebase
getHighscore()
    .then(highscoreArray => {
        //Jämför nytt score med highscore
        const checked = checkHighscore(newScore, highscoreArray);
        
        //Om checked inte är null kommer nytt score in på highscore
        if (checked !== null) {
            //Uppdatera firebase med det nya
            updateHighscore(checked, highscoreArray)
                .then( () => {
                    //Hämta uppdaterade highscore från firebase och visa det igen
                    getHighscore()
                        .then(highscoreArray => displayHighscore(highscoreArray));
                })

        }
    });


/*--- Highscore related ---*/
async function getHighscore() {
    const url = 'https://grit-dc348-default-rtdb.europe-west1.firebasedatabase.app/highscore.json';
    const res = await fetch(url);
    highscoreArray = await res.json();
    return highscoreArray;
}

function displayHighscore(highscoreArray) {
    const lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].innerText = `${highscoreArray[i].name} - ${highscoreArray[i].score}`
    }
}
// Borde returnera ett objekt: plats och poäng
function checkHighscore(score, highscoreArray) {
    let place = 5;
    for (let i = 4; i >= 0; i--) {
        if (score <= highscoreArray[i].score) {
            place = i + 1;
            break;
        }
        else {
            place = 0;
        }
    }
    if (place < 5) {
        return {
            score: score,
            place: place,
            playerName: playerName
        }
    }
    else return null;
}


//Borde hämta highscore igen från firebase 
async function updateHighscore({ score, place, playerName }, highscoreArray) {
    console.log('highscorearray: ', highscoreArray)
    //Add the new score
    highscoreArray.splice(place, 0, {
        name: playerName,
        score: score
    });
    highscoreArray.pop() //Remove the last score in the array

    //Uppdatera databasen 
    for (let i = place; i < 5; i++) {
        const url = `https://grit-dc348-default-rtdb.europe-west1.firebasedatabase.app/highscore/${i}.json`

        const res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(highscoreArray[i]),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    }

}