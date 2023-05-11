export function degTextRead(degText) {
  var degTextEl = document.querySelector("#DegText");
  degTextEl.innerHTML = degText;
}
export function setCompassLeftOrder(order) {
  setTimeout(() => {
    document.querySelector("#compassLeftSvg").parentElement.style.order = order;
  }, 200);
}

export function cogRotate(cog) {
  setTimeout(() => {
    cog -= 20;
    var cogEl = document.querySelector("#COG");
    cogEl.setAttribute("transform", "rotate(" + cog + ", 256, 364)");
  }, 200);
}

export function hdgRotate(hdg) {
  setTimeout(() => {
    hdg -= 25;
    var hdgEl = document.querySelector("#HDG");
    hdgEl.setAttribute("transform", "rotate(" + hdg + ", 256, 364)");
  }, 200);
}

export function setpointRotate(setpoint) {
  setTimeout(() => {
    setpoint -= 30;
    var setpointEl = document.querySelector("#Setpoint_5");
    setpointEl.setAttribute("transform", "rotate(" + setpoint + ", 256, 364)");
  }, 200);
}

export function headingRotate(heading) {
  setTimeout(() => {
    heading -= 35;
    var headingEl = document.querySelector("#Heading");
    headingEl.setAttribute("transform", "rotate(" + heading + ", 256, 364)");
  }, 200);
}

export function currentRotate(current) {
  setTimeout(() => {
    current -= 40;
    var currentEl = document.querySelector("#Current");
    currentEl.setAttribute("transform", "rotate(" + current + ", 256, 364)");
  }, 200);
}
