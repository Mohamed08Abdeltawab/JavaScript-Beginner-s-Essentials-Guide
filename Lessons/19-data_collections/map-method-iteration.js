const users = new Map();

users.set(1, "Ahmed");
users.set(2, "Sara");
users.set(3, "Omar");

console.log(users);


console.log(users.get(2));

console.log(users.has(2));

console.log(users.delete(3));

users.clear()
console.log(users.size);

//foreach
const scores = new Map([
  ["Ali", 90],
  ["Lina", 95],
  ["Omar", 88]
]);

scores.forEach((score, name) => {//(value, key)
  console.log(name, "scored", score);
});

//iterator of all keys
for(let key of scores.keys()){
    console.log(key);
}

//iterator of all values
for(let value of scores.values()){
    console.log(value);
}

// entries()
for(let[name, score] of scores.entries()){
    console.log(name, score);
}

for (let [key, value] of scores) {
  console.log(key, "=>", value);
}