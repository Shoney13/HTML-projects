let currExpand = "p1";
function panelExpand(id) {
  // document.getElementById(currExpand).style.flex=1;
  // document.getElementById(id).style.flex=6;
  if (currExpand == id) return;
  let currOpen = document.getElementById(currExpand);
  let currClose = document.getElementById(id);
  document.querySelector('#'+currExpand+" h3").style.opacity=0;
  // document.querySelector('#'+id+" h3").style.opacity=1;
  let textOpacity=document.querySelector('#'+id+" h3");
  textOpacity.style.opacity=0;
  var plus = 1;
  var minus = 6;

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
      console.log(currOpen.style.flex + " " + currClose.style.flex);
      console.log(plus+" "+minus);
    }
  }, 1);

  let currOpacity=0;
  let opacityTimer = setInterval(function () {
    if (currOpacity>=1) {
      textOpacity.style.opacity=1;
      clearInterval(opacityTimer);
    } else {
      currOpacity+=0.1;
      textOpacity.style.opacity=currOpacity;
    }
  }, 50);

  currExpand = id;
}
