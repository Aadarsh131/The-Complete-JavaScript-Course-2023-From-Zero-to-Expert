/////////////////DEFAULT Parameters////////////////

"use strict";
const tickets = [];

const createTicket = function (
  flightName,
  passengers = 1,
  price = 5000 * passengers || "No passengers" //SHORT CIRCUITING, if the value of the left operand is falsy value, then the right operand will be used (Note: operator must be ||), but ofcourse this still comes under default parameter(meaning, user can change value by passing a desired argument value)
) {
  const bookings = {
    flightName,
    passengers,
    price,
  };
  tickets.push(bookings);
};

createTicket("Flight 1", undefined, 5000);

console.log(tickets);
