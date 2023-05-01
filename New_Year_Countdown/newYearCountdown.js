const dayE1 = document.getElementById("day");
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minute");
const secondE1 = document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

const updateCountDown = () => {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const remainingDay = Math.floor(gap / day);
  console.log(remainingDay);
  const remainingHour = Math.floor((gap % day) / hour);
  const remainingMinute = Math.floor((gap % hour) / minute);
  const remainingSecond = Math.floor((gap % minute) / second);

  dayE1.innerText = remainingDay;
  hourE1.innerText = remainingHour;
  minuteE1.innerText = remainingMinute;
  secondE1.innerText = remainingSecond;
  setTimeout(updateCountDown, 1000);
};
updateCountDown();
