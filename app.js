// getting hour and minute fields from html elements
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const date = document.getElementById("curvedDate");

// setting up time when dom is loaded
window.addEventListener("DOMContentLoaded", () => {
  updateTime();

  // in every second, getting a second rate and if it is 0 we update our clock
  // setInterval(() => {
  //   let currentSecond = new Date().getSeconds();
  //   if (currentSecond == 0) {
  //     updateTime();
  //   }
  // }, 1000);

  setInterval(() => {
    updateTime();
  }, 1000);
});

const updateTime = () => {
  const date = new Date();

  // getting current hour and minute rates
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  // adding '0' before minutes and hours less than 10 so that it is 00:00, 06:09, not 0:0 or 6:9
  currentMinute < 10
    ? (minute.textContent = `0${currentMinute}`)
    : (minute.textContent = currentMinute);
  currentHour < 10
    ? (hour.textContent = `0${currentHour}`)
    : (hour.textContent = currentHour);

  // adding current date
  let currentDate = date.toDateString();

  // adding letters to the curved date
  // const letters = currentDate.split("").filter((letter) => letter != " ");
  // curvedDate.innerHTML = "";
  // letters.forEach((letter, index) => {
  //   curvedDate.innerHTML += `<span class="l${index}">${letter}</span>`;
  // });

  curvedDate.textContent = currentDate;

  // Instantiate `CircleType` with an HTML element.
  const circleType = new CircleType(curvedDate);

  // Set the text radius and direction. Note: setter methods are chainable.
  circleType.radius(105).dir(-1); // 95
};
