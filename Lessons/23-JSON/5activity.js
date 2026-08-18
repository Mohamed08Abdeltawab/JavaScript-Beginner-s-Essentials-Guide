// ==========================================
// Activity Solutions: JSON & Storage Practical Patterns
// ==========================================

// Solution 1: Serializing to and Deserializing from localStorage
const user = { name: "Omar", role: "Admin" };
localStorage.setItem("user", JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem("user"));
console.log(saved.role);
// Output: Admin


// Solution 2: Parsing JSON String and Accessing Properties
const json = '{"id":2,"name":"Lina"}';
const data = JSON.parse(json);

console.log(data.name);
// Output: Lina


// Solution 3: Handling undefined vs null in JSON Serialization
const obj = { a: undefined, b: null };
console.log(JSON.stringify(obj));
// Output: {"b":null}
// Note: undefined values are completely omitted from JSON, while null is preserved.


// Solution 4: Re-hydrating Date Objects after Parsing
const payload = { date: new Date() };
const payloadJson = JSON.stringify(payload);

// JSON converts Date to an ISO string; re-instantiate it manually
const parsedPayload = JSON.parse(payloadJson);
parsedPayload.date = new Date(parsedPayload.date);

console.log(parsedPayload.date instanceof Date);
// Output: true


// Solution 5: Safe Error Handling with Invalid JSON Syntax
const bad = "{x:1}";

try {
  JSON.parse(bad);
} catch {
  console.log("Invalid JSON");
}
// Output: Invalid JSON