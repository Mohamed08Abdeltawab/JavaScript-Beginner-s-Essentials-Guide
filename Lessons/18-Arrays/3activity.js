const people = [
  { name: "Ali", age: 22 },
  { name: "Lina", age: 30 },
  { name: "Ali", age: 28 }
];

//1
const result1 = people.find(p => p.name === "Ali");
console.log(result1);

//2
const result2 = people.filter(p => p.age > 25);
console.log(result2);

//3
console.log();
const scores = [5,10,15];
const result3 = scores.map(p => p * 2);
console.log(result3);

//4
const cart = [20, 15, 30, 10];
//get total of this array
const sum = cart.reduce((sum, n) => sum + n, 0);
console.log(sum);


//5
const users = [
  { name: "Omar", age: 24 },
  { name: "Sara", age: 29 },
  { name: "Hadi", age: 31 }
];

//filter then map
const result5 = users.filter(u => u.age > 25).map(u => u.name);
console.log(result5);