const weakMap = new WeakMap();
let user = { name: "Ahmed" };

weakMap.set(user, "data");
user = null;
console.log(weakMap.has(user));//false

// ✅ Object is eligible for garbage collection


//weak set
const ws = new WeakSet();
let session = { token: "abc" };

ws.add(session);
session = null;
console.log(ws.has(session));


const privateData = new WeakMap();
function User(name) {
  this.name = name;
  privateData.set(this, { secret: "123" });
}

const u = new User("Ahmed");
console.log(u.privateData);