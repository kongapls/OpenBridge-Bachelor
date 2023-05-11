export function speedSetTrueSpeed(trueSpeed) {
  setTimeout(() => {
    trueSpeed += 25;
    var trueSpeedEl = document.querySelector("#True");
    trueSpeedEl.setAttribute(
      "transform",
      "rotate(" + trueSpeed + ", 128, 128)"
    );
  }, 200);
}
export function speedSetRelativeSpeed(relativeSpeed) {
  setTimeout(() => {
    relativeSpeed += 40;
    var relativeSpeedEl = document.querySelector("#Relative");
    relativeSpeedEl.setAttribute(
      "transform",
      "rotate(" + relativeSpeed + ", 128, 128)"
    );
  }, 200);
}

export function speedSetShipRotation(shipRotate) {
  setTimeout(() => {
    shipRotate += 18;
    var speedShipEl = document.querySelector("#speedShip");
    speedShipEl.setAttribute(
      "transform",
      "rotate(" + shipRotate + ", 128, 128)"
    );
  }, 200);
}
export function setSpeedRelativeOrder(order) {
  setTimeout(() => {
    document.querySelector("#speedRelativeSvg").parentElement.style.order =
      order;
  }, 200);
}
