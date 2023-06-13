

class Cat {
    constructor(name, age) { // constructor: It's a function that will be called when the object is created.
        this.name = name; // this :keyword pour acceder a l'objet, la classe dans laquelle je me trouve, c la méthode, un peu comme fct mais propre aux classes
        this.age = age; // . :acceder a l'objet 
    }
    
}

console.log(new  ("Kitty", "9 years")); // new = pour créer un nouvek objet
console.log(new Cat ("Pixel", "6 years" ));
