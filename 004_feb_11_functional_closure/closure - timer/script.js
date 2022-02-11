// setTimeout(()=>{
//     alert('tiden är ute')
// }, 2000);

// let counter = 0;

// setInterval(()=>{console.log(++counter)}, 1000);

function timer(){
    let timePassed = 0;
    function timeIsPassing(){
        timePassed++;
    }
    function getTimePassed(){
        return timePassed;
    }
    setInterval(timeIsPassing, 1000);
    return getTimePassed;
}

const myTimer = timer();
//Skriv myTimer() i konsolen för att kolla hur lång tid det gått sen myTimer deklarerades