
const readlineSync = require("readline-sync");
let lenght = readlineSync.questionInt("What's the lenght?");
let width = readlineSync.question("What's the width?");

/**
 * takes the lenght and the width and return its surface.
 * @param { lenght } lenght of the rectangle
 * @param { width } width of the rectangle
 * @return { surface } surface of the rectangle
 **/


function calcSurface (lenght, width){
  let surface = lenght * width;

  console.log("The surface of your triangle is " + surface + " .")
}

  
  // Calling the function
  calcSurface(lenght,width);
  



