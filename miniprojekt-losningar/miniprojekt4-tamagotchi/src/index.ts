import { Tamagotchi } from "./modules/Tamagotchi";

document.querySelector('#start').addEventListener('click', (e)=>{
    e.preventDefault();

    //Hämta namn och typ och skapa en instans av Tamagotchi
    const name = document.querySelector('input').value;
    const type = document.querySelector('select').value;
    const tam = new Tamagotchi(name, type);

    //Göm form och visa tamagotchin
    document.querySelector('form').style.display = 'none';
    document.getElementById('character').style.display = 'block';


    //Sätt eventlisteners på knapparna som spelaren interagerar med tamagotchin med
    document.querySelector('#interact').addEventListener('click', (e)=>{
        const btnClicked = e.target as HTMLElement;
        
        if(btnClicked.innerText === 'Feed') tam.feed();
        else if(btnClicked.innerText === 'Play') tam.play();
    })
})
