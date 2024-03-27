const displayScreen = document.querySelector("#screen");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");

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
let number1 = "";
let number2 = "";
let operator = "";
let firstClickNum = false;
let firstClickOperator = false;

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstClickNum) {
      displayScreen.textContent = button.textContent;
      firstClickNum = true;
    } else {
      displayScreen.textContent += button.textContent;
    }
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (firstClickNum) {
      if (!firstClickOperator) {
        number1 = displayScreen.textContent;
      } else {
        number2 = displayScreen.textContent;
        displayScreen.textContent = String(
          operate(operator, parseFloat(number1), parseFloat(number2))
        );
        number1 = displayScreen.textContent;
      }
      firstClickOperator = true;
      firstClickNum = false;
      operator = btn.textContent;
    }
  });
});
