const readlineSync = require("readline-sync");

let minAge = readlineSync.question('Pls enter a min age ');
let maxAge = readlineSync.question('Pls enter a max age');


if  (minAge > maxAge) {
    console.log("not possible mtf");
}
else { 
    let currentAge = readlineSync.question('Pls enter your current age');


    if (currentAge >= minAge &&  currentAge <= maxAge) {
        console.log('CONGRATS');
    } else if (currentAge < minAge)
     {
      console.log('You don t understand anything');
    } else if (currentAge > maxAge) {
        console.log("you r too old mtf");
    }
}
