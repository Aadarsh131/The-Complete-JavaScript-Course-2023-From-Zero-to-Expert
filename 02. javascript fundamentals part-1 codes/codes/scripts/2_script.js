////////////////////////let var const ///////////////////////
/* let and const are ES6 feature and are block scoped, var are function scoped */

// var animal = "jaguar";
// if (true) {
//   let animal = "sparrow";
//   console.log(animal);
// }
// console.log(animal);

/*CAN redeclare 'var' variables*/
// var animal = "jaguar";
// if (true) {
//   var animal = "sparrow";
//   console.log(animal);
// }
// console.log(animal);

/*CANNOT redeclare 'let' variables*/
// let animal = "jaguar";
// if (true) {
//   var animal = "sparrow";
//   console.log(animal);
// }
// console.log(animal);

/*both varibles are declared in different scope(one in global scope and one in block/function scope), so this case is possible*/
let animal = "jaguar";
if (true) {
  let animal = "sparrow";
  console.log(animal);
}
function foo() {
  let animal = "sparrow";
  console.log(animal);
}
foo();
console.log(animal);

/*case-1: function scoped variables are only accessible inside the same function*/
// function check() {
//   var animal = "jaguar";
//   if (true) {
//     console.log(animal);
//   }
// }
// check();
// console.log(check().animal); //global scope for animal is function check()
// console.log(window.animal); //undefined, since the global scope of the variable is function and not window object
// console.log(animal); //this will not be accessible

/*case-2: function scoped variables are only accessible inside the same function*/
// var animal = "lion";
// function check() {
//   var animal = "jaguar";
//   if (true) {
//     console.log(animal);
//   }
// }
// check();
// console.log(animal);

/*CANNOT redeclare a variable*/
// var animal = "tiger";
// let animal = "lion";
// console.log(animal);

// console.log((window.i = 12), window);

// var a = 12; //BAD PRACTICE: since, it stores the variable in the global object window
// console.log(window.a);
