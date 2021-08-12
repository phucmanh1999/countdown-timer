const newYear = "1 1 2022";
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minute");
const secEl = document.getElementById("second");
function countDown() {
  let newYearDay = new Date(newYear);
  let currentDay = new Date();

  let sec = (newYearDay - currentDay) / 1000;
  let day = Math.floor(sec / (60 * 60 * 24));
  let minute = Math.floor((sec / 60) % 60);
  let hour = Math.floor((sec / (60 * 60 * 24)) % 60);
  sec = Math.floor(sec % 60);
  console.log(day, hour, minute, sec);

  dayEl.innerHTML = day;
  hourEl.innerHTML = format(hour);
  minEl.innerHTML = format(minute);
  secEl.innerHTML = format(sec);
}
function format(time) {
  return time < 10 ? "0" + time : time;
}
countDown();
setInterval(countDown, 1000);
