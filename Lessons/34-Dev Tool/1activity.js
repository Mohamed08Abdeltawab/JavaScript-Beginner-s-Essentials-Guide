const students = [
  { id: 1, name: "Omar", gpa: 3.6 },
  { id: 2, name: "Sara", gpa: 3.9 },
];

console.group("Students Debug");

console.time("Render");
console.table(students);
console.timeEnd("Render");

console.trace("Students logged");

console.groupEnd();