//1
(function(){
    console.log("App Loaded");
})();



//2
console.log("\n");
(function(num){//give parameter from here
    console.log(num * 2);
})(5)//get attribute from here 



//3
console.log("\n");
let counter = (function(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
})();

counter();
counter();
counter();
