//1
class Vehicle {
  move() {
    return "Vehicle is moving";
  }
}

//2
class Car extends Vehicle {
  drive() {
    return "drive Car";
  }
}

//3
class Bike extends Vehicle {
  move() {
    return "bike is moving";
  }
}


const car = new Car();
const bike = new Bike();
console.log(car.drive());
console.log(bike.move());

console.log(bike instanceof Vehicle);