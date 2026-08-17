const settings = new WeakMap();//mapp


//2
const user1 = { name: "Ali" };
const user2 = { name: "Sara" };

settings.set(user1, {theme: "dark"});//key, value
settings.set(user2, {theme: "light"});

console.log(settings.get(user1));
console.log(settings.get(user2));


//3
const activeSessions = new WeakSet();

const session1 = {id: 3};

activeSessions.add(session1);
console.log(activeSessions.has(session1));