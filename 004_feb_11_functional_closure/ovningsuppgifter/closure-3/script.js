
function newTimer() {
    let secondsPassed = 0;

    const addTime = ()=>{secondsPassed++};
    setInterval(addTime, 1000);

    const getTime = ()=>secondsPassed;
    const reset = ()=>{secondsPassed=0;};

    return {
        getTime: getTime,
        reset: reset
    }
}

const timer1 = newTimer();
const timer2 = newTimer();

//timer1.getTime() -> visar hur många sekunder som har paserat
//timer1.reset() -> startar om timern
