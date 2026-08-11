//for loop
console.log("\nfor");
let names = ["Sara", "Ali", "Omar"];

for (let i = 0; i < names.length; i++) {
  console.log("names[" + i + "] =", names[i]);
}

//for in- using in looping on object keys
console.log("\nfor in");
const user = {
  name: "Ahmed",
  age: 30,
  country: "Jordan",
};

for (let key in user) {
  console.log(key, "=>", user[key]);
}

//for of- using in looping on array or string, maps, sets
console.log("\nfor of");
let nums = [10, 20, 30];

for (let value of nums) {
  console.log(value);
}

for (let char of "Hello") {
  console.log(char);
}

let scores = new Map();
scores.set("Ali", 90);
scores.set("Sara", 85);

for (let [name, score] of scores) {
  console.log(name, score);
}

let ids = new Set([1, 2, 3]);

for (let id of ids) {
  console.log(id);
}
