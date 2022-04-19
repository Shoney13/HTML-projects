var displayArea = document.getElementById("display");
var currDisplay = "0";
var lastValue = "0";
var decimalUsed = false;

function isOperator(operator) {
  return (
    operator == "+" ||
    operator == "-" ||
    operator == "*" ||
    operator == "/" ||
    operator == "%"
  );
}

function calculateDisplay(operator) {
  if (operator == "%") displayArea.innerText += "/100";
  console.log(eval(currDisplay));
  currDisplay = parse(displayArea.innerText);
  displayArea.innerText = currDisplay;
}

function parse(str) {
  return Function(` return (${str})`)();
}

function isNumber(operator) {
  return operator >= 0 && operator <= 9;
}

function buttonClicked(operator) {
  if (operator == "=") {
    calculateDisplay(operator);
    return;
  }

  if (operator == "%") {
    calculateDisplay(operator);
    lastValue=currDisplay.charAt(currDisplay.length-1);
    return;
  }

  if (operator == "CLR") {
    currDisplay = "0";
    lastValue = "0";
    decimalUsed = false;
    displayArea.innerText = currDisplay;
    return;
  }

  if (operator == "DEL") {
    if (currDisplay == "0") return;
    currDisplay = currDisplay.slice(0, currDisplay.length - 1);
    if (currDisplay == "") currDisplay = "0";
    displayArea.innerText = currDisplay;
    return;
  }

  if (isOperator(operator) && isOperator(lastValue)) {
    currDisplay = currDisplay.slice(0, currDisplay.length - 1) + operator;
    displayArea.innerText = currDisplay;
    return;
  }
  if (lastValue == "." && (isOperator(operator) || operator == ".")) return;

  if (isOperator(lastValue) && (operator == "." || operator == "00")) return;
  lastValue = operator;

  if (currDisplay == "0" && (operator == "00" || isOperator(operator))) return;
  if (currDisplay == "0" && operator != ".") currDisplay = "";

  if (isOperator(operator)) decimalUsed = false;

  if (operator == ".") {
    if (decimalUsed) return;
    decimalUsed = true;
  }

  currDisplay += operator;
  displayArea.innerText = currDisplay;
}
