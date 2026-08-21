//1,2,3
class Vehicle {
  move() {
    return "The vehicle moves";
  }
}

class Car extends Vehicle {
  move() {
    return "The car drives";
  }
}

class Plane extends Vehicle {
  move() {
    return super.move() + " and flies in the sky";
  }
}

//4
const vehicles = [new Car(), new Plane()];

vehicles.forEach(v => {
  console.log(v.move());
});
