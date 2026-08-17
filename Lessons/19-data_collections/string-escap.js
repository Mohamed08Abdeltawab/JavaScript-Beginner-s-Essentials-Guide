// ==========================================
// 1. String Syntax
// ==========================================

// Single Quotes
const singleQuoteName = 'Ahmed';
console.log("Single Quotes:", singleQuoteName);

// Double Quotes
const greeting = "Hello World";
console.log("Double Quotes:", greeting);

// Template Literals (String Interpolation & Multi-line)
const user = "Sara";
const welcomeMessage = `Welcome ${user}!`;
const multiLineText = `Line 1
Line 2`;

console.log("Template Literal Interpolation:", welcomeMessage);
console.log("Template Literal Multi-line:\n" + multiLineText);


// ==========================================
// 2. Escape Sequences
// ==========================================

// Escaping double quotes inside double-quoted strings
const escapedQuote = "He said: \"JavaScript is awesome\"";
console.log("Escaped Quote:", escapedQuote);

// Newline escape sequence (\n)
const newlineText = "Line 1\nLine 2";
console.log("Newline Escape Sequence:\n" + newlineText);

// Using Template Literals to avoid escaping
const cleanerQuote = `He said: "JavaScript is awesome"`;
console.log("Template Literal without escaping:", cleanerQuote);


// ==========================================
// 3. String Immutability
// ==========================================

let word = "Hi";

// Modifying an index directly fails silently (in non-strict mode)
word[0] = "B";
console.log("After attempting direct index modification:", word); // Still "Hi"

// Correct way: Reassign to a new string
word = "Bi";
console.log("After reassigning value:", word); // "Bi"


// ==========================================
// 4. Essential String Properties & Methods
// ==========================================

// length Property
const text = "JavaScript";
console.log("Length of 'JavaScript':", text.length); // 10

// toUpperCase() & toLowerCase()
console.log("toUpperCase():", "hello".toUpperCase()); // "HELLO"
console.log("toLowerCase():", "WORLD".toLowerCase()); // "world"

// trim() - Removes whitespace from both ends
const rawInput = "   Ahmed   ";
console.log("trim():", rawInput.trim()); // "Ahmed"

// includes() - Checks if substring exists
console.log("includes('Script'):", "JavaScript".includes("Script")); // true

// startsWith() & endsWith()
const fileName = "hello.js";
console.log("startsWith('hello'):", fileName.startsWith("hello")); // true
console.log("endsWith('.js'):", fileName.endsWith(".js"));         // true

// slice(start, end) - Extracts part of a string
const lang = "JavaScript";
console.log("slice(0, 4):", lang.slice(0, 4)); // "Java"

// replace(target, replacement) - Replaces the first match
const msg = "Hello World";
console.log("replace('World', 'JavaScript'):", msg.replace("World", "JavaScript")); // "Hello JavaScript"

// split(separator) - Divides a string into an array of substrings
const csv = "red,green,blue";
const colorsArray = csv.split(",");
console.log("split(','):", colorsArray); // ["red", "green", "blue"]