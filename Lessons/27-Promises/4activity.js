const promise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Data loaded");
  } else {
    reject("Network error");
  }
});


promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Finished");
  });
