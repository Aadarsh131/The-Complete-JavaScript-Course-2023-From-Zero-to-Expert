////////////////////Type conversion & Type coercion///////////////

//Type conversion
const age1 = "34";

console.log(Number(age1) + 19); //explicit conversion
console.log(age1 + 19);
console.log(Number("Aadarsh"));
console.log(String(24));

//Type coercion
console.log("I am" + 23 + "years old"); // + operator converts the addition of string & number to a String
console.log("58" - "8" - 5); // - operator coverts the string(which can be converted to number) to a number, else returns NaN
console.log("56" * 3); // * and / operators expects a number or a string that can be coverted to number, and does the normal * and / operations resp. else returns NaN
console.log("a" * 3); // returns NaN

/* comparison operator */
// -Boolean values true and false are converted to 1 and 0 respectively.
// -null is converted to 0.
// -undefined is converted to NaN.
// -Strings are converted based on the values they contain, and are     converted as NaN if they do not contain numeric values.

console.log("e" > "a"); // checks UNICODE value

console.log("2" < "3"); // strings will get converted to numbers on both sides, and is compared, see below cases if either side is found NaN

//since NaN on either side, it returns false
console.log("hello" < 5); // false
console.log("hello" > 5); //false

//undefined gets converted to NaN
console.log(undefined < 3); // false
console.log(3 < undefined); // false

//values- Null: 0, true:1, false:0
console.log(true < 1); // false
console.log(null < 1); // true

//////////////////////////Exercise///////////////////////
let a = "1" + 1;
a = a - 1;
console.log(a); //outputs:10

console.log(2 + 3 + 4 + "5"); //outputs:95
console.log("10" - "4" + "5"); //outputs:65
console.log("10" - "4" + 5); //outputs:11
console.log("10" - "4" - "5" + 9 + 6 + 4); //outputs:20
console.log("10" - "4" - "5" + "9" + 6 + 4); //outputs:1964
console.log("10" - "4" - "5" + "9" - 8 + 6 + 4); // outputs:21
