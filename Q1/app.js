`use strict`;
let user = { family: "bary", age: 20 };
function func() {
  return function () {
    this.name = "Jack";
    return this;
  }.bind(user);
}
let result = func();
console.log(result());
