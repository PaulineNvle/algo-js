const readlineSync = require("readline-sync");

let num = 1;

while (num <= 100) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }