var key = "13e05e959b2f9c3e9ce652c35b101c08"
var city = "Seattle"
var searchButtonEl = document.querySelector("#searchBtn")
var searchInputEl = document.querySelector("#cityName")
var lat;
var lon;

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=` + key)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            lat = data.coord.lat;
            lon = data.coord.lon;
            getWeatherPlusForecast(city, lat, lon);
        })
}
function getWeatherPlusForecast(city, lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            displayWeather(data);
        })
}
function displayWeather(data) {
    let cityEl = document.getElementById("city");
    let cityText = city;
    let date = data.list[0].dt_txt.split(" ")[0];
    let icon = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    let imageEl = document.createElement("img");
    imageEl.setAttribute("src", icon);
    imageEl.setAttribute("alt", desc);
    cityEl.textContent = `${cityText}  ${date}`;
    cityEl.append(imageEl);

    let tempEl = document.getElementById("temp");
    let humidityEl = document.getElementById("humidity");
    let windEl = document.getElementById("wind");

    let temp = data.list[0].main.temp;
    let humidity = data.list[0].main.humidity;
    let wind = data.list[0].wind.speed;

    tempEl.textContent = `Temp: ${temp} F`;
    humidityEl.textContent = `Humidity: ${humidity} %`;
    windEl.textContent = `Wind: ${wind} MPH`;

    displayForecast();
}

function displayForecast(){
    
}
searchButtonEl.addEventListener("click", function (event) {
    event.preventDefault()
    var search = searchInputEl.value.trim()
    city = search;
    getWeather(search)
})
