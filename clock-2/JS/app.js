function getClock() {
  return (document.getElementById("Clock").innerText =
    new Date().toLocaleTimeString("en", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }));
}

setInterval(getClock, 1000);

function getDayOfTheWeek() {
  return new Date().toLocaleDateString("en", { weekday: "long" });
}

function getFormattedDate() {
  return new Date().toLocaleDateString();
}

window.addEventListener("load", () => {
  document.getElementById("Day").innerText = getDayOfTheWeek();
  document.getElementById("Date").innerText = getFormattedDate();
});
