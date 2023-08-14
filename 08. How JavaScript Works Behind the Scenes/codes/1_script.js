///////////////////// Hoisting and TDZ in Practice////////////////////

// Variables
console.log(me);
// console.log(job);
// console.log(year);
var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example(this will create a disaster, hence, "var" are avoided)
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log("All products deleted!");
}

//varibles defined with "var" is set to the globla window object as a property
var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
