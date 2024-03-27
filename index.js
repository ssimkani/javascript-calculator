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
let operatorCounter = 0;
let numButtonCounter = 0;

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (numButtonCounter === 0) {
      displayScreen.textContent = button.textContent;
      numButtonCounter += 1;
    } else {
      let num = button.textContent;
      displayScreen.textContent += num;
    }
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    operatorCounter += 1;
    if (operatorCounter < 2) {
      number1 = parseInt(displayScreen.textContent);
      operator = btn.textContent;
      numButtonCounter = 0;
    } else {
      number2 = parseInt(displayScreen.textContent);
      displayScreen.textContent = String(operate(operator, number1, number2));
      operator = btn.textContent;
      number1 = parseInt(displayScreen.textContent);
      operatorCounter = 1;
      numButtonCounter = 0;
    }
  });
});
