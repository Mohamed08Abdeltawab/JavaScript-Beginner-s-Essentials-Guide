//1-3
class Product{
    constructor(price){
        this._price = price;
    }
    get price(){
        return this._price;
    }
    set price(value){
        if(value < 0){
            throw new Error("Price cannot be negative");
        }
        this._price = value;
    }
}

//4
const p = new Product(100);
console.log(p.price);

p.price = -150;
console.log(p.price);



