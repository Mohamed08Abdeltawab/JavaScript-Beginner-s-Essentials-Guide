const promise = new Promise((resolve, reject) => {
    const isOnline = false;
    if(isOnline){
        return resolve("Connected");
    } else{
        return reject("NO connection");
    }
});

promise
.then((message) => {
    console.log("Success", message);
})
.catch((error) => {
    console.log("Error", error);
})
.finally(() => {
    console.log("check finished.");
})