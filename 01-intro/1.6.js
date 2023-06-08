const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Give me pls a number ');

let number2 = readlineSync.question('Give me another number ');

let reponse = number1 % number2;

console.log(reponse);
