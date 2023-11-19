let number = 10;

if(number%2 === 0) console.log('Number is even');
else console.log('Number is odd');


let age = 24;

if(age < 18) console.log('You are a minor')
else if(age >= 18 && age <= 65) console.log('You are an adult')
else console.log('You are a senior citizen')


let letter = 'e';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];

if(vowelArr.includes(letter)) console.log(`${letter} is a vowel`);
else console.log(`${letter} is a consonant`);


let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;

if(numberOne>=numberTwo && numberOne>=numberThree) console.log('Number one is the largest');
else if(numberTwo>=numberOne && numberTwo>=numberThree) console.log('Number two is the largest');
else console.log('Number three is the largest');


let password = 'Test1233';
let regEx = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
if(password.length >= 8){
    if(password.match(regEx)) console.log('Password accepted');
    else console.log('Password rejected');
}
else console.log('Password too short');