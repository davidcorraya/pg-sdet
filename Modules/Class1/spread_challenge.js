//1. Write a function that takes in two arrays of numbers and returns a new array containing all the elements of both arrays

let combineArray1 = function(arrayA, arrayB){
    arrayCom = [...arrayA, ...arrayB]
    return arrayCom
}

//2. Write a function that takes in an array of strings and a string to add to the beginning of the array, and returns a new array with the string added to the beginning.

let combineArray2 = function(arrayA, str){
    arrayCom = [str, ...arrayA]
    return arrayCom
}

//3. Write a function that takes in an object and a key-value pair to add to the object, and returns a new object with the key-value pair added.

let combineArray3 = function(originalObject, key, value){
    newObject = {...originalObject, [key]: value}
    return newObject
}


//4. Write a function that takes in an array of numbers and returns the largest number in the array.

let findLargestNumber = function(numbersArray){
    const largestNumber = Math.max(...numbersArray)

    return largestNumber
}


//5. Write a function that takes in an array of strings and returns a new array containing all the strings in alphabetical order.

let arraySorter = function(arrayA){
    const sortedArray = [...arrayA]

    sortedArray.sort()

    return sortedArray
}