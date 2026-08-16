let items = ["apple", "banana", "orange"];

items[1] = "mango";
console.log(items); 
// ["apple", "mango", "orange"]


items[5] = "pear";
console.log(items);
// ["apple", "mango", "orange", empty × 2, "pear"]

let nums = [1, 2, 3];
nums.push(4);

console.log(nums);
// [1, 2, 3, 4]
nums.pop();

console.log(nums);
// [1, 2, 3]


nums.unshift(1);

console.log(nums); 

 nums = [1, 2, 3];
nums.shift();

console.log(nums); // [2, 3]

let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1);

console.log(fruits);
// ["apple", "orange"]

fruits.splice(1, 0, "mango");

console.log(fruits); // ["apple", "mango", "orange"]

fruits.splice(1, 1, "kiwi");

console.log(fruits); // ["apple", "kiwi", "orange"]


let a = [1, 2];
let b = a;

b.push(3);

console.log(a);  // [1, 2, 3]
