// const p5 = new Person("mohamed", 20);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //2
  introduce() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}

//3
const p1 = new Person("mohamed", 20);
const p2 = new Person("ali", 22);

p1.introduce();
p2.introduce();
//5
//Classes are not hoisted to prevent usage before definition and to avoid bugs.
