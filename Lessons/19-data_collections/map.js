const scores = new Map([
    ["ahmed", 90],
    ["sara", 80],
    ["omar", 70]
]);

console.log(scores);

//setting key value pair    
scores.set("ali", 77);
scores.set(7, "ahmed");
console.log(scores);

//chaining set
const chainMap = new Map()
.set("ali", "c#")
.set("ahmed", "html")
.set("karem", "c++");
console.log(chainMap);

//get value with .get(key)
console.log(chainMap.get("ali"));

// value with .has(key) true or false
console.log(chainMap.has("ali"));

//get size of map don't use length that return undefind use size 
console.log(chainMap.size);

//using with function
function login() {}
const funMap = new Map();
funMap.set(login, "lgoin handler");
console.log(funMap.get(login));