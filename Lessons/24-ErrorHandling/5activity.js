function register(username) {
  if (!username) return "Invalid username";
  return "Registered";
}


//2
function transfer(balance, amount) {
  if (amount < 0) {
    throw new Error("Negative amount not allowed");
  }
  if (amount > balance) return "Insufficient funds";
  return balance - amount;
}


//4
function login(user) {
  if (!user) return "Access denied";
  if (!user.active) return "Access denied";
  return "Welcome";
}
