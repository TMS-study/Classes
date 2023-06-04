//Task 1 

// Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar. Конструкт родительского класса принимает переменные марку авто и тип двигателя. Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто. Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. Approximetly cost of the car is <carCost>`. (В задании используйте не только public модификатор, где это возможно)

class Car {
   public carName: string;
   public engineType: string;
   
    constructor(carName: string, engineType: string) {
        this.carName = carName;
        this.engineType = engineType;
    }
}

class SportCar extends Car {
   private speed: number;
   private price: number;

    constructor(carName: string, engineType: string, speed: number, price: number ) {
        super(carName, engineType);
        this.speed = speed;
        this.price = price;
    }

    set maxSpeed(speed: number) {
        if(speed < 0){
            this.speed = 0;
        } else  {
        this.speed = speed;
    }
    }

    get maxSpeed(){
        return this.speed;
    }

    set priceCar(price: number) {
        if(price < 0){
            this.price = 0;
        } else  {
            this.price = price;
        }
    }

    get priceCar(){
        return this.price;
    }

    showCar(){
        return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.priceCar}`;
    } 
}

/* class LuxuryCar extends Car {


    constructor(carName: string, engineType: string) {
        super(engineType, carName);
    }

    maxSpeed(value: number) {
        console.log();
    }

    priceCar(value: number) {
        console.log();
    }
} */
       


const ferrari = new SportCar('Ferrari', 'celindr', -100, 2000);
console.log(ferrari.maxSpeed);
console.log(ferrari.priceCar);
console.log(ferrari.carName);
console.log(ferrari.engineType);
console.log(ferrari.showCar);


