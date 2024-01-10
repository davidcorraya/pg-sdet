//1. Write a function that takes an array of objects representing books and returns an array containing the titles of those books.

let bookTitle = books.map((book)=>{
    return book.title;
});

console.log(bookTitle)



//2. Write a function that takes an array of objects representing products and returns an array containing only the products that are currently in stock.

let inStockProducts = products.filter((product)=>{
    return product.availability === 'in stock'
});



//3. Write a function that takes an array of objects representing users and returns the first user whose email address matches a given email.

let findUser = users.find((user)=>{
    return user.email === 'admin@gmail.com'
});



//4. Write a function that takes an array of objects representing tasks and returns true if all the tasks are marked as complete, otherwise returns false.

let allTaskCompletion = tasks.every(task => {
    return task.status === 'complete'
});



//5. Write a function that takes an array of objects representing purchases and returns the total amount spent on those purchases.

let totalPurchases = () => {
    let total = 0;

    purchases.forEach(purchase => {
        total += purchase.year;
    });

    return total;
};



//6. Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

let arrSum = (arr) => {
    let sum = 0;

    arr.forEach(number => {
        sum += number;
    });

    return sum;
};



//7. Write a function that takes an array of strings as input and returns a new array with all the strings converted to uppercase.

let stringUppercase = arr.map(str => {
    return str.toUpperCase();
});



//8. Write a function that takes an array of numbers as input and returns a new array with all the even numbers from the original array.

let arr = [2,4,1,5,7,8,9]

let evenArr = arr.filter(element => {
    return element%2 === 0;
});



//9. Write a function that takes an array of strings as input and returns a new array with all the strings that have a length of 4 or less.

let strLength = arr.filter(str => {
    return str.length <= 4;
});