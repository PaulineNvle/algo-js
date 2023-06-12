
// Generates an array of random numbers between 1 and 10
// @returns {number} The randomly generated number.

// @param {number} n The number of random numbers to generate.
// @returns {number[]} The array of random numbers.

const readlineSync = require("readline-sync");

function rand10() {
    let x = Math.ceil(Math.random() * 10);
    return x;

}

function multiRand(n) { // n = longeur de l'array
    let arr = [];
    // arr.length = n; // calcule la longeur de l'array, egale a n, n = num que l'user donnera
    for (let i = 0; i < n; i++) {
      arr[i] = rand10(); // ajoute i tant que plus petit que n, i = nombre aléatoire créer par rand(10)
    }
    return arr;
  }

  let number = readlineSync.questionInt("can you give me a number?");

arr = multiRand(number); // tt le calcul de ma fonction que mon user va donner
  
 
  
  console.log(arr);
