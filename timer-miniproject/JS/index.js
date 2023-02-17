let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let display = document.getElementById("timer");

function timer() {
  seconds++;

  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }

  if (minutes > 59) {
    hours++;
    minutes = 0;
  }

  if (hours > 23) {
    hours = 0;
  }

  let hoursStr = hours.toString().padStart(2, "0");
  let minutesStr = minutes.toString().padStart(2, "0");
  let secondsStr = seconds.toString().padStart(2, "0");

  document.getElementById(
    "timer"
  ).innerText = `${hoursStr}:${minutesStr}:${secondsStr}`;
}

document.getElementById("buttons").addEventListener("click", (e) => {
  e = e.target.id;

  if (e == "start") {
    interval = setInterval(timer, 1000);
    display.classList.remove("text-red-600");
  }

  if (e == "pause") {
    clearInterval(interval);
    display.classList.add("text-red-600");

    if (display.innerText == "00:00:00") {
      display.classList.remove("text-red-600");
    }
  }

  if (e == "reset") {
    hours = 0;
    minutes = 0;
    seconds = 0;

    display.classList.remove("text-red-600");

    display.innerText = "00:00:00";
  }
});
