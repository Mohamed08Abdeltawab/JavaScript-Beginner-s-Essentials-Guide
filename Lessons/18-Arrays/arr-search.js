//find() — Get the First Match
let users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Ahmed" }
];

let result = users.find(u => u.name === "Ahmed");

console.log(result);

//findIndex() — Get the Index of the First Match
users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Ahmed" }
];

let index = users.findIndex(u => u.name === "Ahmed");

console.log(index);


// findLast() — Get the LAST Match
users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Ahmed" }
];

result = users.findLast(u => u.name === "Ahmed");

console.log(result);
//findlastIndex is same 


// filter() — Get ALL Matches
let numbers = [10, 25, 40, 55, 60];

let above40 = numbers.filter(n => n > 40);

console.log(above40);


//map() — Transform Each Element
const prices = [10, 20, 30];

const afterTax = prices.map(p => p * 1.15);//reutrn new array base on condition

console.log(afterTax);

// reduce() — Reduce to One Value
let nums = [1, 2, 3, 4];

//reduce takes => 
// total is accumlator starting with 0 that you give in  and this is the return value
//updateing accumlator with condition that we need 
//n is current value secuntial
let sum = nums.reduce((total, n) => total + n, 0);

console.log(sum);




 nums = [5, 12, 7, 20, 3];

let max = nums.reduce((highest, n) => 
  n > highest ? n : highest
, nums[0]);

console.log(max);




const cart = [
  { item: "Book", price: 10 },
  { item: "Pen", price: 2 },
  { item: "Bag", price: 25 }
];

//get total price
let totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);


const letters = ["a", "b", "a", "c", "b", "a"];

const freq = letters.reduce((table, letter) => {
  table[letter] = (table[letter] || 0) + 1;
  return table;
}, {});

console.log(freq);




const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((arr, sub) => arr.concat(sub), []);

console.log(flat);



const entries = [
  ["name", "Mohammed"],
  ["age", 30],
  ["country", "Jordan"]
];

const obj = entries.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

console.log(obj);




const words = ["JavaScript", "is", "awesome"];

const sentence = words.reduce((s, w) => s + " " + w, "medo: ");

console.log(sentence);



const nums7 = [1, 2, 3];

const result7 = nums7.reduce((acc, n) => {
  acc.push(n * 2);
  return acc;
}, []);

console.log(result7);