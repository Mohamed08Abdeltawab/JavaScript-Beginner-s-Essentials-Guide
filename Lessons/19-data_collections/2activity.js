//1
const students = new Map([
  ["ali", 90],
  ["sara", 95],
  ["omar", 88],
]);

console.log(students.get("sara"));
console.log(students.has("ali"));

students.forEach((name, score) => {
  console.log(name, score);
});

for(let [key, value] of students){
    console.log(key, "=>", value);
}