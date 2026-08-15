//
console.log();
const student = {
  name: "Omar",
  age: 21,
  grade: "A",
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
const update = Object.fromEntries(
  Object.entries(student).map(([key, value]) => [
    key,
    typeof value === "string" ? value.toUpperCase() : value,
  ]),
);

console.log(update);
