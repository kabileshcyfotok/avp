// Function Declaration
function greet() {
  console.log("Hello! This is a function declaration.");
}
greet();

// Function Expression
const sayHello = function () {
  console.log("Hello! This is a function expression.");
};
sayHello();

// Arrow Function
const greetArrow = () => {
  console.log("Hello! This is an arrow function.");
};
greetArrow();

// console.log("\n--- Scope Examples ---");

// // Global Scope
// let globalVariable = "I am global";

// function globalScopeExample() {
//   console.log("Accessing globalVariable inside the function:", globalVariable);
// }
// globalScopeExample();
// console.log("Accessing globalVariable outside the function:", globalVariable);

// // Local Scope
// function localScopeExample() {
//   let localVariable = "I am local";
//   console.log("Accessing localVariable inside the function:", localVariable);
// }
// // localScopeExample(); // Uncomment to call
// // console.log(localVariable); // Error: localVariable is not defined

// // Block Scope with let and const
// if (true) {
//   let blockScopedLet = "I am block-scoped (let)";
//   const blockScopedConst = "I am block-scoped (const)";
//   console.log(blockScopedLet);
//   console.log(blockScopedConst);
// }
// // console.log(blockScopedLet); // Error: blockScopedLet is not defined
// // console.log(blockScopedConst); // Error: blockScopedConst is not defined

// // var does not have block scope
// if (true) {
//   var functionScopedVar = "I am function-scoped (var)";
// }
// console.log("Accessing functionScopedVar outside block:", functionScopedVar);
