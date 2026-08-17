const prices = new Map([
  ["apple", 2],
  ["banana", 1],
  ["orange", 3],
]);

console.log(prices);


//2
console.log(prices.has("apple"));

//3
console.log(prices.size);


//4
prices.set(4,"number four");
console.log(prices.get(4));

//5
const user = {id: 1};
prices.set(user, "username");
console.log(prices.get(user));