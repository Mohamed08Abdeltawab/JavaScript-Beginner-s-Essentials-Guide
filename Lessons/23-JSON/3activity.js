// ==========================================
// Activity Solutions: JSON.stringify
// ==========================================

// Solution 1: Serializing an Object
const book = {
  title: "JavaScript Basics",
  pages: 300,
  available: true
};

const json = JSON.stringify(book);
console.log(json);
// Output: {"title":"JavaScript Basics","pages":300,"available":true}


// Solution 2: Serializing an Array
const nums = [1, 2, 3];
console.log(JSON.stringify(nums));
// Output: [1,2,3]


// Solution 3: Pretty Printing JSON (with 4-space indentation)
const user = {
  name: "Lina",
  skills: ["HTML", "CSS", "JS"]
};

const pretty = JSON.stringify(user, null, 4);
console.log(pretty);
/*
Output:
{
    "name": "Lina",
    "skills": [
        "HTML",
        "CSS",
        "JS"
    ]
}
*/


// Solution 4: Handling Functions during Serialization
const obj = {
  a: 1,
  run() {}
};

console.log(JSON.stringify(obj));
// Output: {"a":1}
// Note: Functions and undefined values are automatically omitted when serializing objects to JSON.