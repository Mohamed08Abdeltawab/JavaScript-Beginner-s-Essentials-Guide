let a = "";
let b = 0;
let c = null; //must be null or undefind to replaced
let d = "Hello";

a ||= "Default"; // replaced
b ||= 5; // replaced (0 is falsy)
c ??= "Fallback"; // replaced
d &&= "Updated"; // replaced

console.log(a); // "Default"
console.log(b); // 5
console.log(c); // "Fallback"
console.log(d); // "Updated"
