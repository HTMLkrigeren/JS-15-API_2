const apiKey = "c9d4dffcd3fc0dee9587a90e38581eef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")

const searchBtn = document.querySelector(".search button")

const wheatherIcon = document.querySelector(".wheather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    } else {
        
    }

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        wheatherIcon.src = "bilder/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        wheatherIcon.src = "bilder/clear.png"
    } else if (data.weather[0].main == "Rain") {
        wheatherIcon.src = "bilder/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        wheatherIcon.src = "bilder/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        wheatherIcon.src = "bilder/mist.png"
    }
    
    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})