export const displayRandom = function(obj){
    const hue = Math.round( Math.random()*360 );
    const size = Math.round(Math.random()*32)+12;
    const p = document.createElement('p');
    p.style.fontSize = `${size}px`;
    p.style.color = `hsl(${hue}, 80%, 70%)`;
    p.innerText = obj.name;
    document.body.append(p);
}

