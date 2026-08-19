//1
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}


//2
function getUserName(user) {
  if (!user || !user.name || typeof user.name !== "string") {
    throw new Error("User name is required");
  }
  return user.name;
}


//3
function processData(data) {
  try {
    if (!data) {
      throw new Error("No data");
    }
  } catch (err) {
    console.log("Processing failed");
    throw err; // rethrow
  }
}

//4
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return a * b;
}
