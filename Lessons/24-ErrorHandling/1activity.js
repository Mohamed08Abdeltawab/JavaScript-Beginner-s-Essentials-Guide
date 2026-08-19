//1
// console.log(x);
// let x = 5;


//2
// let y = 5();


let x = () => {
    console.log("hello");
}
x();

try {
  let obj;
  console.log(obj.name);
} catch (e) {
  console.log("Caught:", e.message);
}

try {
  console.log("Running");
} finally {
  console.log("Cleanup done");
}

try {
  try {
    JSON.parse("{bad}");
  } catch {
    console.log("Inner handled");
  }
} catch {
  console.log("Outer handled");
}
