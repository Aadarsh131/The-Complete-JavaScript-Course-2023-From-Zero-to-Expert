const weekdays = ["mon", "tue", "wed", "thu", "frid", "sat", "sun"];
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    //we can set a property name into a string literal also, using []
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
    [`${weekdays[6]}(WeekOFF)${1 + 2}`]: {
      //Property name as string literal
      open: 0,
      close: 24,
    },
  },

  // ES6 enhanced object literals
  //   openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

///////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating variables
let l = 111;
let m = 999;
const obj = { l: 23, m: 7, n: 14 };
// {l,m} = obj; //unexpected token, hence, providing a () to eliminate the error
({ l, m } = obj);
console.log(l, m);
// Nested objects
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(fri, op, cl);

//////////////////
//try more for arrays inside the objects

//NOTE: Destructuting will make a new Object/Array, so the original object/Array will not be touched, unlike normal reference types
// const arr = [1, 2];
// const arrCopyWithDestructuring = [...arr];
// const arrCopy = arr;
// arr.push(4);
// arrCopyWithDestructuring.push(5);
// console.log(arr, arrCopy, arrCopyWithDestructuring);

/////////////////////////////////////
//left topics: SPREAD, REST, Short circuiting, nullish coalescing operator,for-of loop, optional chaining(__?), Looping Objects- Object Keys,values and entries, challenges, SET, MAPS, strings, string methods,challenges
