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

class LuxuryCar extends Car {

    private speed: number;
    private price: number;

    constructor(carName: string, engineType: string, speed: number, price: number ) {
        super(carName, engineType);
        this.speed = speed;
        this.price = price;
    }

    set maxSpeed(speed: number) {
        if(speed <= 0){
            this.speed = 0;
        } else  {
        this.speed = speed;
        }
    }

    get maxSpeed(){
        return this.speed;
    }

    set priceCar(price: number) {
        if(price <= 0){
            this.price = 0;
        } else  {
            this.price = price;
        }
    }

    get priceCar(){
        return this.price;
    }

    showCar(){
        return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed} km/h. Approximetly cost of the car is ${this.priceCar}$`;
    } 
} 
       


const ferrari = new SportCar('Ferrari', 'celindr', -100, -1);
const mazda = new LuxuryCar('Mazda', 'automat', -200, -5000);
console.log(ferrari.showCar());
console.log(mazda.showCar());


//Task 2 

// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`. И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя


// class Person {
//     name: string;

//     constructor(name:string){
//         this.name = name;
//     }


// }

// const captainAmerica = new Person('Stiv Rodgers');
// const blackWidow = new Person('Natasha Romanoff');


// function sayName(extra: string){
//     console.log(`My name is ${this.name}. ${extra}`)
// }

// sayName.call(captainAmerica, 'Good morning');
// sayName.call(blackWidow, 'Good eveing');

const person1 = {
    name: 'stiv'
}

const person2 = {
    name: 'alla'
}

function sayName(extra: string): void{
    console.log(`My name is ${this.name}. ${extra}`)
}

sayName.call(person1, 'Good morning!');
sayName.call(person2, 'Good evening');  


//Task 3 

// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль. В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах. К примеру `This car has 3 doors and this is left-hand drive car`

// class Car2 {
//     door: number;

//     constructor(door: number){
//         this.door = door;
//     }

//     howMachDoor(){
//         if(this.door <= 1){
//             return `This is not car`;
//         }
//         else if(this.door === 2){
//             return `This is has ${this.door} and this is left-hand drive car`;
//         }
//         else {
//             return `This is has ${this.door} and this is right-hand drive car`;
//         }
        
//     }
// }

// const car1 = new Car2(4);
// const car2 = new Car2(2);
// console.log(car1.howMachDoor());
// console.log(car2.howMachDoor());

class Car2 {
    door: number;

    constructor(door: number){
        this.door = door;
    }
}

const bmw = new Car2(4);
const opel = new Car2(3);

function howMatchDoor(extra2: string){
console.log(`This is has ${this.door} and is ${extra2} drive car`)
}

howMatchDoor.apply(bmw, ['left-hand']);
howMatchDoor.apply(opel, ['right-hand']); 