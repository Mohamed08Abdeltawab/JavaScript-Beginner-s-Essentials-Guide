//1
const fruits = new Set(["apple", "banana", "apple"]);
console.log(fruits);

//2
console.log(fruits.has("banana"));
//3
console.log(fruits.delete("apple"));
console.log(fruits.size);

//4
fruits.add("orange");
fruits.add("mango");
console.log(fruits);