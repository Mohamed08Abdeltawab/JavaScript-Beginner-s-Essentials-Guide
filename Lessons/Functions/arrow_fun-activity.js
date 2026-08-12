//1
const greet = name => "Hello " + name;

console.log(greet("mohamed"));

//2
console.log("\n");

const buildUser = () => ({name: "Sara", age: 25});
const user = buildUser();
console.log(`name: ${user.name}, age: ${user.age}`);


//3
console.log("\n");

const arr = [1, 2, 3, 4];

const doubled = arr.map(n => n*3);
console.log(doubled);

//undefiend

//5
console.log("\n");
const add = (a,b) => {
    let sum = a+b;
    return sum;
};

console.log(add(5,4));