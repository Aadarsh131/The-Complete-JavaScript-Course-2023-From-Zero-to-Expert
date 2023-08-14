//////////////////////////Objects////////////////////

//dot vs bracket notation
const obj = {
  name: "Aadarsh",
  arr: [1, 2, 3],
  age: 23,
};

console.log(obj.name, "using dot notation");
console.log(obj["na" + "me"], "using bracket notation"); //bracket notation

obj.fame = null;
obj["class"] = "high";
console.log(obj);

//////////////////////Exercises/////////////////
const jonas = {
  firstname: "jonas",
  lastname: "das",
  birthyear: 1995,
  job: "unemployed",
  friends: ["manju", "sanju", "ganju"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2022 - this.birthyear; //'this' refers to the object that is calling the method
    return this.age;
  },

  description: function () {
    return `${this.firstname} is ${this.calcAge()} years old and has ${
      this.hasDriverLicense ? "a" : "no"
    } DrivingLicense`;
  },
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"]()); //using bracket notation
console.log(jonas.age); //since, we stored the result in a new property(age),we do not have to call the calcAge() method again and again to find the age
console.log(jonas.description());
