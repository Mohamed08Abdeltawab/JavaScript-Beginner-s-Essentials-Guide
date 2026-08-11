// Step 1 — Variables
let firstName = "Mohammed";
let lastName = "Abu-Hadhoud";
let age = 30;
let city = "Amman";

// Step 2 — Concatenation
let sentence1 =
  "My name is " +
  firstName +
  " " +
  lastName +
  " and I am " +
  age +
  " years old from " +
  city +
  ".";

console.log("Sentence 1 ->", sentence1);

// Step 3 — Template literal
let sentence2 = `My name is ${firstName} ${lastName} and I am ${age} years old from ${city}.`;

console.log("Sentence 2 ->", sentence2);

// Step 4 — Multi-line template
let info = `
Name: ${firstName}
Age: ${age}
City: ${city}
`;

console.log("User info ->", info);

// Step 5 — HTML snippet
let html = `
<div>
  <h2>Name: ${firstName}</h2>
  <p>Age: ${age}</p>
  <p>City: ${city}</p>
</div>
`;

console.log("HTML snippet ->", html);
