//1
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log("Car " + this.brand + " " + this.model + " started");
  }
}

c1.start();

//2
const c1 = new Car("Toyota", "Corolla", 2020);
const c2 = new Car("BMW", "X5", 2023);

//5

function createCar(brand, model, year) {
  return {
    brand,
    model,
    year,
    start() {
      console.log("Car " + brand + " " + model + " started");
    },
  };
}

const car = createCar("Honda", "Civic", 2019);
car.start();

const fu1 = createCar("brand", "model", "2020");
console.log(fu1);
