$(document).ready(function () {
  //api key a849ce81cd857db4bbacc8466ea673d4
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var date = new Date();
  var nd = date.getDay();

  function displayWeatherInfo(city) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=a849ce81cd857db4bbacc8466ea673d4&units=Imperial";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var weatherInfo = response;
      // console.log(weatherInfo)

      var mainTempera = $("#mainTemp").text(response.main.temp);
      var mainCities = $("#mainCity").text(response.name);
      var mainWinds = $("#mainWind").text(response.wind.speed);
      var mainHumidity = $("#mainHumidity").text(response.main.humidity);
      var mainCondi = $("#mainConditions").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          response.weather[0].icon +
          "@2x.png"
      );

      // console.log(response.weather[0].icon)

      // $("#searchHistory").empty();
      // var myButton = $("<button>");
      var myDiv = $("#searchHistory");
      // myButton.attr("class", "listed-group-item");
      var citySearched = $("<button>")
        .text(response.name)
        .attr("class", "list-group-item");
      myDiv.append(citySearched);
    });
  }

  $("#searchStart").on("click", function (event) {
    event.preventDefault();

    var cityInput = $("#searchInput").val().trim();

    displayWeatherInfo(cityInput);
    displayForecastInfo(cityInput);
  });

  function displayForecastInfo(city) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&cnt=40&appid=a849ce81cd857db4bbacc8466ea673d4&units=Imperial";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var forecastInfo = response;

      var forecastDayOne = $("#dayOneTemp").text(response.list[6].main.temp);
      var forecastDayTwo = $("#dayTwoTemp").text(response.list[14].main.temp);
      var forecastDayThree = $("#dayThreeTemp").text(
        response.list[15].main.temp
      );
      var forecastDayFour = $("#dayFourTemp").text(response.list[30].main.temp);
      var forecastDayFive = $("#dayFiveTemp").text(response.list[37].main.temp);

      var humidityDayOne = $("#dayOneHumidity").text(
        response.list[6].main.humidity
      );
      var humidityDayTwo = $("#dayTwoHumidity").text(
        response.list[14].main.humidity
      );
      var humidityDayThree = $("#dayThreeHumidity").text(
        response.list[15].main.humidity
      );
      var humidityDayFour = $("#dayFourHumidity").text(
        response.list[30].main.humidity
      );
      var humidityDayFive = $("#dayFiveHumidity").text(
        response.list[37].main.humidity
      );

      var weatherIconOne = $("#dayOneCond").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          response.list[6].weather[0].icon +
          "@2x.png"
      );
      var weatherIconTwo = $("#dayTwoCond").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          response.list[14].weather[0].icon +
          "@2x.png"
      );
      var weatherIconThree = $("#dayThreeCond").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          response.list[15].weather[0].icon +
          "@2x.png"
      );
      var weatherIconFour = $("#dayFourCond").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          response.list[30].weather[0].icon +
          "@2x.png"
      );
      var weatherIconFive = $("#dayFiveCond").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          response.list[37].weather[0].icon +
          "@2x.png"
      );

      var indexDay = 0;

      indexDay = nd + 1;
      if (indexDay > 6) indexDay = indexDay - 7;

      var forecastDateOne = $("#dayOneDate").text(weekDays[indexDay]);
      indexDay = nd + 2;
      if (indexDay > 6) indexDay = indexDay - 7;

      var forecastDateTwo = $("#dayTwoDate").text(weekDays[indexDay]);
      indexDay = nd + 3;
      if (indexDay > 6) indexDay = indexDay - 7;
      var forecastDateThree = $("#dayThreeDate").text(weekDays[indexDay]);
      indexDay = nd + 4;
      if (indexDay > 6) indexDay = indexDay - 7;
      var forecastDateFour = $("#dayFourDate").text(weekDays[indexDay]);
      indexDay = nd + 5;
      if (indexDay > 6) indexDay = indexDay - 7;

      var forecastDateFive = $("#dayFiveDate").text(weekDays[indexDay]);

      indexDay = nd + 6;
      if (indexDay > 6) indexDay = indexDay - 7;

      var todayDate = $("#mainDate").text(weekDays[indexDay + 1]);
    });
  }
});
