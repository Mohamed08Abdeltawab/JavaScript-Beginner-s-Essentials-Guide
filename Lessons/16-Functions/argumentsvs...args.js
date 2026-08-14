// ==========================================
// 1️⃣ Function using 'arguments' to log values
// ==========================================

function logWithArguments() {
  console.log("--- 1. Using arguments object ---");
  console.log("Arguments object:", arguments);

  for (let i = 0; i < arguments.length; i++) {
    console.log(`Value ${i}:`, arguments[i]);
  }
}

logWithArguments(10, 20, 30);

console.log("\n" + "=".repeat(45) + "\n");

// ==========================================
// 2️⃣ Function using '...args' to log values
// ==========================================

function logWithRest(...args) {
  console.log("--- 2. Using Rest Parameters (...args) ---");
  console.log("Rest array:", args);

  args.forEach((val, index) => {
    console.log(`Value ${index}:`, val);
  });
}

logWithRest(10, 20, 30);

console.log("\n" + "=".repeat(45) + "\n");

// ==========================================
// 3️⃣ Trying map() in both approaches
// ==========================================

// A) Trying map() on arguments object
function doubleWithArguments() {
  console.log("--- 3A. Trying map() on arguments ---");
  try {
    return arguments.map((x) => x * 2);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

doubleWithArguments(1, 2, 3);

console.log("\n" + "-".repeat(30) + "\n");

// B) Trying map() on Rest parameters
function doubleWithRest(...args) {
  console.log("--- 3B. Trying map() on ...args ---");
  const result = args.map((x) => x * 2);
  console.log("Success! Doubled result:", result);
  return result;
}

doubleWithRest(1, 2, 3);

console.log("\n" + "=".repeat(45) + "\n");

// ==========================================
// 4️⃣ Observing the differences
// ==========================================

console.log("--- 4. Summary of Observations ---");
console.log(
  "arguments is Array-like  -> Has length/indices, but lacks array methods like map().",
);
console.log(
  "...args is a real Array  -> Inherits from Array.prototype and supports all array methods natively.",
);
