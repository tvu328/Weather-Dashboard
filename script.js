var key = "13e05e959b2f9c3e9ce652c35b101c08"
var city = "Seattle"
var searchButtonEl = document.querySelector("#searchBtn")
var searchInputEl = document.querySelector("#cityName")

function getWeather (city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=` + key)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
}

// add event listener for search button to grab value in input and set it to variable called city, then call getWeather passing city
searchButtonEl.addEventListener("click", function(event){
    event.preventDefault()
var search = searchInputEl.value.trim()
getWeather(search)
})


// city name, date, icon, temperature, humidity, wind speed 

