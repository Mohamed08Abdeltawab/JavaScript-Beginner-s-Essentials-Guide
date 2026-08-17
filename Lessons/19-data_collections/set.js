const ids = new Set([1,2,3,4,5,6]);

ids.add(1);
ids.add(1);
ids.add(2);

console.log(ids);

//delete with .delete()
console.log(ids.delete(2));

//has() return true if foud
console.log(ids.has(3));

//get size
console.log(ids.size);

