const p1 = new promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("resolved");
  }, 1000);
});
const p2 = new promise((resolve, reject) => {
  setTimeout(() => {
    return reject("rejected");
  }, 2000);
});
const p3 = new promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("resolved");
  }, 3000);
});


//1 combinator waits for all results 
Promise.allSettled

//2
Promise.all

//3
Promise.race

//4
Promise.any