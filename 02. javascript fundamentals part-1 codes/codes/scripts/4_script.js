///////////////////Strict equality(===)///////////////
// The most notable difference between strict equality(===) operator and the equality (==) operator is that if the operands are of different types, the == operator attempts to convert them to the same type before comparing.

console.log(Infinity === Infinity); //true
console.log(undefined === undefined); //true
console.log(null === null); //true
console.log(NaN === NaN); //NaN on either side returns false

const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true

console.log(true === 1); // false
console.log(null === undefined); // false
console.log(3 === new Number(3)); // false
console.log(+0 === -0); //true
console.log(123 === 123.0); // true
