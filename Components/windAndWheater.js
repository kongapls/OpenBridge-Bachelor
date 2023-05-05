export function windStartUp() {
  var windButtons = document.querySelectorAll("#tab-item");
  var svgWind = document.querySelector("#svgWind");
  var svgWeather = document.querySelector("#svgWeather");
  var weatherButtons = document.querySelectorAll("#tab-item_2");

  windButtons.forEach((buttonElement) => {
    buttonElement.style.cursor = "pointer";
    buttonElement.addEventListener("click", function () {
      console.log("clicked wind.");
      svgWind.style.display = "inline";
      svgWeather.style.display = "none";
    });
  });
  weatherButtons.forEach((buttonElement) => {
    buttonElement.style.cursor = "pointer";
    buttonElement.addEventListener("click", function () {
      console.log("clicked weather.");
      svgWind.style.display = "none";
      svgWeather.style.display = "inline";
    });
  });
}

export function windWindRotate(windDir) {
  setTimeout(() => {
    windDir -= 35;
    var windDirEl = document.querySelector("#windAndWheaterFrame_331");
    console.log(windDir);
    windDirEl.setAttribute("transform", "rotate(" + windDir + ",181,116)");
  }, 200);
}

export function windNorthRotate(northDir) {
  setTimeout(() => {
    northDir += 32;
    var northDirEl = document.querySelector("#windAndWheaterWatchface");

    northDirEl.setAttribute("transform", "rotate(" + northDir + ", 181, 116)");
  }, 200);
}

export function windSetDirV(dirValue) {
  setTimeout(() => {
    var windDirection = document.querySelector("#windDirection");
    windDirection.innerHTML = dirValue;

    dirValue -= 26;
    var windRotCircular = document.querySelector("#ROT-Circular");
    windRotCircular.setAttribute(
      "transform",
      "rotate(" + dirValue + ", 181, 116)"
    );
  }, 200);
}

export function windSetSpeed(speedKn) {
  setTimeout(() => {
    var speedKnEl = document.querySelector("#windSpeed");
    speedKnEl.innerHTML = speedKn;
  }, 200);
}

export function wheaterAirTemp(airTemp) {
  setTimeout(() => {
    var wheaterAirTempEl = document.querySelector("#wheaterAirTemp");
    wheaterAirTempEl.innerHTML = airTemp;
  }, 200);
}

export function wheaterHumidity(humidity) {
  setTimeout(() => {
    var wheaterHumidityEl = document.querySelector("#wheaterHumidity");
    wheaterHumidityEl.innerHTML = humidity;
  }, 200);
}

export function wheaterPressure(pressure) {
  setTimeout(() => {
    var wheaterPressureEl = document.querySelector("#wheaterPressure");
    wheaterPressureEl.innerHTML = pressure;
  }, 200);
}
