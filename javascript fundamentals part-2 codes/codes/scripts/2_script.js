////////////////////Array/////////////////

//Array.prototype.length (max length is LESS THAN 2**32)
const list = ["a", "b", 45, 34];
// list.length = 2 ** 32; //error:invalid array length
list[2] = "c"; //since, objects are mutable & only primitive types are immutable
// list = ["x", "y"]; //cannot mutate this way

console.log(list + 10); // converts array to a string (+ operator) //outputs: string concatenation
console.log(list - 10); // converts array to a number (- operator) //outputs: NaN

//////////////Array methods/////////////////
const listB = ["a", "b", "c", "d"];
const LenghtAfterPush = listB.push("e");
console.log(LenghtAfterPush);

const LengthAfterUnshift = listB.unshift("0"); //adds item to the start of the array
console.log(LengthAfterUnshift);

const shiftItem = listB.shift(); //removes the item at the start of the arr
console.log(shiftItem);

const poppedItem = listB.pop();
console.log(poppedItem);

console.log(listB.indexOf("b")); //outputs -1 if the item is not present
console.log(listB.includes("b")); //outputs "false" if item is not present, it does the strict checking
