const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve(10);
  } else {
    reject("Failed");
  }
});

promise
  .then((num) => {
    console.log("success number -> " + num);
    return num * 2;
  })
  .then((num) => {
    console.log("success number -> " + num);
    throw Error("an error occurd on step2");
    return num * 2;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });
