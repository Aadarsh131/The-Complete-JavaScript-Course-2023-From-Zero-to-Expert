///////////////////Passing values in functions(Primitive vs Reference types)//////////////
const name = "Aadarsh Kumar Shah";
const studentDetail = {
  class: 10,
  school: "K.V Bengdubi",
};
const Introduce = function (name, studentDetail) {
  //while passing as a parameter, primitive type variables will make new copies of its variables while Reference types will not be copied, a reference will be carried on
  name = "Mr" + name.toUpperCase();
  studentDetail.class = "X";
  studentDetail.school = "Kendriya Vidyalaya Bengdubi";
};
Introduce(name, studentDetail);
console.log(name); //Primitive type, hence it will not change
console.log(studentDetail); //Reference type, hence it will change
