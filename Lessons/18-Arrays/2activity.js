//1
const items = ["a", "b", "c", "d", "e"];
const copy1 = items.slice(1,4);
console.log(copy1);


//2
console.log();
let data = [1, 2, 3, 4, 5];
data.splice(2,1);
console.log(data);

//4
console.log();
const arr1 = [1,2];
const arr2 = [3,4,5];
const conc = arr1.concat(arr2);
console.log(conc);

//3
console.log();
const num3 = [1,2,3];
num3.splice(2,0,100,200);
console.log(num3);

//5
console.log();
const strs = ["JavaScript", "Arrays", "Lesson"];
console.log(strs.join(" - "));