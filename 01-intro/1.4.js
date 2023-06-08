
const readlineSync = require("readline-sync");

let userLastName = readlineSync.question('What is your last name?');
let userFirstName = readlineSync.question('What is your first name?');
let userCity = readlineSync.question('Where do you live?');


console.log("Hello " + userFirstName + userLastName + userCity );


