const numbers = [4,12,7,1,9];
console.log(Math.min(...numbers));
//2
const temps = [18, 22, 30, 15, 27];
console.log(Math.max(...temps));


const prices = [12.5, 8.99, 20, 15];

console.log("Cheapest:", Math.min(...prices));
console.log("Most Expensive:", Math.max(...prices));


let score = 85;
console.log(score >= 60 && score <= 100);

const points = [5, 10, 15];

let diff = Math.max(...points) - Math.min(...points);
console.log(diff);