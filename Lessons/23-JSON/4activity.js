// ==========================================
// Activity Solutions: JSON.parse()
// ==========================================

// Solution 1: Parsing an Object JSON String
const jsonObject = '{"title":"JavaScript"}';
const obj = JSON.parse(jsonObject);

console.log(obj.title);
// Output: JavaScript


// Solution 2: Parsing an Array JSON String & Accessing an Index
const jsonArray = "[5, 10, 15]";
const arr = JSON.parse(jsonArray);

console.log(arr[1]);
// Output: 10


// Solution 3: Handling Invalid JSON Syntax via try/catch
const badJson = "{x:1}"; // Invalid: keys must be enclosed in double quotes

try {
  JSON.parse(badJson);
} catch {
  console.log("Invalid JSON detected");
}
// Output: Invalid JSON detected


// Solution 4: Round-Trip Serialization & Parsing (Object -> String -> Object)
const data = { a: 1 };

const jsonString = JSON.stringify(data);//store
const parsed = JSON.parse(jsonString);//retrive

console.log(parsed);
// Output: { a: 1 }