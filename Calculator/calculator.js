let currDisplay = "";
function buttonClicked(digitOperator) {
  if (digitOperator >= 0 && digitOperator <= 9) {
    currDisplay += String(digitOperator);
    document.getElementById("display").innerText = currDisplay;
  }

}
