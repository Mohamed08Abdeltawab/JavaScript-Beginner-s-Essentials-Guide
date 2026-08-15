//activity
//1
const car = {
  brand: "brand1",
  model: "model",
  year: 2020,
};

console.log(car);

//2
console.log("\n");
console.log("adding new property into car: color: red");
car["color"] = "red";
console.log(car);

//3
console.log("\n");
console.log("creat object with property name with space");
const space_obj = {
  "engine size": "engine text",
};
console.log(space_obj["engine size"]);

//4
console.log("\n");
let prop = "score";
const obj = {
  name: "ali",
  [prop]: 100,
};
console.log(obj.score);

//5
console.log("\n");
const obj5 = {
  nested_obj: {
    color: "blue",
  },
  greet() {
    console.log("hello");
  },
};

console.log(obj5.nested_obj.color);
obj5.greet();
