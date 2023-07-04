//////////higher order function/////////////
// (HOF are either fn passed to another fn OR fn returning another fn)

// const GreatWithName = (a) => {
//   return (b) => {
//     console.log(`${a} ${b}`);
//   };
// };

const GreatWithName = (a) => (b) => console.log(`${a} ${b}`); //HOF using arrow function

const GreetingTo = GreatWithName("hey");
GreetingTo("Aadarsh");
GreetingTo("Priya");

GreatWithName("hello")("Atul");
