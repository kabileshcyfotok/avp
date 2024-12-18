// Using 'let' to declare a variable (mutable)
let username = "Roohi"; // String
let age = 22; // Number
let isStudent = true; // Boolean

console.log(`Username: ${username}, Age: ${age}, Is Student: ${isStudent}`);

// Using 'const' to declare a constant (immutable)
const pi = 3.14; // Number
const greeting = "Welcome to the world of JavaScript!"; // String

console.log(`PI: ${pi}`);
console.log(greeting);

// Using 'var' (function-scoped, avoid in modern JS unless necessary)
var course = "Full Stack Development"; // String
console.log(`Course: ${course}`);

// Primitive data types examples
let someNumber = 10; // Number
let someString = "Hello, world!"; // String
let isAvailable = false; // Boolean
let someValue = null; // Null
let notAssigned; // Undefined (variable declared but not initialized)

console.log(
  `Number: ${someNumber}, String: ${someString}, Boolean: ${isAvailable}, Null: ${someValue}, Undefined: ${notAssigned}`
);

// Complex data types examples
let person = {
  name: "Roohi",
  age: 22,
  skills: ["JavaScript", "Node.js", "MySQL"],
}; // Object

let numbers = [1, 2, 3, 4, 5]; // Array

console.log("Person Object:", person);
console.log("Array of Numbers:", numbers);

// Accessing object and array elements
console.log(`Person's name: ${person.name}`);
console.log(`Second skill: ${person.skills[1]}`);
console.log(`First number in array: ${numbers[0]}`);
