//  forEach() — Loop Through Elements
const names = ["ali", "lina", "sara"];
names.forEach(function(name){
    console.log(name);
})

names.forEach( name => {
    console.log(name);
})

// sort() — Sort Values
const nums = [100, 5, 20];

nums.sort((a, b) => a - b);//ascending
console.log(nums);

nums.sort((a, b) => b - a);//descending
console.log(nums);


// some() — Check If At Least One Item Matches
const ages = [12, 17, 19];

const hasAdult = ages.some(a => a >= 18);

console.log(hasAdult);



// every() — Check If ALL Items Match
const scores = [80, 90, 88];

const allHigh = scores.every(s => s > 70);

console.log(allHigh);