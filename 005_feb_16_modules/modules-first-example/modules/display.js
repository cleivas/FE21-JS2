function displayH1(amount, hue){

    for(let i=0; i<amount; i++){
        const h1 = document.createElement('h1');
        h1.style.color = `hsl(${hue}, 80%, 60%)`;
        h1.innerText = i+1;
        document.body.append(h1);
    }
    
}

export {displayH1};