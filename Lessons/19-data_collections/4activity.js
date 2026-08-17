// Task 1: Create a Set named roles and add items
const roles = new Set();
roles.add("admin");
roles.add("editor");
roles.add("admin");

console.log("Task 1 - Roles Set:", roles);
// Output: Set(2) { 'admin', 'editor' }


// Task 2: Check if "editor" exists in the Set
const hasEditor = roles.has("editor");

console.log("Task 2 - Has editor:", hasEditor);
// Output: true


// Task 3: Delete "admin" from the Set and print the result
roles.delete("admin");

console.log("Task 3 - After deleting admin:", roles);
// Output: Set(1) { 'editor' }


// Task 4: Clear the Set and print its size
roles.clear();

console.log("Task 4 - Set size after clear:", roles.size);
// Output: 0


// Task 5: Remove duplicates using a Set and store the result in an array
const scores = [10, 20, 20, 30, 30, 40];
const uniqueScores = [...new Set(scores)];

console.log("Task 5 - Unique scores array:", uniqueScores);
// Output: [ 10, 20, 30, 40 ]