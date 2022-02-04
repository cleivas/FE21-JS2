//Första promise-uppgiften
const promise = new Promise(function(resolved, rejected){
  const rand = Math.round( Math.random()*10);

  if(rand%2===1){
    resolved(rand);
  }
  else{
    rejected('Numret är jämnt')
  }
});

promise
  .then(number=>{
    const h1 = document.createElement('h1');
    h1.innerText = number;
    document.body.append(h1);
  })
  .catch(error=>console.log(error));

//Andra promise-uppgiften
const timerPromise = new Promise(function(resolved, rejected){
  setTimeout(function(){
    const rand = Math.round( Math.random()*50);
    if(rand<30 && rand>10){
      resolved(rand);
    }
    else{
      rejected('DET BLEV FEL');
    }
  }, 3000);
})

timerPromise
  .then(number=>{
    const h1 = document.createElement('h1');
    h1.innerText = number;
    document.body.append(h1);
  })
  .catch(e=>{
    console.log(e)
    const p = document.createElement('p');
    p.innerText = e;
    document.body.append(p);
  });