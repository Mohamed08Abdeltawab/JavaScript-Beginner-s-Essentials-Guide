//1
const sayHi = function(){
    console.log("Hi There!");
}

sayHi();

console.log("\n");
//3
function makeCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter();
counter();
counter();


console.log("\n");
//2
function process(num, callback){
    callback(num * 2);
}

process(2,(result) => console.log(result));



//4
console.log("\n");
function banckAccount(){
    let balance = 100;

    return{
        deposit: (amount) => balance += amount,
        getBalance: () => balance   
    };
}
const myAcc = banckAccount();
myAcc.deposit(200);
console.log(myAcc.getBalance());



console.log("\n");
//5
function setupMessage(text){
    return function(){
        console.log("message: " + text);
    };
}

const show = setupMessage("hello");
show();