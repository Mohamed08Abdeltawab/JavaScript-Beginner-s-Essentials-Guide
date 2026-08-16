// 1
const nums1 = [2, 4, 6];
nums1.forEach((num) => {
  console.log(num);
});

//2
const values = [40, 5, 90, 12];
console.log(values.sort((a, b) => a - b));

//3
const cities = ["Amman", "Zarqa", "Irbid"];
console.log(cities.sort());

//4
const data = [3, 7, -2, 10];
console.log(data.some((n) => n < 0));

//5
const list = [2, 4, 6, 8];
console.log(list.every((n) => n % 2 === 0));
