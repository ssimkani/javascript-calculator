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

let clicked = false;
let counter = 0;
displayScreen.textContent = "";
if (!clicked) {
  numberButton.forEach((button) => {
    button.addEventListener("click", () => {
      let num = button.textContent;
      displayScreen.textContent += num;
    });
  });
}

operatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    clicked = true;
    counter += 1
    let number1 = displayScreen.textContent;
    displayScreen.textContent = "";
    let operator = operatorButton.textContent;
  });
});

if (clicked) {
  numberButton.forEach((button) => {
    button.addEventListener("click", () => {
      let num = button.textContent;
      displayScreen.textContent += num;
    });
  });
}
