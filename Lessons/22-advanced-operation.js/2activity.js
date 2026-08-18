  // ===============================
// Exercise 1 — delete
// ===============================
let car = { model: "BMW", year: 2020, color: "black" };

delete car.color;

console.log(car);          
// { model: "BMW", year: 2020 }

console.log("color" in car); 
// false



// ===============================
// Exercise 2 — in operator
// ===============================
let user = { name: "Sara", age: undefined };

console.log("age" in user);  // true (property exists)
console.log(user.age);       // undefined (value is undefined)



// ===============================
// Exercise 3 — void
// ===============================
let result = void (10 * 10);

console.log(result); 
// undefined (void always returns undefined)



// ===============================
// Exercise 4 — comma operator
// ===============================
let x = (5, 10, 20);

console.log(x);
// 20 (last expression wins)



// ===============================
// Exercise 5 — double counter loop
// ===============================
for (let i = 0, j = 5; i < j; i++, j--) {
  console.log(i, j);
}