const car = {
  brand: "BMW",
  showBrand() {
    console.log(`Car: ${this.brand}`);
  },
};

car.showBrand();

//2
console.log();
const student = {
  name: "Ali",
  grade: 95,
  info() {
    console.log(`${this.name} has a grade of ${this.grade}`);
  },
};
student.info();

//3
console.log();
//undefind the right way is
const user = {
  name: "Nour",
  show() {
    console.log(this.name);
  },
};

const x = user.show.bind(user);
x();

//4
console.log();

const obj = {
  value: 10,
  print() {
    console.log(this.value);
  },
};
obj.print(); // ??
