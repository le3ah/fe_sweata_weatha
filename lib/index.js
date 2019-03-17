import './styles.scss'

$(document).ready(function(){
$("#deleteLocationBtn").hide()
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

  let dailyWeather = data["data"]["attributes"]["daily"]
  $(".todaySummary").html("Today - " + dailyWeather[0]["today_summary"])
  $(".todayPrecip").html(dailyWeather[0]["precip_probability"] + "%")
  $(".todayPrecipType").html(dailyWeather[0]["precip_type"])
  $(".todayHigh").html(dailyWeather[0]["temperature_high"] + "°")
  $(".todayLow").html(dailyWeather[0]["temperature_low"] + "°")
  $(".todayTime").html(dailyWeather[0]["time"])
  $(".todayPlusOnePrecip").html(dailyWeather[1]["precip_probability"] + "%")
  $(".todayPlusOnePrecipType").html(dailyWeather[1]["precip_type"])
  $(".todayPlusOneHigh").html(dailyWeather[1]["temperature_high"] + "°")
  $(".todayPlusOneLow").html(dailyWeather[1]["temperature_low"] + "°")
  $(".todayPlusOneTime").html(dailyWeather[1]["time"])
  $(".todayPlusTwoPrecip").html(dailyWeather[2]["precip_probability"] + "%")
  $(".todayPlusTwoPrecipType").html(dailyWeather[2]["precip_type"])
  $(".todayPlusTwoHigh").html(dailyWeather[2]["temperature_high"] + "°")
  $(".todayPlusTwoLow").html(dailyWeather[2]["temperature_low"] + "°")
  $(".todayPlusTwoTime").html(dailyWeather[2]["time"])
  $(".todayPlusThreePrecip").html(dailyWeather[3]["precip_probability"] + "%")
  $(".todayPlusThreePrecipType").html(dailyWeather[3]["precip_type"])
  $(".todayPlusThreeHigh").html(dailyWeather[3]["temperature_high"] + "°")
  $(".todayPlusThreeLow").html(dailyWeather[3]["temperature_low"] + "°")
  $(".todayPlusThreeTime").html(dailyWeather[3]["time"])
  $(".todayPlusFourPrecip").html(dailyWeather[4]["precip_probability"] + "%")
  $(".todayPlusFourPrecipType").html(dailyWeather[4]["precip_type"])
  $(".todayPlusFourHigh").html(dailyWeather[4]["temperature_high"] + "°")
  $(".todayPlusFourLow").html(dailyWeather[4]["temperature_low"] + "°")
  $(".todayPlusFourTime").html(dailyWeather[4]["time"])
  displayFavorites();
  });

  $.get(`https://sweata-weatha.herokuapp.com/api/v1/backgrounds?location=${cityState}`, function(data, status){
    let backgroundImage = data["data"]["attributes"]["background_url"]
    $("body").css('background-image', `url(${backgroundImage})`)
  });
});

$("#addFavoriteBtn").click(function(){
  event.preventDefault();
  postFavorites();
  displayFavorites();
  $("#deleteLocationBtn").show()
})

const postFavorites = () => {
  var cityState = $("#locationInfo").val();
  fetch(`https://sweata-weatha.herokuapp.com/api/v1/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      "location": cityState,
      "api_key": "79ce1d358a436822b0ce"
    })
  })
  .then((response) => response.status)
  .catch((error) => console.error({error}))
  console.log("adding a favorite now!")
  window.alert("You've just added " + cityState + " to your favorites!")

  displayFavorites();
  };
  const displayFavorites = () => {
    $.get(`https://sweata-weatha.herokuapp.com/api/v1/favorites?api_key=79ce1d358a436822b0ce`, function(data, status){
      let favorites = data["data"]["attributes"]["favorites"]
      if (favorites[10]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
        $(".favorites4").html(favorites[3]["location"])
        $(".favorites5").html(favorites[4]["location"])
        $(".favorites6").html(favorites[5]["location"])
        $(".favorites7").html(favorites[6]["location"])
        $(".favorites8").html(favorites[7]["location"])
        $(".favorites7").html(favorites[8]["location"])
        $(".favorites8").html(favorites[9]["location"])
        $(".favorites9").html(favorites[10]["location"])
      } else if (favorites[9]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
        $(".favorites4").html(favorites[3]["location"])
        $(".favorites5").html(favorites[4]["location"])
        $(".favorites6").html(favorites[5]["location"])
        $(".favorites7").html(favorites[6]["location"])
        $(".favorites8").html(favorites[7]["location"])
        $(".favorites7").html(favorites[8]["location"])
        $(".favorites8").html(favorites[9]["location"])
      } else if (favorites[8]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
        $(".favorites4").html(favorites[3]["location"])
        $(".favorites5").html(favorites[4]["location"])
        $(".favorites6").html(favorites[5]["location"])
        $(".favorites7").html(favorites[6]["location"])
        $(".favorites8").html(favorites[7]["location"])
        $(".favorites7").html(favorites[8]["location"])
      } else if (favorites[7]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
        $(".favorites4").html(favorites[3]["location"])
        $(".favorites5").html(favorites[4]["location"])
        $(".favorites6").html(favorites[5]["location"])
        $(".favorites7").html(favorites[6]["location"])
        $(".favorites8").html(favorites[7]["location"])
      } else if (favorites[6]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
        $(".favorites4").html(favorites[3]["location"])
        $(".favorites5").html(favorites[4]["location"])
        $(".favorites6").html(favorites[5]["location"])
        $(".favorites7").html(favorites[6]["location"])
      } else if (favorites[5]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
        $(".favorites4").html(favorites[3]["location"])
        $(".favorites5").html(favorites[4]["location"])
        $(".favorites6").html(favorites[5]["location"])
      } else if (favorites[4]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
        $(".favorites4").html(favorites[3]["location"])
        $(".favorites5").html(favorites[4]["location"])
      } else if (favorites[3]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
        $(".favorites4").html(favorites[3]["location"])
      } else if (favorites[2]) {
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
        $(".favorites3").html(favorites[2]["location"])
      } else if (favorites[1]){
        $(".favorites1").html(favorites[0]["location"])
        $(".favorites2").html(favorites[1]["location"])
      } else if (favorites[0]) {
        $(".favorites1").html(favorites[0]["location"])
      } else {
        $(".favoritesMessage").html("You don't have any favorite locations")
      }
    });
  }
  $("#deleteLocationBtn").click(function(){
    event.preventDefault();
    $("#deleteLocationBtn").hide()
    var cityState = $("#locationInfo").val();
    $.ajax({
      url: `https://sweata-weatha.herokuapp.com/api/v1/favorites?location=${cityState}&api_key=79ce1d358a436822b0ce&`,
      type: 'DELETE',
      success: function(data, status){
        window.alert("You've just removed " + data["location"] + " from your favorites!")
      },
    });
  })
});
