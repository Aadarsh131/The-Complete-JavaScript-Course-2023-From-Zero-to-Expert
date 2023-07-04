//////////////////////////"this" Keyword//////////////////////////

"use strict";

if (true) {
  console.log(this);
}
console.log(this);

//'this' in non-arrow function
function check() {
  console.log(this); //if 'use strict' mode is ON, then 'this' is undefined
}
check();

//'this' in arrow function
let arrFunc = () => {
  console.log(this); //arrow functions doenot have their own 'this' keyword, the value of "this" keyword here is of its parent scope, which is global scope, and the value is window object, hence, the output is the window object
};
arrFunc();

//'this' in objects
let aadarsh = {
  name: "aadarsh",
  age: 23,
  print: function () {
    console.log(`name is ${this.name}`, this);
  },
  printsomething: () => {
    console.log(`name is ${this.name}`, this); //as arrow functions, doesn't have its own 'this' keyword, its value will be of its parent scope, and here the parent scope is global scope(window object)
    // NOTE: aadarsh object created with {} is not a scope, the global scope of "printsomething" function here will be the global object
  },
};
aadarsh.print();
aadarsh.printsomething();

let atul = {
  name: "atul",
  age: 22,
};

//borrowing method from one function to other
atul.print = aadarsh.print;
atul.print(); //'this' keyword always points to the object that is calling the method

const borrowFunc = atul.print; //copying a function into a variable
// borrowFunc(); // "this" will be "undfined" here, if 'strict' mode is ON

////////////////////////////////////////////////
let aadarsh1 = {
  name: "aadarsh1",
  age: 23,
  print: function () {
    // let isHappy = function () {
    //   console.log(`${this.name} is happy`);
    // };
    // isHappy(); //it is a regular function call, hence the 'this' keyword will be "undefined" in 'strict' mode

    // // Solution 1 (Before ES6)
    // console.log("---------------");
    // console.log(this);
    // let self = this;
    // let isHappy = function () {
    //   console.log(`${self.name} is happy`);
    // };
    // isHappy();

    //Solution 2- (ES6 and later- with arrow function)
    let isHappy = () => {
      console.log(`${this.name} is happy`);
    };
    isHappy();
  },
};
aadarsh1.print();
console.log("================================");

//////////////////////////"arguments" keyword(not useful in Modern JS(ES6+)/////////////////////
//normal function
const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
let sol = add(1, 2, 3, 4, 5, 6, 7, 8, 9); //all these extra arguments can be found inside the "arguments" keyword
console.log(sol);

//arrow function
const addArrow = (a, b) => {
  console.log(arguments); //"arguments" keyword is not defined for arrow functions
  return a + b;
};
addArrow(1, 2, 3, 4, 5, 6, 7, 8, 9);
