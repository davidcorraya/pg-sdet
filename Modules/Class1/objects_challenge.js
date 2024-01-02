//Build Object for Employees: An employee can be represented as an object with attributes such as name, age, salary, and job title. 
//It can also have functions like work, take a break, and attend a meeting.

const employee = {
    name: "David",
    age: 29,
    salary: 85000,
    jobTitle: "Automation Engineer"
};

//Build Object for  Bank accounts: A bank account can be represented as an object with attributes such as account number, balance, and account type. 
//It can also have functions like deposit, withdraw, and transfer.

const account = {
    accountNumber: 321432154321,
    balance: 120000,
    accountType: "Savings",
    deposit: function (amount){
        this.balance+=amount;
    }
};


//Build Object for  Dogs: A dog can be represented as an object with attributes such as breed, age, and color. 
//It can also have functions like bark, wag tail, and fetch.

const dogs = {
    breed: "Golden Retreiver",
    age: 6,
    color: "Golden",
    bark: function(){
        console.log("bark!")
    }
};

//Suppose you are building an e-commerce application and you want to create a new Product object with property name, price, manufacturer, category

const product = {
    name: "Logitech G502",
    price: 50,
    manufacturer: "Logitech",
    category: "Mouse & Keyboard"
}

//Now add a description property to the Product object you created

product.description = "Full form, wireless mouse"

//Suppose the price of the Product object you created earlier changes. Now the price increased by $10

product.price+=10

//Remove the description property from the Product object you created earlier.

delete product.description


//Suppose you are building a blog application and you want to display a list of all the blog posts. 
//You have an array of blog post objects, where each object has properties such as title, author, date, and content. 
//Find out if date field is empty on any object

for (let post of blogPosts){
    if(post.date == '') post.date = '2023-01-23'
}

