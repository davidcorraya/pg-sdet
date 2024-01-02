//1. Create an array of products with at least 5 products. Each product should have the following properties:

const products = [
    {name: "Product A", price: 10, quantity: 5},
    {name: "Product B", price: 20, quantity: 3},
    {name: "Product C", price: 15, quantity: 7},
    {name: "Product D", price: 25, quantity: 2},
    {name: "Product E", price: 30, quantity: 4},
];

//2. Loop through the array using a for loop and print out the name and price of each product.

for(i = 0; i<products.length; i++){
    console.log(products[i].name + ": $" + products[i].price)
};


//3. Use a while loop to find the product with the lowest price. Print out the name and price of the product.

i = 1;
let j = 0;
let minPrice = products[0].price;
while(i<products.length){
    if(products[i].price < minPrice){
        minPrice = products[i].price;
        j = i;
    }
    i++;
}

console.log(products[j].name + " is the cheapest at " + products[j].price)

//4. Use a for of loop to calculate the total value of all products in the array.

let total = 0;
for(let product of products){
    total = total + product.price;
}

console.log(`Total value of all products: $${total}`)

//5. Use a for in loop to print out all the properties of each product in the array.
for(let product of products){
    console.log("\n")
    
    for(let key in product) console.log(`${key} : ${product[key]}`)
};
