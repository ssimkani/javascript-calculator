const displayScreen = document.querySelector("#screen");
const numberButton = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");

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

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    let num = button.textContent;
    displayScreen.textContent = num;
  });
});
