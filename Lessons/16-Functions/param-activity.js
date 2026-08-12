//1
function Welcom(name = "Ali"){
    return `Welcome, <${name}>`
}

console.log(Welcom("mohamed"));

//2//undefind
console.log("\n");


//3
console.log("\n");
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();



//4
console.log("\n");
function finalPrice(price, discount = price * 0.1) {
    console.log(price - discount);
}

finalPrice(200);

//5
console.log("\n");
function getDefaultName() {
  return "UserX";
}

function login(name = getDefaultName()) {
  console.log("Logged in as " + name);
}

login();