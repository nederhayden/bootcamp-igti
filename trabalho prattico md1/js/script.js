window.addEventListener("load", start);

let red = 0;
let green = 0;
let blue = 0;

function start() {
  let outElement = document.querySelector("#box");

  var redInput = document.querySelector("#Vermelho");
  var greenInput = document.querySelector("#Verde");
  var blueInput = document.querySelector("#Azul");

  redInput.addEventListener("input", function () {
    red = event.target.value;
    outElement.style.backgroundColor = `rgb(${red}, ${green},${blue} )`;
    document.getElementById("inputValueRed").setAttribute("value", red);
  });
  greenInput.addEventListener("input", function () {
    green = event.target.value;
    outElement.style.backgroundColor = `rgb(${red}, ${green},${blue} )`;
    document.getElementById("inputValueGreen").setAttribute("value", green);
  });
  blueInput.addEventListener("input", function () {
    blue = event.target.value;
    outElement.style.backgroundColor = `rgb(${red}, ${green},${blue} )`;
    document.getElementById("inputValueBlue").setAttribute("value", blue);
  });
}
