const readlineSync = require("readline-sync");

let user = readlineSync.question('What is your fav number? ');

// while (user !== 42) {
 //   console.log('Are you sure?')
 //   user = readlineSync.question('What is your fav number? ');
//}
    
//  console.log('Great!')


while  (user != 42){
    console.log('Are you sure?');
    user = readlineSync.question('What is your fav number? ');
}if  (user == 42) {
    console.log('Great!');
}


   

// if ((user = 42)) {
//     console.log('Great!');
// } else {
//     console.log('Are you sure?');
// } 
