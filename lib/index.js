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
  });
});
});
