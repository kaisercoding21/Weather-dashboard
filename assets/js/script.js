// api info current weather only
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=6863e16fbd4761d2785095597280e28b
//
// api for futurecast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid=6863e16fbd4761d2785095597280e28b
// variables
var userInput = document.querySelector("#searchForm");
var userCityInput = document.querySelector("#city");

// var userInput = "orlando";

var currentWeather = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=" +
    userCity +
    "&units=imperial&appid=6863e16fbd4761d2785095597280e28b"
).then(function (response) {
  response.json().then(function (currentData) {
    console.log(currentData);
  });
});

var futureCast = fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
    userCity +
    "&units=imperial&appid=6863e16fbd4761d2785095597280e28b"
).then(function (response2) {
  response2.json().then(function (futureData) {
    console.log(futureData);
  });
});

//   function list
var getUserInput = function (event) {
  event.preventDefault();
  var userCity = userCityInput.value.trim().toLowerCase();
  if (userCity) {
    getCurrentWeather(userCity);
    getFutureWeather(userCity);
  }
  console.log(cityTest);
};

var getCurrentWeather = function () {
  fetch(currentWeather).then(function (response) {
    response.json().then(function (temperature) {
      console.log(temperature);
    });
  });
};
var getFutureWeather = function () {
  fetch(futureCast).then(function (response) {
    response.json().then(function (temperature) {
      console.log(temperature);
    });
  });
};
userInput.addEventListener("submit", getUserInput);

// // callbacks
getCurrentWeather();
getFutureWeather();
