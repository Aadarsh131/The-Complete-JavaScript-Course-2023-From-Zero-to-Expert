/////////////////////IIFE and data encapsulation///////////////////

(function () {
  console.log("This will be called once");
})();

(() => {
  console.log("This arrow func will be also be called once");
})();

{
  const isPrivate = 87; //data is encapsulated in this block
}
console.log(isPrivate); // Not accessible
