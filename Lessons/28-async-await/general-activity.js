//1
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

async function test() {
  console.log("3");
  await Promise.resolve();
  console.log("4");
}

test();

queueMicrotask(() => {
  console.log("5");
});

Promise.resolve().then(() => {
  console.log("6");
});

console.log("7");

//print 1,3,7,4,5,6,2


//2
Promise.resolve("Start")
  .then((val) => {
    console.log(val);
    throw new Error("Failed at step 1");
  })
  .catch((err) => {
    console.log("Caught:", err.message);
    return "Recovered";
  })
  .then((val) => {
    console.log("Step 2:", val);
    return Promise.reject("Failed at step 2");
  })
  .catch((err) => {
    console.log("Final Catch:", err);
  })
  .finally(() => {
    console.log("Done");
  });

//print 
/*
Start
Caught: Faild at step1
Step2: Recoverd
Final Catch: Faild at step2
Done
*/


//3
const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 Slow"), 300));
const p2 = new Promise((_, reject) => setTimeout(() => reject("P2 Error"), 100));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 Fast"), 200));

// 1
const resAll = Promise.all([p1, p2, p3]);

// 2
const resSettled = Promise.allSettled([p1, p2, p3]);

// 3
const resRace = Promise.race([p1, p2, p3]);

// 4
const resAny = Promise.any([p1, p2, p3]);
/*
//1 false
//2 P1 P3 Fast, P1 Slow
//3 P2 Error
//4 P3 Fast
*/


//4
// الكود الأصلي البطيء:
async function fetchAllProducts(productIds) {
  const products = [];
  for (const id of productIds) {
    const item = await fetchProductById(id); // يستغرق 1 ثانية لكل طلب
    products.push(item);
  }
  return products;
}


//fast code
async function fetchAllProducts2(productIds) {
    const productParameter = productIds.map(id => fetchAllProducts2(id));
    const products = await Promise.all(productParameter)
    return products;
}


//5
async function checkUserAccess(userId) {
  return userId === 101;
}

async function handleRequest(userId) {
  const isAllowed = await checkUserAccess(userId);

  if (isAllowed) {
    console.log("Access Granted");
  } else {
    console.log("Access Denied");
  }
}

handleRequest(999); // المستخدم غير مصرح له