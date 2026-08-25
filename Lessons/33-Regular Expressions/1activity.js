const pattern1 = /admin/
const valid = pattern1.test("you are admin and i cashier");
console.log(valid);
//or 
/admin/i.test("Admin user");

//2
const ex2 = "Order 45 costs 300 dollars";
const arr = ex2.match(/[0-9]+/g)
console.log(arr);
//or
"Order 45 costs 300 dollars".match(/\d+/g);

const date = "2026-08-25";
// تحويل من YYYY-MM-DD إلى DD/MM/YYYY
const formattedDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$1/$2");
console.log(formattedDate); // "25/08/2026"