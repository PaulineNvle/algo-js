

class Person {
    constructor(firstname, lastname) { 
        this.firstname = firstname;
        this.lastname = lastname;
    }
    DisBonjour(){
        return `${this.firstname}! Je suis ${this.lastname} !`;
    }
}
console.log(new Person("Laurent", "Charle").sayHello());

