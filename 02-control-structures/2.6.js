const readlineSync = require("readline-sync");

const user= readlineSync.question('Enter a number between 1 and 7 ');

const number = parseInt(user);

if (user == 1) {
    console.log('Monday');
} else if (user == 2) {
    console.log('Tuesday'); 
} else if (user == 3) {
    console.log('Wednesday');
} else if (user == 4) {
    console.log('Thursday');
} else if (user == 5) {
    console.log('Friday');
} else if (user == 6) {
    console.log('Saturday');
} else if (user == 7) {
    console.log('Sunday');
} else {
    console.log("C'est pas ce que je t'ai demandé");
}
