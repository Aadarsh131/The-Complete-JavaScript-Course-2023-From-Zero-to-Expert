/////////////////DEFAULT Parameters////////////////

"use strict";
const tickets = [];

const createTicket = function (
  flightName,
  passengers = 1,
  price = 5000 * passengers || "No passengers"
) {
  return {
    flightName,
    passengers,
    price,
  };
};
let passenger1 = createTicket("Flight 1");

tickets.push(passenger1);
console.log(tickets);
