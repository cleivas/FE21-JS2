function count(){
    let counter = 0;

    function countUp(){
        counter++;
    }

    function reset(){
        counter=0;
    }
    function getCount(){
        return counter;
    }
    return {
        countUp: countUp,
        reset: reset,
        getCount: getCount
    };
}

//Skapa två stycken knappar som räknar uppåt när man trycker på dem
//Varje knapps räknare ska göras med closure

const myCounter = count();
const mySecondCounter = count();
