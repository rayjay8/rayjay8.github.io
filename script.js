const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8e53202929mshcb5e5631158a7d5p16f6b1jsn5d268f5d5627",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = async (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temp.innerHTML = response.temp + "° C";
      humidity.innerHTML = response.humidity + "%";
      wind_speed.innerHTML = response.wind_speed + " km/h";
      feels_like.innerHTML = response.feels_like + "° C";

      if (temp.innerHTML == "undefined° C") {
        document.getElementById("warning").style.visibility = "visible";
        cityName.innerHTML = "City Not Found";
        temp.innerHTML = "?";
        humidity.innerHTML = "?";
        wind_speed.innerHTML = "?";
        feels_like.innerHTML = "?";
        // alert("City Not Found, Please Enter a Valid City Name!");
      } else {
        document.getElementById("warning").style.visibility = "hidden";
      }
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", () => {
  getWeather(city.value);
});

getWeather("Delhi");
