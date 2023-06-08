const readlineSync = require("readline-sync");

let minAge = readlineSync.question('Pls enter a min age ');
let maxAge = readlineSync.question('Pls enter a max age');
let currentAge = readlineSync.question('Pls enter your current age');


if ((currentAge > minAge) &&  (currentAge < maxAge)) {
    console.log(currentAge);
} else if ((minAge > maxAge)); {
      console.log('You don t understand anything');
}
