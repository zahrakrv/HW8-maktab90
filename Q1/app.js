`use strict`;
// let user = { family: "bary", age: 20 };
// function func() {
//   return function () {
//     this.name = "Jack";
//     return this;
//   }.bind(user);
// }
// let result = func();
// console.log(result());

const user = {};
function func(key) {
  return function (value) {
    this.key = value;
    return this;
  };
}
const nameSetter = func("name");
nameSetter.call(user, "Jack");
console.log(user);
