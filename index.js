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
      numButtonCounter += 1;
    } else {
      let num = button.textContent;
      displayScreen.textContent += num;
    }
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (numButtonCounter > 0) {
      if (operator !== "") {
        operatorButton.disabled = true;
        number2 = parseFloat(displayScreen.textContent);
        displayScreen.textContent = String(operate(operator, number1, number2));
        operator = btn.textContent;
        number1 = parseInt(displayScreen.textContent);
        numButtonCounter = 0;
      } else {
        btn.disabled = true;
        number1 = parseFloat(displayScreen.textContent);
        operator = btn.textContent;
        numButtonCounter = 0;
      }
    }
  });
});
