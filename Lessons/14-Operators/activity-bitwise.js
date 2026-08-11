const READ = 1; // 0001
const WRITE = 2; // 0010
const EXECUTE = 4; // 0100

let user = READ | WRITE;

console.log(user & READ); // true-like
console.log(user & EXECUTE); // 0 (false-like)

user ^= EXECUTE; // toggle EXECUTE
console.log(user); // now includes EXECUTE
