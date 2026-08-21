//assume file name is mathUtils.js
//1
export const PI = 3.14;
export function multiply(a, b){
    return a * b;
}
export default class Calculator{
    constructor(){
        console.log("export Calculator");
    }
}

//4 => class calculator will be defalt because
//we need to call one time on file
