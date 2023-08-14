/////////////////////Function declaration and expression///////////////////
"use strict";

//Possible to call the declaration function before initialization(this is possible due to the concept of HOISTING)
declarationFunc();
function declarationFunc() {
  console.log("declaration function");
}

//NOT Possible to call the expression function before initialization
// expressionFunc(); //throws an ERROR
const expressionFunc = function () {
  console.log("expression function");
};
expressionFunc();

///////////////////Arrow function////////////
//NOT Possible to call the Arrow function before initialization
const calcAGE = (birthyear) => 2023 - birthyear; //implicit return
console.log(calcAGE(2000));

const timeUntilResignation = (resignationYear, name) => {
  const timeRemaining = resignationYear - 2023;
  return `${name} is resigning in ${timeRemaining} years`; //explicit return, in case of multiple expression lines
};
console.log(timeUntilResignation(2030, "Aadarsh"));
