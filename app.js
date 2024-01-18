const city = document.querySelector(".city");
const temp = document.querySelector(".temperature div");
const icon = document.querySelector(".icon");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const speed = document.querySelector(".speed");
const deg = document.querySelector(".deg");
const discript = document.querySelector(".discript");

let weatherInCity = prompt(
  "Введіть назву міста латинськими літерами!",
  "KYIV"
).toUpperCase();
fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=${weatherInCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    city.innerHTML = `${data.name}`;
    temp.innerHTML = `${Math.round(data.main.temp)}`;
    data.weather.forEach((item) => {
      console.log(item.description);

      icon.setAttribute(
        "src",
        `http://openweathermap.org/img/w/${item.icon}.png`
      );
      discript.innerHTML = `${item.main}, ${item.description}`;
    });
    pressure.innerHTML = `${data.main.pressure} mm Hg`;
    humidity.innerHTML = `${data.main.humidity}%`;
    speed.innerHTML = `${Math.round(data.wind.speed)} m/s`;
    deg.innerHTML = `${data.wind.deg}`;
  });
