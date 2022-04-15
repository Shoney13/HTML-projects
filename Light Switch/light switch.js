function changeBulb() {
  var switchBulb = document.getElementById("bulbButton").innerText;
  if (switchBulb == "Turn On") {
    document.getElementById("bulbimg").src =
      "https://www.w3schools.com/js/pic_bulbon.gif";
    document.getElementById("bulbButton").innerText = "Turn Off";
    // document.body.style.background = "white";
    document.getElementById("bulbButton").className = "btn btn-info";
    lightChange("white");
    return;
  }
  document.getElementById("bulbimg").src =
    "https://www.w3schools.com/js/pic_bulboff.gif";
  document.getElementById("bulbButton").innerText = "Turn On";
  // document.body.style.background = "black";
  document.getElementById("bulbButton").className = "btn btn-outline-info";
  lightChange("black");
}

function lightChange(switchLight) {
  let id = null;
  const elem = document.getElementById("block");
  clearInterval(id);

  if (switchLight == "white") {
    elem.style.background = "white";
    let wid = 0;
    id = setInterval(frame, 1);
    function frame() {
      if (wid == 100) {
        clearInterval(id);
      } else {
        wid++;
        elem.style.width = wid + "%";
        elem.style.height = wid + "%";
      }
    }
  } else {
    elem.background = switchLight;
    let wid = 100;
    id = setInterval(frame, 1);
    function frame() {
      if (wid == 00) {
        clearInterval(id);
      } else {
        wid--;
        elem.style.width = wid + "%";
        elem.style.height = wid + "%";
      }
    }
  }
}
