//Det här promiset blir fullfilled när randNum är mer än 50, annars blir det rejected
const randomPromise = new Promise(function (resolveFunction, rejectFunction) {
  const randNum = Math.round(Math.random() * 100);

  if (randNum > 50) {
    resolveFunction(randNum);
  } else {
    rejectFunction("Numret är mindre än 50");
  }
});

//Det här proiset är likadant, med skillnaden att där är en timer på det så det tar 2000 ms (2 sek) innan det resolved eller rejected
const timerPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const randNum = Math.round(Math.random() * 100);

    if (randNum > 50) {
      resolve(randNum);
    } else {
      reject("Numret är mindre än 50");
    }
  }, 2000);
});

//Value av varje promise loggas om det blir resolved, omd et är rejected loggas errormeddelandet
timerPromise.then((val) => console.log('Timer', val)).catch((e) => console.log('Timer', e));
randomPromise.then((val) => console.log('random', val)).catch((e) => console.log('random', e));
