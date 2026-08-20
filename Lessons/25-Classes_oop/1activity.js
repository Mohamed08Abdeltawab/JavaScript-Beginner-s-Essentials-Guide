const car = {
  brand: "Toyota",
  model: "Corolla",
  start() {
    console.log("Car started");
  },
};

console.log(car);

//2
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  start() {
    console.log(this.brand + " started");
  }
}

//3
const c1 = new Car("Toyota", "Corolla");
const c2 = new Car("Honda", "Civic");
c1.start();
c2.start();
//4
console.log(c1.start === c2.start);

