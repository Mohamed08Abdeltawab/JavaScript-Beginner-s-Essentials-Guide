2//1
const arr1 = [10,20,30];
const [x,y] = arr1;
console.log(x);
console.log(y);

//2
const obj2 = {brand: "Toyota", model: "Corolla"}
const {brand, model} = obj2;
console.log(model);

//3
const data = {
  info: { score: 99 }
};
const {info: {score}} = data;
console.log(score);


//4
let a = [1, 2, 3, 4];
const [first, ...rest] = a;
console.log(first);
console.log(rest);


//5
a = [1, 2];
const b = [3, 4];
const mer = [...a, ...b];
console.log(mer);


//6
const user = { name: "Omar", age: 22 };
const copy = {...user}
console.log(copy);