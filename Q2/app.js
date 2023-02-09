`use strict`;
// const creator = function(element,func){
function creator(element, func) {
  element = document.createElement(element);
  document.body.appendChild(element);
  func(element);
}
function callBack(element) {
  element.style.backgroundColor = "red";
  element.style.width = "200px";
  element.style.height = "300px";
  element.style.padding = "20px 100px";
}
creator("div", callBack);
