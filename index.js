console.log("JS is running!");


// function handleClick() {
//     alert("Button was clicked!")
// }

let nameEx = "John";

let age = 30;

console.log("typeof name:", typeof nameEx);
console.log(" name:", nameEx);
console.log("typeof age:", typeof age);
console.log(" age:", age);


let isStudent = true;
console.log("typeof isStudent:", typeof isStudent);
console.log(" isStudent:", isStudent);

let test;

console.log("typeof test:", typeof test);
console.log(" test:", test);


var testVar;
console.log("typeof testVar:", typeof testVar);
console.log(" testVar:", testVar);


// let vs var

console.log("varTest value ---  ", varTest);
var varTest;

// let

let letTest;
console.log("letTest value--", letTest);

let nullTest = null;

///operators
let x = 5 + 2;
x += 1; // x = x + 1;
console.log("x after addition:", x);

console.log(x == 8);  // true (Comparison)
console.log(x > 5 && x < 10); // Logical

console.log("****************** Control flow example ******************");

let number = 0;
number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is not positive.");
} else {
    console.log("The number is zero.");
}

switch (number) {
    case 0:
        console.log("The number is zero.");
        break;
    case 1:
    case 2:
    case 3:
    case 10:
        console.log("The number is one or two or three or ten.");
        break;
    default:
        console.log("The number is something else.");
}

console.log("****************** iteration flow example ******************");

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// while loop
let i = 0;
while (i < 3) {
    console.log("Hello");
    i++;
}

let j = 1;
while (j <= 5) {
    console.log("Count j:", j);
    j++;
}
console.log("****************** Functions and scopes example ******************");

//defination of a function
// Function declaration
function greet(name) {
    return "Hello, " + name;
}

//ES6 Fat Arrow function
const greetArrow = (name) => {
    return "Hello, " + name;
}

//calling the functions
console.log(greet("Alice"));
console.log(greetArrow("Bob"));


let globalVarEx = 10; // Global

function testScope() {
    try {
        let localB = 5; // Local
        console.log(globalVarEx + localB);
    } catch (error) {
        console.error("An error occurred:", error);
    }

}
testScope();

try {
    // console.log("Accessing localB outside its scope:", localB);
    console.log("Accessing globalVarEx outside its scope:", globalVarEx);

} catch (error) {
    console.error("An error occurred:", error);
}


console.log("****************** Arrays and Objects example ******************");
let fruits = ["apple", "banana", "mango", 10, true, null];
console.log(fruits[1]); // banana
fruits.push("grape");   // add

for (const element of fruits) {
    console.log("Fruit:", element);
}

console.log("Type of fruits:", typeof fruits);

let person = {
    name: "John",
    age: 25,
    greet: function () {
        console.log("Hello " + this.name);
    },
    greet1: () => {        // Arrow function does not have its own 'this'
        console.log("Hello " + this.name);
    }
};

console.log(person.name); // John
person.greet();           // Hello John
person.greet1();          // Hello undefined

console.log("Person name:", person["name"]); // John
console.log("Person age:", person["age"]);   // 25

const { name } = person; // Destructuring
console.log("Destructured name:", name); // John
// console.log("Destructured age:", age);   // 25




//What is a Closure?
// A closure happens when a function “remembers” variables from the place where it was created, even after that outer function has finished running.



const outterFunction = () => {
    let counter = 0;  // outer function variables

    return () => { //inner function
        counter += 1;
        console.log("Counter Value:", counter);
    }
}

//create  CLOSURE
const closure = outterFunction();
closure();
closure();
closure();


