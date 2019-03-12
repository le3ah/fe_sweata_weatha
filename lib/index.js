import './styles.scss'

// $.get('https://sweata-weatha.herokuapp.com/api/v1/forecast?location=denver,co', function(data, status){
//   window.alert(`${status}`)
// })


$(document).ready(function(){

$("#getWeatherBtn").click(function(){
  event.preventDefault();
  let cityState = $("#locationInfo").val();
  $.get(`https://sweata-weatha.herokuapp.com/api/v1/forecast?location=${cityState}`, function(data, status){
// window.alert(data["data"]["attributes"]["currently"]["current_temperature"])
  let currentWeather = data["data"]["attributes"]["currently"]
  $(".currentTemp").html(currentWeather["current_temperature"] + " degrees!")
  $(".currentSummary").html(currentWeather["summary"])
  $(".currentTime").html(currentWeather["current_time"])
  $(".currentDate").html(currentWeather["date"])
  });
});
});
