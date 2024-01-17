/*1. Create a class called Animal that has a name property and a speak method. 
The speak method should log a message to the console saying "Hello, my name is {name}." 
Create an instance of the Animal class and call the speak method. */

class Animal{
    constructor(name){
        this.name = name;
    };

    speak(){
        console.log(`Hello, my name is ${this.name}`)
    };
};

let dog = new Animal("Maple");

dog.speak();


/*2. Create a class called Person that has name and age properties, 
and a greet method that logs a message to the console saying "Hello, my name is {name} and I am {age} years old." 
Create an instance of the Person class and call the greet method. */

/*7. Create a class called Person that has name and email properties, and a sendEmail method that takes in a message and sends an email to the person's email address. 
Create an instance of the Person class and call the sendEmail method with a message. */

class Person{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    };

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    };

    sendEmail(message){
        return message
    };
};

let person1 = new Person('David', 30, 'davidcorraya@gmail.com');
person1.greet();
person1.sendEmail('test');

/*3. Create a class called Car that has make, model, and year properties, and a start method that logs a message to the console saying 
"The {make} {model} is starting." Create an instance of the Car class and call the start method. */

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    };

    start(){
        console.log(`The ${this.make} ${this.model} is starting.`)
    };
};

let car1 = new Car('Lamborghini','Countach', 1974);
car1.start();


/*4. Create a class called Rectangle that has width and height properties, 
and a getArea method that returns the area of the rectangle. 
Create an instance of the Rectangle class and call the getArea method. */

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    };

    getArea(){
        return this.width*this.height
    };
};

let rect1 = new Rectangle(12, 10);

console.log(rect1.getArea());



/*5. Create a class called Square that extends the Rectangle class and has a sideLength property. 
Override the getArea method in the Square class to return the area of the square. 
Create an instance of the Square class and call the getArea method. */

class Square extends Rectangle{
    constructor(width, height, sideLength){
        super(width, height);
        this.sideLength = sideLength;
    };

    getArea(){
        return this.sideLength*this.sideLength;
    }
};

let square1 = new Square(12, 10, 5);

console.log(square1.getArea());



/*6. Create a class called BankAccount that has accountNumber, accountHolderName, and balance properties, and a deposit method that takes in an amount and adds it to the balance. 
Create an instance of the BankAccount class and call the deposit method with an amount. */

class BankAccount{
    constructor(accountNumber, accountHolderName, balance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    };

    deposit(amount){
        this.balance+=amount;
    };
}

let accountA = new BankAccount(4321, 'David', 1000);

accountA.deposit(200)

console.log(accountA.balance)



/*8. Create a class called Product that has name, price, and description properties, and a discount method that takes in a percentage and returns the discounted price. 
Create an instance of the Product class and call the discount method with a percentage. */

class Product{
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
    };

    discount(percentageDiscount){
        this.price*=((100-percentageDiscount)/100);
        return this.price;
    };
};

let productA = new Product('Google Pixel', 1000, 'The latest Pixel Phone!');

productA.discount(20);

console.log(productA.price);
