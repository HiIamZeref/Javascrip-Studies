'use strict';

/* Scoping Example */
const myName = "John"; //global scope: myName works everywhere

function scopingExample() { //function scope: x only works inside the function
    let x = 5;

    return x + 10;
}

if (true) { //block scope: y only works inside the if statement
    let y = 10;
}

/* Hoisting Example */
console.log(z); // can be called before the variable is declared, but it will be undefined
var z = 5;

hoistingExample(); // can be called before the function is declared
function hoistingExample() {
    let a = 5;
    console.log(a);

}

const hoistingExample2 = function () { // can't be called before the function is declared
    let b = 10;
    console.log(b);
}
hoistingExample2();

const hoistingExample3 = () => { // can't be called before the function is declared
    let c = 15;
    console.log(c);
}
hoistingExample3();

/* "this" keyword */
const person = {
    name: "John",
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
} // "this" refers to the object that the function is a property of
person.sayHello();

const person2 = {
    name: "Mary",
    year: 2001,
    calcAge: function () {
        this.age = 2021 - this.year;
        return this.age;
    }
} // you can also set properties of the object using "this"
console.log(person2.calcAge());
console.log(person2.age);

const person3 = {
    year: 2002,
}

person3.calcAge = person2.calcAge; // borrowing a function from another object
console.log(person3.calcAge());

