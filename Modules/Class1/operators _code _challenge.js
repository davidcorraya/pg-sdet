//Arithmetic Operators
//1
let num1 = 2;
let num2 = 4;

console.log(num1*num2);

//2
let radius = 4;
let area = Math.PI * radius**2;

console.log(area);


//Assignment Operators
//1
let count = 5;
count+=2;
console.log(count);

//2
let price = 10;
price*=2.5;

console.log(price);


//Comparison Operator
//1
let age1 = 29;
let age2 = 30;

if(age1>age2) console.log(true);
else console.log(false);

//2
let fullName = 'John Joe'

if(fullName!="John Doe") console.log(true);
else console.log(false);


//Logical Operators
//1
let isMember = true;
let hasCoupon = false;

if(isMember || hasCoupon) console.log(true);
else console.log(false);

//2
let num = 50;
if(num != 0) console.log(true);
else console.log(false);


//Conditional (Ternary) Operator
//1
let age = 12;
console.log((age >= 18) ? "You are old enough to vote" : "You are not old enough to vote");

//2
let price2 = 140;
let maxSalePrice = 100;

console.log((price2 <= maxSalePrice)? "The product is on sale" : "The product is not on sale");






