const day = document.querySelector(".day");
const time = document.querySelector(".time");
const getCurrentTime_Day = function () {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  time.textContent = now
    .toUTCString()
    .split(" ")[4]
    .split(":")
    .slice(0, 2)
    .join(":");
  day.textContent = days[now.getUTCDay()];
};
getCurrentTime_Day();
setInterval(getCurrentTime_Day, 1000);
