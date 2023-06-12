function multiRand(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
      numbers.push(Math.floor(Math.random() * 100)); // Génère un nombre aléatoire entre 0 et 99
    }
    return numbers;
  }


function average(array){
        let sum = 0; // on démarre de l'index 0, le premire du array
        for (let i = 0; i < array.length; i++) { // on initialise a 0, puis on dit que ca doit fct pour la longeur (lenght) de l'array, et enfin que on doit avancer de 1 a chaque fois.

            sum += array[i]; // on fait la somme de ce qu'il y a dans l'array
        }
        return sum / array.length // on fait un return pour faire revenir le sum et on le divise par la longueur de l'array
    } 

function min(array) {
    let minimum = array[0]; // Déclare la variable minimum avec la première valeur du tableau
    for (let i = 1; i < array.length; i++) { // Commence à i=1, car minimum est déjà initialisé avec la première valeur
      if (array[i] < minimum) {
        minimum = array[i]; // Met à jour minimum si la valeur actuelle est plus petite
      }
    }
    return minimum;
  }
  

  function max(array) {
    let maximum = array[0]; // Déclare la variable maximum avec la première valeur du tableau
    for (let i = 1; i < array.length; i++) { // Commence à i=1, car maximum est déjà initialisé avec la première valeur
      if (array[i] > maximum) {
        maximum = array[i]; // Met à jour maximum si la valeur actuelle est plus grande
      }
    }
    return maximum;
  }
  
  

const input = parseInt(prompt("Entrez un nombre :")); // Demande un nombre à l'user
const randomNumbers = multiRand(input); // Génère un tableau de nombres aléatoires

console.log("Nombres générés :", randomNumbers);
console.log("Moyenne :", average(randomNumbers));
console.log("Minimum :", min(randomNumbers));
console.log("Maximum :", max(randomNumbers));