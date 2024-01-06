//1. Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.


const sumArray = (arr) => {
    let sum = 0;

    for(let element of arr){
        sum+=element
    }

    return sum;
}

//2. Write a function that takes in a string and returns the string reversed.

const reverseString = (str) => {
     return [...str].reverse().join("");
}

/* 3. Write a function that takes in an array of objects representing people, where each object has properties for name, age, and gender, 
and returns an array of objects representing only the people who are over the age of 18. */

const arrObj = (pupil) => {
    const newArr = [];
    
    for (let people of pupil){
        if(people.age > 18) newArr.push(people)
    }

    return newArr;
}


//4. Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the original array.

const arrEven = (arr) => {
    const newArr = [];

    for (let number of arr){
        if(number%2 == 0) newArr.push(number)
    }

    return newArr;
}

//5. Write a function that takes in an array of strings and returns a new array containing only the strings that start with the letter "A".

const stringArr = (arr) => {

    const newArr = []

    for(let str of arr) {
        if(str.startsWith('A')) newArr.push(str)
    }

    return newArr;
}


/* 6. Write a function that takes in an array of objects representing books, where each object has properties for 
title, author, and published, and returns an array of strings representing the titles of all the books published in the year 2000 or later.*/

const arrObjTitle = (arr) => {

    const newArr = []

    for(let book of arr){
        if(book.published >= 2000) newArr.push(book.title)
    }

    return newArr;
}

//7. Write a function that takes in two numbers and returns the larger of the two.

const largerNumber = (a,b) => {
    return Math.max(a,b);
}

//8. Write a function that takes in an array of numbers and returns the smallest number in the array.

const smallestNumber = (arr) => {
    return Math.min(...arr)
}

//9. Write a function that takes in an array of strings and returns the longest string in the array.

const longestString= (arr) => {
    let str = '';

    for(let s of arr){
        if(s.length >= str.length) str = s;
    }

    return str;
}

/*10. Write a function that takes in an array of objects representing students, where each object has properties for name and grade,
and returns an array of objects representing only the students who have a grade of "A". */

const arrObjGrade = (arr) => {

    const newArr = []

    for(let student of arr){
        if(student.grade == 'A') newArr.push(student)
    }

    return newArr;
}