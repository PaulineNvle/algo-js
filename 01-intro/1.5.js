const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Give me pls a number with a decimal part? ');

let number2 = readlineSync.question('Give me another number with a decimal part ');

let integerabeille = (Math.trunc( number1));

let reponse = integerabeille * number2;

console.log(reponse);





