//1
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(this.brand + " is driving at " + this.speed + " km/h");
  }

  accelerate(amount) {
    this.speed += amount;
  }
}



//2
const car1 = new Car("Toyota", 60);
const car2 = new Car("BMW", 80);

car1.drive();
car2.drive();


//3
car1.accelerate(20);
car1.drive();

//4
// const driveFn = car1.drive;
// driveFn(); // ❌ this is undefined


//5
const fixedDrive = car1.drive.bind(car1);
fixedDrive();
