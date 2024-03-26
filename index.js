const displayScreen = document.querySelector("#screen");
const number = document.querySelector(".number");
const operator = document.querySelector(".operator");

let operateFunctions = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

let add = "+";
let subtract = "-";
let multiply = "*";
let divide = "/";

function operate(operator, num1, num2) {
  return operateFunctions[operator](num1, num2);
}


  number.addEventListener("click", () => {
    displayScreen.textContent = number.getAttribute("name");
  });
  operator.addEventListener("click", () => {
    displayScreen.textContent = operator.getAttribute("name");
  });

