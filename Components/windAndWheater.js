
  var windButtons = document.querySelectorAll("#tab-item");
  var svgWind = document.querySelector("#svgWind");
  var svgWeather = document.querySelector("#svgWeather");
  var weatherButtons = document.querySelectorAll("#tab-item_2");
  var degText = document.querySelector("#DegText");
  var windSpeed = document.querySelector("#windSpeed");
  var windDirection = document.querySelector("#windDirection");
  var windRotCircular = document.querySelector("#ROT-Circular");
  var DirValue = 70;

  windSpeed.innerHTML = svgWind.parentElement.dataset.windspeed;
  windDirection.innerHTML = svgWind.parentElement.dataset.winddir;

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


  windRotCircular.setAttribute(
    "transform",
    "rotate(" + DirValue + ", 181, 116)"
  );

