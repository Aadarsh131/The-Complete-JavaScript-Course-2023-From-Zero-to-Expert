////////////////////closure/////////////////////
let passengerCount = 20; // closure has priority over scope chain, hence this variable was not used inside the return nested function
const incPassenger = function () {
  //   debugger;
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};
// debugger;
let booker = incPassenger();
booker();
booker();

console.dir(incPassenger); //why there is not [[scopes]] object in the output
