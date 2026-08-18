// ==========================================
// Exercise 1: Spread Operator
// ==========================================

const baseNumbers = [10, 20, 30];

// 1. Copy the array
const copiedArray = [...baseNumbers];

// 2. Add extra numbers using spread
const extendedArray = [5, ...baseNumbers, 40, 50];

// 3. Merge it with another array
const secondaryNumbers = [60, 70, 80];
const mergedArray = [...baseNumbers, ...secondaryNumbers];

console.log("Copied Array:", copiedArray);
console.log("Extended Array:", extendedArray);
console.log("Merged Array:", mergedArray);


// ==========================================
// Exercise 2: Rest Operator
// ==========================================

function multiplyAll(...numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((product, current) => product * current, 1);
}

console.log("Multiply (2, 3, 4):", multiplyAll(2, 3, 4)); // 24
console.log("Multiply (5, 10):", multiplyAll(5, 10));       // 50


// ==========================================
// Exercise 3: Ternary Operator
// ==========================================

const speed = 120;
const speedStatus = speed >= 100 ? "Fast" : "Normal";

console.log(`Speed status for ${speed}:`, speedStatus);


// ==========================================
// Exercise 4: Nullish Coalescing Operator (??)
// ==========================================

function checkNickname(someValue) {
  let nickname = someValue ?? "No nickname";
  return nickname;
}

// ?? only falls back on null or undefined; empty string "" is preserved
console.log("With null:", checkNickname(null));             // "No nickname"
console.log("With undefined:", checkNickname(undefined));   // "No nickname"
console.log("With empty string:", checkNickname(""));       // ""
console.log("With 'Mohammed':", checkNickname("Mohammed")); // "Mohammed"


// ==========================================
// Exercise 5: Optional Chaining (?.)optianl chaining ?.
// ==========================================

let car = {
  model: "BMW",
  engine: { hp: 300 }
};

// 1. Horsepower
console.log("Horsepower:", car.engine?.hp); // 300

// 2. Car color (missing property -> safely returns undefined without crashing)
console.log("Car Color:", car.color?.name); // undefined

// 3. Optional method call (car.start is not defined -> safely returns undefined)
console.log("Start Result:", car.start?.()); // undefined