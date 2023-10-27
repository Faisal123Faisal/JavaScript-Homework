var header = document.getElementById("header");
var color = document.getElementById("color");
var submit = document.getElementById("submit");
function changeColor() {

  var newColor = color.value;
  header.style.color = newColor;
}

submit.addEventListener("click", changeColor);