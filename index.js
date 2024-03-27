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
let numButtonCounter = 0;

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (numButtonCounter === 0) {
      displayScreen.textContent = button.textContent;
    } else {
      displayScreen.textContent += button.textContent;
    }
    numButtonCounter += 1;
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (numButtonCounter > 0) {
      if (operator !== "") {
        number2 = displayScreen.textContent;
        displayScreen.textContent = String(
          operate(operator, parseFloat(number1), parseFloat(number2))
        );
        number1 = displayScreen.textContent;
      } else {
        number1 = displayScreen.textContent;
      }
      operator = btn.textContent;
      numButtonCounter = 0;
    }
  });
});
