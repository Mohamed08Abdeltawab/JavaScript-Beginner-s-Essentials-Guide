//slice — Non-Destructive Copy
let nums = [10, 20, 30, 40, 50];

console.log(nums.slice(1, 3));   // [20, 30]

console.log(nums.slice(2));   // [30, 40, 50] -> from start 2 to end of array 

console.log(nums.slice());   // copies entire array → [10, 20, 30, 40, 50] 

//splice() — Destructive Editing
//splice(start, deleteCount, ...itemsToAdd)
nums = [10, 20, 30, 40, 50];

let removed = nums.splice(1, 2); 
console.log(removed);   // [20, 30]

console.log(nums);  // [10, 40, 50] -> is like cut


nums = [1, 4, 5];

nums.splice(1, 0,   2, 3);//start from index 1, delete 0 items, adding items 2 and 3
console.log(nums); // [1, 2, 3, 4, 5]

//replacing
 nums = [1, 2, 3, 4];

nums.splice(1, 2, 99, 100);
console.log(nums); // [1, 99, 100, 4]

//concat -- merge arrays 
const a = [1, 2];
const b = [3, 4];

console.log(a.concat(b)); // [1, 2, 3, 4]

console.log([1, 2, 3].includes(2)); // true

console.log(['a', 'b', 'c'].indexOf('b')); // 1


nums = [1, 2, 3];
nums.reverse();

console.log(nums); // [3, 2, 1]


console.log(["Ahmed", "Ali"].join(" - ")); // "Ahmed - Ali"