class Calculator{
    static version1 = "1.0";
    static add(a,b){
        return a + b;
    }
    static multiply(a,b){
        return a * b;
    }
}

console.log(Calculator.add(2,3));
console.log(Calculator.multiply(2,3));
console.log(Calculator.version1);

const c = new Calculator();
console.log(c.add(2,3));//error