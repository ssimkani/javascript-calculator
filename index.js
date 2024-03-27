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
let counter = 0;
displayScreen.textContent = "";

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    let num = button.textContent;
    displayScreen.textContent += num;
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    counter += 1;
    if (counter < 2) {
      number1 = parseInt(displayScreen.textContent);
      operator = btn.textContent;
      displayScreen.textContent = "";
    } else {
      let number2 = parseInt(displayScreen.textContent);
      displayScreen.textContent = String(operate(operator, number1, number2));
      operator = btn.textContent;
      number1 = parseInt(displayScreen.textContent);
      counter = 1;
      displayScreen.textContent = ""
    }
  });
});
