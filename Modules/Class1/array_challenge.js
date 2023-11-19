let studentNames = ['David', 'Patrick', 'Joseph', 'Jonathan', 'Jacklin', 'Fabian'];
let arrayLength = studentNames.length;

studentNames.pop();

studentNames.push('Adam');

studentNames.shift();
studentNames.unshift('Kate');

studentNames.splice(3,2);

let findName = studentNames.includes('John');
let findIndex = studentNames.indexOf('Kate');

let reversedArray = studentNames.reverse();

if(studentNames[0] === studentNames[studentNames.length-1]) console.log('true');
else console.log('false');