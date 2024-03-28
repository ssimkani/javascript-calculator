const displayScreen = document.querySelector("#screen");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const positiveNegative = document.querySelector("#positive-negative");
const percent = document.querySelector("#percent");
const decimalPoint = document.querySelector("#decimal-point");

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

const round = (number) => parseFloat(number.toFixed(6));

function operate(operator, num1, num2) {
  let result = operateFunctions[operator](num1, num2);
  return String(round(result));
}

let number1 = "";
let number2 = "";
let operator = "";
let num = "";
let firstClickNum = false;

clear.addEventListener("click", () => {
  displayScreen.textContent = "0";
  number1 = "";
  number2 = "";
  operator = "";
  num = "";
  firstClickNum = false;

  operatorButton.forEach((btn) => {
    btn.disabled = false;
  });
  decimalPoint.disabled = false;
});

percent.addEventListener("click", () => {
  num = parseFloat(displayScreen.textContent);
  num /= 100;
  displayScreen.textContent = num.toString();
});

positiveNegative.addEventListener("click", () => {
  num = parseFloat(displayScreen.textContent);
  num *= -1;
  displayScreen.textContent = num.toString();
});

decimalPoint.addEventListener("click", () => {
  displayScreen.textContent = displayScreen.textContent.concat(".");
  num = displayScreen.textContent;
  decimalPoint.disabled = true;
});

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstClickNum) {
      displayScreen.textContent = button.textContent;
      firstClickNum = true;
    } else {
      displayScreen.textContent += button.textContent;
    }
    num = displayScreen.textContent;

    operatorButton.forEach((btn) => {
      btn.disabled = false;
    });
    decimalPoint.disabled = false;
  });
});

operatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (firstClickNum) {
      if (operator !== "") {
        number2 = num;
        if (operator === "/" && parseFloat(number2) === 0) {
          displayScreen.textContent = "Seriously?";
          firstClickNum = false;
          operator = btn.textContent;
          decimalPoint.disabled = true;
          return;
        }
        displayScreen.textContent = String(
          operate(operator, parseFloat(number1), parseFloat(number2))
        );
        number1 = displayScreen.textContent;
      } else {
        number1 = num;
      }
      operatorButton.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.disabled = true;
        }
      });
      firstClickNum = false;
      operator = btn.textContent;
      decimalPoint.disabled = true;
    }
  });
});

equal.addEventListener("click", () => {
  if (firstClickNum && operator !== "") {
    number2 = num;
    if (operator === "/" && parseFloat(number2) === 0) {
      displayScreen.textContent = "Seriously?";
      operator = "";
      decimalPoint.disabled = true;
      firstClickNum = false;
      return;
    }
    displayScreen.textContent = String(
      operate(operator, parseFloat(number1), parseFloat(number2))
    );
    operator = "";
    decimalPoint.disabled = false;
    firstClickNum = false;
  }
});
