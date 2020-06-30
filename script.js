$(document).ready(function(){
//api key a849ce81cd857db4bbacc8466ea673d4
var searchHist = ["San Francisco, Atlanta, New York, Austin"];

function displayWeatherInfo(city){

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a849ce81cd857db4bbacc8466ea673d4&units=Imperial"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var weatherInfo = response;
    // console.log(weatherInfo)

    var mainTempera = $("#mainTemp").text(response.main.temp);
    var mainCities = $("#mainCity").text(response.name);
    var mainWinds = $("#mainWind").text(response.wind.speed);
    var mainHumidity = $("#mainHumidity").text(response.main.humidity);
})

}

$("#searchStart").on("click", function(event){
    event.preventDefault();

    var cityInput = $("#searchInput").val().trim();

    displayWeatherInfo(cityInput);
    displayForecastInfo(cityInput);



});


function displayForecastInfo(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=5&appid=a849ce81cd857db4bbacc8466ea673d4&units=Imperial";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var forecastInfo = response;
    console.log(response);
    var forecastDayOne = $("#dayOneTemp").text(response.list[0].main.temp);
    var forecastDayTwo = $("#dayTwoTemp").text(response.list[1].main.temp);
    var forecastDayThree = $("#dayThreeTemp").text(response.list[2].main.temp);
    var forecastDayFour = $("#dayFourTemp").text(response.list[3].main.temp);
    var forecastDayFive = $("#dayFiveTemp").text(response.list[4].main.temp);







})














}
 


})