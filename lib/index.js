import './styles.scss'

// $.get('https://sweata-weatha.herokuapp.com/api/v1/forecast?location=denver,co', function(data, status){
//   window.alert(`${status}`)
// })


$(document).ready(function(){

$("#getWeatherBtn").click(function(){
  event.preventDefault();
  var cityState = $("#locationInfo").val();
  $.get(`https://sweata-weatha.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status){
// window.alert(data["data"]["attributes"]["currently"]["current_temperature"])
  let currentWeather = data["data"]["attributes"]["currently"]
  $(".locationInfo").html(cityState.slice(0,-3))
  $(".currentTemp").html(currentWeather["current_temperature"] + "°")
  $(".currentSummary").html(currentWeather["summary"])
  $(".currentTime").html(currentWeather["current_time"])
  $(".currentDate").html(currentWeather["date"])
  $(".currentFeels").html("Feels-like temperature: " + currentWeather["feels_like"] + "°")
  $(".currentHumidity").html("Humidity: " + currentWeather["humidity"])
  $(".currentVisibility").html("Visibility: " + currentWeather["visibility"])
  $(".currentUvIndex").html("UV Index: " + currentWeather["uv_index"])

  let hourlyWeather = data["data"]["attributes"]["hourly"]
  $(".thisHourTime").html(hourlyWeather[0]["hourly_time"])
  $(".thisHourTemp").html(hourlyWeather[0]["hourly_temperature"] + "°")
  $(".thisHourIcon").html(hourlyWeather[0]["hourly_icon"])
  $(".plusOneHourTime").html(hourlyWeather[1]["hourly_time"])
  $(".plusOneHourTemp").html(hourlyWeather[1]["hourly_temperature"] + "°")
  $(".plusOneHourIcon").html(hourlyWeather[1]["hourly_icon"])
  $(".plusTwoHourTime").html(hourlyWeather[2]["hourly_time"])
  $(".plusTwoHourTemp").html(hourlyWeather[2]["hourly_temperature"] + "°")
  $(".plusTwoHourIcon").html(hourlyWeather[2]["hourly_icon"])
  $(".plusThreeHourTime").html(hourlyWeather[3]["hourly_time"])
  $(".plusThreeHourTemp").html(hourlyWeather[3]["hourly_temperature"] + "°")
  $(".plusThreeHourIcon").html(hourlyWeather[3]["hourly_icon"])
  $(".plusFourHourTime").html(hourlyWeather[4]["hourly_time"])
  $(".plusFourHourTemp").html(hourlyWeather[4]["hourly_temperature"] + "°")
  $(".plusFourHourIcon").html(hourlyWeather[4]["hourly_icon"])
  $(".plusFiveHourTime").html(hourlyWeather[5]["hourly_time"])
  $(".plusFiveHourTemp").html(hourlyWeather[5]["hourly_temperature"] + "°")
  $(".plusFiveHourIcon").html(hourlyWeather[5]["hourly_icon"])
  $(".plusSixHourTime").html(hourlyWeather[6]["hourly_time"])
  $(".plusSixHourTemp").html(hourlyWeather[6]["hourly_temperature"] + "°")
  $(".plusSixHourIcon").html(hourlyWeather[6]["hourly_icon"])
  $(".plusSevenHourTime").html(hourlyWeather[7]["hourly_time"])
  $(".plusSevenHourTemp").html(hourlyWeather[7]["hourly_temperature"] + "°")
  $(".plusSevenHourIcon").html(hourlyWeather[7]["hourly_icon"])
  });
});
});
