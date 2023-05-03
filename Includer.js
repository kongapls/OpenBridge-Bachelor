import file from './components.json' assert {type: 'json'};

var container = document.querySelector(".container");

file.components.forEach(component => {
  switch (component.name) {
    case "windAndWeather":
      container.innerHTML += `<div data-windspeed="${component.speed}" data-winddir="${component.direction}" w3-include-html="./Components/windAndWeather.html"></div>`
      setTimeout(() => {
        addScript("./Components/windAndWheater.js");
      }, 20);
      break;
    case "compass_left":
      container.innerHTML += '<div w3-include-html="./Components/Compass_left.html" style="width:26%"></div>'
      break;  
  } 
  console.log(component);
});

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
  function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
  }
  
includeHTML();
