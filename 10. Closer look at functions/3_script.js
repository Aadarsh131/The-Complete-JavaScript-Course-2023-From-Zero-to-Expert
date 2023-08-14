////////////////////////Call, bind, apply methods//////////////

let details = {
  name: "Aadarsh",
  designation: "software developer",
  introduce(workingHours = 8, lunchTime = 1) {
    console.log(
      `Hi, I am ${this.name}, a ${this.designation}, works for ${workingHours} hours, eats for ${lunchTime} hours`
    );
  },
};
details.introduce(9);

const introduction = details.introduce; //we can copy the function like this, as Functions are just "first class functions"(i.e, functions can be defined as values/objects )

//it will NOT work
introduction(); //output: 'undefined' in place of 'this'

//call method
introduction.call({ name: "atul", designation: "UI developer" }, 10); //call method sets the 'this' to the first object passed

//apply method
introduction.apply({ name: "priya", designation: "teacher" }, [10, 3]); //apply method expects an array as the second argument

//NOTE: we can also use call operator and use the destructuring operator instead of array, hence, we no longer need the apply method, below is the example-
introduction.call({ name: "priya", designation: "teacher" }, ...[10, 3]); //destructuring the array

//bind method(returns a function with 'this' keyword set to the object passed)
const resultOfBindMethod = introduction.bind({
  name: "Dragon",
  designation: "Destroyer",
});
resultOfBindMethod(10, 5);
