`use strict`
let user = {family:"bary", age:20}
function func(){
return function(){
    this.name = "Jack"
    return user
}.bind(user)
}
let result = func()
console.log(result());