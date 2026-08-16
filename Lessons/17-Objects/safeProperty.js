const obj = Object.create(null);
obj.name = "Omar";

console.log("name" in obj);
console.log(Object.hasOwn(obj, "name"));
console.log(Object.hasOwn(obj, "toString"));