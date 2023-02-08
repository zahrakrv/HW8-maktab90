`use strict`;
let newObj = {};
function func() {
  return function () {
    let user = { family: "bary", age: 20 };
    user.name = "Jack";
    // this.name = "Jack";
    return user;
  };
}
let result = func();
console.log(result());
