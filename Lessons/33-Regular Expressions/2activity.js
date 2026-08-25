const text = "User: Omar (ID: 42), User: Sara (ID: 17)";
//1
const rex = /ID:\s(\d+)/g;
for (const match of text.matchAll(rex)) {
  console.log(match[1]);
}

//2
const newtext = text.replace(/User:\s\w+/g, "User: REDACTED");
console.log(newtext);