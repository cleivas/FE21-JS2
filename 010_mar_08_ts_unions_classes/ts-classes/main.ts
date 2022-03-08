class Car {
    //Ska varken kunna modifieras eller ses
    private readonly doorLockCode: number;
 
    constructor(
        public readonly make: string, 
        public readonly model: string, 
        public readonly year: number){

        //Koden genereras av en privat metod
        this.doorLockCode = this.generateDoorLockCode();
    }
    private generateDoorLockCode():number {
        return Math.ceil(Math.random() * 1000000);
    }
    //Publik metod som använder den privata koden
    public openAllDoors():void {
        console.log('Opening with', this.doorLockCode);
    }
}
 
const car = new Car('Toyota', 'Corolla', 1999);
console.log(car.make, car.model, car.year);
car.openAllDoors();
