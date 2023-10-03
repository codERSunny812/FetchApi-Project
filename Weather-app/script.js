let cityName;
const apiKey = "14d0195bcc2dc0a893ac287de7dfe267";
let btn = document.getElementById("search-btn");
let searchValue = document.getElementById("search");
let temp = document.getElementsByClassName('temperature')[0]; // Assuming there's only one element with this class
let city = document.getElementsByClassName('cityName')[0]; // Assuming there's only one element with this class
let humidityValue = document.getElementById('humidValue');
let windValue = document.getElementById('windSpeed');
let weatherData = document.getElementsByClassName('weatherData');

btn.addEventListener("click", () => {
  cityName = searchValue.value;
  console.log(cityName);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
  // now fetch the api
  try {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open("GET", url);
    console.log(xmlRequest.readyState);
    xmlRequest.send();
    xmlRequest.onreadystatechange = () => {
      if (xmlRequest.readyState == 4) {
        console.log("data fetched");
        let dataGetFromApi = JSON.parse(xmlRequest.responseText);
        console.log(dataGetFromApi);
        console.log(`the temperature is ${dataGetFromApi?.main?.temp}°C`); // Convert temperature to Celsius
        console.log(`the name  is ${dataGetFromApi?.name}`);
        console.log(`the humidity   is ${dataGetFromApi?.main?.humidity}%`);
        console.log(`the wind speed   is ${dataGetFromApi?.wind?.speed} m/s`);
        
        weatherData[0].innerHTML = `
        <div class="weatherData">
        <img src="/images/rain.png" alt=""  class="weather-icon">
        <h1 class="temperture">${dataGetFromApi?.main?.temp}</h1>
        <h2 class="cityName">${dataGetFromApi?.name}</h2>
        <div class="details">
            <div class="col " id="humidity">
                <img src="/images/humidity.png" alt="" >
                <div class="humidityDetail">
                    <p id="humidValue">${dataGetFromApi?.main?.humidity}</p>
                    <p>humidity</p>
                </div>

            </div>

            <div class="col " id="wind">
                <img src="/images/wind.png" alt="" >
                <div class="wind">
                    <p> <span id="windSpeed">${dataGetFromApi?.wind?.speed }</span> km/h</p>
                    <p>wind speed</p>
                </div>

            </div>
        </div>

    </div>

        `
      }
    };
  } catch (error) {
    console.log("ERROR FOUND");
  }
});
