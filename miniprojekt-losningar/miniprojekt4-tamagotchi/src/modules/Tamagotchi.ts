import { RenderState, State, imgUrls } from "./types";


export class Tamagotchi{
    //class fields som endast behöver användas i klassen
    private hungerScore: number;
    private happinessScore: number;
    private state:State;
    private readonly hungerIntervalId: number;
    private readonly happinessIntervalId: number;

    //HTML element
    private readonly stateElement:HTMLHeadingElement = document.querySelector("#state");
    private readonly hungerElement:HTMLHeadingElement = document.querySelector("#hunger-score");
    private readonly happinessElement:HTMLHeadingElement = document.querySelector("#happiness-score");
    private readonly img:HTMLImageElement = document.querySelector('img');

    constructor(
        public readonly name: string,
        public readonly animalType: string
    ){
        //Scores startar i mitten
        this.hungerScore = 5;
        this.happinessScore = 5;

        //Starta intervallen och spara det returnerade ID:t så att vi kan stänga av den senare
        this.hungerIntervalId = setInterval(this.increaseHunger.bind(this), 1800);
        this.happinessIntervalId = setInterval(this.decreaseHapiness.bind(this), 1000);

        //Tamagotchin startar som levande
        this.state = 'alive';
        this.stateElement.innerText = `${this.name}, the ${this.animalType}, is ALIVE`;
        // sätt bilden till rätt url
        for(const key in imgUrls){
            if(key === this.animalType) {
                this.img.src = imgUrls[key];
                break;
            }
        }
    }

    //Private methods
    private increaseHunger():void{
        this.hungerScore++;
        if(this.hungerScore>10) this.dead();
        else this.render('hunger');
    }
    private decreaseHapiness():void{
        this.happinessScore--;
        if(this.happinessScore<0) this.dead();
        else this.render('happiness');
    }
    private dead():void{
        //Stänger av intervallerna
        clearInterval(this.hungerIntervalId);
        clearInterval(this.happinessIntervalId);
        this.render('dead');
    }
    private render(toRender:RenderState):void{
        let hue:number;
        switch(toRender){
            case 'hunger':
                //Ändra text och färgtext där hunger score visas
                this.hungerElement.innerText = `Hunger: ${this.hungerScore}`;
                hue = 109-(109/10*this.hungerScore);
                this.hungerElement.style.color = `hsl(${hue}, 84%, 32%)`;
                break;
            case 'happiness':
                //Ändra text och färgtext där happniess score visas
                this.happinessElement.innerText = `Happiness: ${this.happinessScore}`;
                hue = 109/10*this.happinessScore;
                this.happinessElement.style.color = `hsl(${hue}, 84%, 32%)`;
                break;
            case 'dead':
                //ändra texten där det står om tamagothin är levande eller död
                //Ändra också opaciteten på tamagotchibilden
                const stateElement:HTMLHeadingElement = document.querySelector("#state");
                stateElement.innerText = `${this.name}, the ${this.animalType}, is DEAD`;
                this.img.style.opacity = '0.2';
                this.state = 'dead';
                break;
        }

        //Ändra färg på texten där det står om tamagotchin är död eller levande
        const stateElement:HTMLHeadingElement = document.querySelector("#state");
        hue = 109/10*( this.happinessScore+(10-this.hungerScore))/2;
        stateElement.style.color = `hsl(${hue}, 84%, 32%)`;
    }

    //Public methods 
    public feed():void{
        if(this.state === 'alive'){
            this.hungerScore--;
            if(this.hungerScore<0) this.hungerScore = 0;
            else this.render('hunger');
        }
    }
    public play():void{
        if(this.state === 'alive'){
            this.happinessScore++;
            if(this.happinessScore>10) this.happinessScore = 10;
            else this.render('happiness');
        }
    }
}
