export function steeringStartUp() {
  var time = 7000;
  var svgSteering = document.querySelector("#steeringSvg");

  function wolCountdown() {
    setInterval(() => {
      if (time >= 1) {
        let hours = time / 1000 / 60 / 60;
        hours = Math.trunc(hours);
        let minutes = time / 1000 / 60;
        minutes = Math.trunc(minutes);
        let seconds = time / 1000;
        seconds = Math.trunc(seconds);
        console.log(
          time + ":" + hours + "H :" + minutes + "M :" + seconds + "S"
        );
        timeToWOLR.innerHTML = `${hours}:${minutes}:${seconds}`;
        distanceToWOLL.innerHTML = `${seconds}`;
        timeToWOLL.innerHTML = `${seconds}`;
        distanceToWOLR.innerHTML = `${seconds}`;
        time -= 1000;
      }
      if (time < 1) {
        time = 7000;
        console.log(time);
      }
    }, 1000);
  }
}
export function steeringCourseValL(courseValL) {
  setTimeout(() => {
    var courseValLEl = document.querySelector("#CourseValLeft");
    courseValLEl.innerHTML = courseValL;
  }, 200);
}

export function steeringDistanceToWolL(distanceToWOLL) {
  setTimeout(() => {
    var distanceToWOLLEl = document.querySelector("#distanceToWOLLeft");
    distanceToWOLLEl.innerHTML = distanceToWOLL;
  }, 200);
}

export function steeringTimeToWolL(timeToWolL) {
  setTimeout(() => {
    var timeToWolLEl = document.querySelector("#timeToWOLLeft");
    timeToWolLEl.innerHTML = timeToWolL;
  }, 200);
}

export function steeringCourseValR(courseValR) {
  setTimeout(() => {
    var courseValREl = document.querySelector("#courseValRight");
    courseValREl.innerHTML = courseValR;
  }, 200);
}

export function steeringRotValR(RotValR) {
  setTimeout(() => {
    var RotValREl = document.querySelector("#RadiusValRight");
    RotValREl.innerHTML = RotValR;
  }, 200);
}

export function steeringNextCourseValR(nextCourseValR) {
  setTimeout(() => {
    var nextCourseValREl = document.querySelector("#NextCourseValRight");
    nextCourseValREl.innerHTML = nextCourseValR;
  }, 200);
}

export function steeringDistanceToWolR(distanceToWolR) {
  setTimeout(() => {
    var distanceToWolREl = document.querySelector("#distanceToWOLRight");
    distanceToWolREl.innerHTML = distanceToWolR;
  }, 200);
}

export function steeringTimeToWolR(timeToWolR) {
  setTimeout(() => {
    var timeToWolREl = document.querySelector("#timeToWOLRight");
    timeToWolREl.innerHTML = timeToWolR;
  }, 200);
}
export function setSteeringModeOrder(order) {
  setTimeout(() => {
    document.querySelector("#steeringSvg").parentElement.style.order = order;
  }, 200);
}
