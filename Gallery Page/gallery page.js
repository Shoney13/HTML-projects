let currExpand = "p";
let takeInput = true;
function panelClick(id) {
  // document.getElementById(currExpand).style.flex=1;
  // document.getElementById(id).style.flex=6;
  if (takeInput) {
    if (currExpand == id) return panelEqualize(id);
    console.log(1);
    if (currExpand == "p") return panelExpand(id);
    console.log(2);
    panelSwitch(id);
    console.log(3);
  }
}

// Switching Between the current Open to the next one we want to open
function panelSwitch(id) {
  takeInput = false;
  let currOpen = document.getElementById(currExpand);
  let currClose = document.getElementById(id);
  document.querySelector("#" + currExpand + " h3").style.opacity = 0;
  // document.querySelector('#'+id+" h3").style.opacity=1;
  let textOpacity = document.querySelector("#" + id + " h3");
  textOpacity.style.opacity = 0;
  var plus = 1;
  var minus = 6;
  // Closing Current and Opening New one
  let flexTimer = setInterval(function () {
    if (plus >= 6 || minus <= 1) {
      currOpen.style.flex = 1;
      currClose.style.flex = 6;
      clearInterval(flexTimer);
    } else {
      plus += 0.05;
      minus -= 0.05;
      currOpen.style.flex = minus;
      currClose.style.flex = plus;
    }
  }, 1);
  // Making the text appear;
  let currOpacity = 0;
  let opacityTimer = setInterval(function () {
    if (currOpacity >= 1) {
      textOpacity.style.opacity = 1;
      takeInput = true;
      clearInterval(opacityTimer);
    } else {
      currOpacity += 0.1;
      textOpacity.style.opacity = currOpacity;
    }
  }, 50);

  currExpand = id;
}

// Opening A new one When all are closed
function panelExpand(id) {
  takeInput = false;
  let currClose = document.getElementById(id);
  // document.querySelector("#" + currExpand + " h3").style.opacity = 0;
  // document.querySelector('#'+id+" h3").style.opacity=1;
  let textOpacity = document.querySelector("#" + id + " h3");
  textOpacity.style.opacity = 0;
  var plus = 1;
  // Opening Panel
  let flexTimer = setInterval(function () {
    if (plus >= 6) {
      currClose.style.flex = 6;
      clearInterval(flexTimer);
    } else {
      plus += 0.05;
      currClose.style.flex = plus;
    }
  }, 1);
  // Making text appear
  let currOpacity = 0;
  let opacityTimer = setInterval(function () {
    if (currOpacity >= 1) {
      textOpacity.style.opacity = 1;
      takeInput = true;
      clearInterval(opacityTimer);
    } else {
      currOpacity += 0.1;
      textOpacity.style.opacity = currOpacity;
    }
  }, 50);

  currExpand = id;
}

// Closing the currently opened one when clicked on
function panelEqualize(id) {
  takeInput = false;
  let currOpen = document.getElementById(currExpand);
  document.querySelector("#" + currExpand + " h3").style.opacity = 0;
  // document.querySelector('#'+id+" h3").style.opacity=1;
  let textOpacity = document.querySelector("#" + id + " h3");
  textOpacity.style.opacity = 1;
  var minus = 6;

  let flexTimer = setInterval(function () {
    if (minus <= 1) {
      currOpen.style.flex = 1;
      clearInterval(flexTimer);
    } else {
      minus -= 0.05;
      currOpen.style.flex = minus;
    }
  }, 1);

  let currOpacity = 1;
  let opacityTimer = setInterval(function () {
    if (currOpacity <= 0) {
      textOpacity.style.opacity = 0;
      takeInput = true;
      clearInterval(opacityTimer);
    } else {
      currOpacity -= 0.1;
      textOpacity.style.opacity = currOpacity;
    }
  }, 40);

  currExpand = "p";
}
