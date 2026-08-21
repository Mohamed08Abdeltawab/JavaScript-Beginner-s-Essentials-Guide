//before activity
//step 1
function Animal(name){
    this.name = name;
}

//create parent prototype method
Animal.prototype.eat = function(){
    return `${this.name} is eating.`;
}

//step2 child constructor function
function Dog(name, breed){
    //using parent by call is like super
    Animal.call(this, name);
    this.breed = breed;
}


//create prototype chain like extends
Dog.prototype = Object.create(Animal.prototype);

//reassingne constructor for child after replacing prototype
Dog.prototype.constructor = Dog;

//create chlild prototype method 
Dog.prototype.bark = function(){
    return `${this.name}, says Woof!`;
}

//using
const myDog = new Dog("Rex", "German");

console.log(myDog.eat()); 
console.log(myDog.bark());



//activity
function Car(brand) {
  this.brand = brand;
}

Car.prototype.drive = function () {
  console.log(this.brand + " is driving");
};


//2
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(this.brand + " is driving");
  }
}


console.log(Car.prototype.drive);


//4
class ElectricCar extends Car {
  charge() {
    console.log("Charging...");
  }
}

const e = new ElectricCar("Tesla");
e.drive();
e.charge();