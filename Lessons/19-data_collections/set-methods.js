//converting arr to set
const nums = [1,2,2,3,3];
const uniqueSet = new Set(nums);
console.log(uniqueSet);

//set to arr
const arr = [...uniqueSet];
console.log(arr);

const values = ["a", "b", "a", "c", "b"];

const uniqueValues = [...new Set(values)];

console.log(uniqueValues);
