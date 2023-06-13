


const readlineSync = require("readline-sync");

function askSerie(){ // deux premières questions
    let nameOfSerie = readlineSync.question("What's your favorite serie ?");
    let year = readlineSync.questionInt("Years of production ?");
    let arrInfo = []; //tableau qui regroupe les infos

    do {
        // demande a l'user d'entrer une réponse, a savoir, un cast member
        cast = readlineSync.question('Enter one or multiple cast member ? enter "q" when you are done');
        if (cast !== "q") {
            arrInfo.push(cast)
        }
    } while (cast !== "q"){ 
        let myObject = {
            name : nameOfSerie,
            year : year,
            arrInfo : arrInfo
        };  
        return  myObject;
    }
        
}

let userAnswer= askSerie ();
console.log(userAnswer);    
