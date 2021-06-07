// api info current weather only
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=6863e16fbd4761d2785095597280e28b
//
// api for futurecast
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid=6863e16fbd4761d2785095597280e28b
// variables
var userInput = document.querySelector("#searchForm");
var userCityInput = document.querySelector("#city");

var displayCurrent = document.getElementById("#title");

var currentWeather;
var futureCast;
userCity = "";

//   function list

var getUserInput = function (event) {
  event.preventDefault();
  userCity = userCityInput.value.trim().toLowerCase();

  if (userCity) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        userCity +
        "&units=imperial&appid=6863e16fbd4761d2785095597280e28b"
    ).then(function (response) {
      response.json().then(function (currentData) {
        // console.log(currentData);
        currentWeather = currentData;
        lat = currentData.coord.lat;
        lon = currentData.coord.lon;
        return fetch(
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            lat +
            "&lon=" +
            lon +
            "&exclude=minutely,hourly,alerts&units=imperial&appid=6863e16fbd4761d2785095597280e28b"
        ).then(function (response2) {
          response2.json().then(function (futureData) {
            futureCast = futureData;
            console.log(futureData);
            console.log("lat: " + lat + " longitude: " + lon);
          });
        });
      });
    });

    userCityInput.textContent = userCity;
    console.log(userCity);
    userInput.reset();

    // timeout();
  }
  // displayCurrentWeather();
};

userInput.addEventListener("submit", getUserInput);
// var timeout = function () {
//   setTimeout(function () {
//     console.log(userCity);
//     console.log(currentWeather);
//     console.log(futureCast);
//     console.log(futureCast.daily[1].uvi);
//   }, 1000);
// };
// var displayCurrentWeather = function () {
// };

// // callbacks
