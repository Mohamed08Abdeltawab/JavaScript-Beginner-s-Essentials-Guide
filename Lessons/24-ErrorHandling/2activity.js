//1
function divide(a, b){
    if(b === 0)
        throw Error("can't divide on 0.");
    return a/b;
}

console.log(divide(4,2));


//2
const registerUser = (username) => {
    if(!username)
        throw Error("username is empty or missing");
    return "Uer registered";
}

console.log(registerUser("mohamed"));



//3
const setPrice = (price) => {
    if(typeof price !== "number")
        throw TypeError("price is not a number");
    return `price: ${price} is valid`;
}

console.log(setPrice(0.1));


//4
const withdraw = (balance, amount) => {
    if(amount > balance)
        throw Error("amount greater than balance");
    return balance - amount;
}

console.log(withdraw(300,400));


//5
// THROW: cannot continue safely
function loadConfig(config) {
  if (!config) {
    throw new Error("Missing configuration");
  }
}

// RETURN: expected outcome
function findUser(id) {
  if (!id) {
    return null;
  }
}
