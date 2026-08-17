// ==========================================
// 1. Number Syntax in JavaScript
// ==========================================

// Integers
const age = 25;
const score = -10;
console.log("Integers:", age, score);

// Floating-point Numbers (Decimals)
const price = 19.99;
const temperature = -3.5;
console.log("Floats:", price, temperature);

// Scientific Notation
const bigNumber = 1e6;   // 1,000,000
const smallNumber = 5e-3; // 0.005
console.log("Scientific Notation:", bigNumber, smallNumber);

// Floating-point Precision Limitation
const floatSum = 0.1 + 0.2;
console.log("0.1 + 0.2 =", floatSum); // 0.30000000000000004


// ==========================================
// 2. parseInt() - Convert to Integer
// ==========================================

// Basic Parsing
console.log("parseInt('42'):", parseInt("42"));     // 42
console.log("parseInt('42px'):", parseInt("42px")); // 42 (stops at non-numeric characters)
console.log("parseInt('3.14'):", parseInt("3.14")); // 3 (truncates decimals)

// Parsing with Radix (Base)
const binaryValue = "101";
console.log("parseInt('101', 2):", parseInt(binaryValue, 2)); // 5 (Binary to Decimal)


// ==========================================
// 3. parseFloat() - Convert to Decimal Number
// ==========================================

console.log("parseFloat('3.14'):", parseFloat("3.14"));     // 3.14
console.log("parseFloat('99.5kg'):", parseFloat("99.5kg")); // 99.5 (stops at 'k')


// ==========================================
// 4. NaN (Not a Number)
// ==========================================

// Operations producing NaN
console.log("Number('abc'):", Number("abc")); // NaN
console.log("0 / 0:", 0 / 0);                 // NaN

// NaN Self-Equality Check
console.log("NaN === NaN:", NaN === NaN); // false


// ==========================================
// 5. isNaN() vs Number.isNaN()
// ==========================================

// isNaN() (Global - performs type coercion before checking)
console.log("isNaN('abc'):", isNaN("abc")); // true (coerces 'abc' to NaN)
console.log("isNaN('123'):", isNaN("123")); // false (coerces '123' to 123)

// Number.isNaN() (Strict - only true if value is currently NaN)
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false ('abc' is a string)
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));     // true
console.log("Number.isNaN(0 / 0):", Number.isNaN(0 / 0)); // true


// ==========================================
// 6. Practical Conversion Summary
// ==========================================

const userInput1 = "150.75px";
const userInput2 = "250";

// Strict full conversion
console.log("Number(userInput2):", Number(userInput2));       // 250
console.log("Number(userInput1):", Number(userInput1));       // NaN (fails on 'px')

// Extraction conversions
console.log("parseInt(userInput1):", parseInt(userInput1));     // 150
console.log("parseFloat(userInput1):", parseFloat(userInput1)); // 150.75


// Binary (Base 2): 101 = (1 * 2^2) + (0 * 2^1) + (1 * 2^0) = 4 + 0 + 1 = 5
console.log(parseInt("101", 2)); // 5

// Hexadecimal (Base 16): FF = (15 * 16^1) + (15 * 16^0) = 240 + 15 = 255
console.log(parseInt("FF", 16)); // 255

// Decimal (Base 10)
console.log(parseInt("101", 10)); // 101