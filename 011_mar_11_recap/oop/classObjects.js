/*vi har ett hus med tre fönster. 
Alla fönster har:
- höjd
- bredd

Alla fönster kan:
- öppnas
- stängas
- informera om dess mått
*/

class Window{
    //class fields. Är som variabler men tillskillnad från variabler kan man inte ange let eller const
    //När en instans av ett objekt skapas kommer de vara egenskaper av det objektet
    width;
    height;
    id;
    constructor(coonstructorWidth, constructorHeight, constructorId){
        this.width = coonstructorWidth;
        this.height = constructorHeight;
        this.id = constructorId;
    }
    getMeasurements(){
        console.log(`Width: ${this.width}, Height: ${this.height}`)
    }
    open(){
        console.log('Window opened', this); //this är objektet som metoden anropas på. Alltså instansen om skapats av klassen
    }
    close(){
        console.log('Window closed');
    }
}

const window1 = new Window(75, 150, 0);
window1.getMeasurements();
window1.open();
window1.close();

const window2 = new Window(100, 180, 1);
window2.getMeasurements();
window2.open();
window2.close();

const window3 = new Window(100, 180, 2);
window3.getMeasurements();
window3.open();
window3.close();