const displayScreen = document.querySelector("#screen");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

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
let num;
let firstClickNum = false;

clear.addEventListener("click", () => (displayScreen.textContent = ""));

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstClickNum) {
      displayScreen.textContent = button.textContent;
      firstClickNum = true;
    } else {
      displayScreen.textContent += button.textContent;
    }
    num = displayScreen.textContent;
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (firstClickNum) {
      if (operator !== "") {
        number2 = num;
        displayScreen.textContent = String(
          operate(operator, parseFloat(number1), parseFloat(number2))
        );
        number1 = displayScreen.textContent;
      } else {
        number1 = num;
      }
      firstClickNum = false;
      operator = btn.textContent;
    }
  });
});

equal.addEventListener("click", () => {
  if (firstClickNum) {
    if (operator !== "") {
      number2 = num;
      displayScreen.textContent = String(
        operate(operator, parseFloat(number1), parseFloat(number2))
      );
      operator = "";
    } else {
      displayScreen.textContent = num;
    }
  }
});
