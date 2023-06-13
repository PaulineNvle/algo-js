

function calcDistance(A, B) {
    const deltaX = B.x - A.x; // calculer la distance entre ces deux points en utilisant la formule de la distance euclidienne.
    const deltaY = B.y - A.y; // "" 
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distance;
  }
  

const A = { x: 1, y: 2 }; // coordonnées point A
const B = { x: 4, y: 7 }; // coordonnées point B

const distance = calcDistance(A, B); // on appelle calcDistance et on met (A, B) comme argument
console.log(distance);
