const API_KEY="";
const API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchText = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    // Api call to open weather api
    const response = await fetch(API_URL+`&q=${city}`+`&appid=${API_KEY}`);
    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        
        
        // Updating data based on data recieved from open weather api
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        switch (data.weather[0].main) {
            case 'Clouds':
                weatherIcon.src = "images/clouds.png"
                break;
            case 'Clear':
                weatherIcon.src = "images/clear.png"
                break;
            case 'Rain':
                weatherIcon.src = "images/rain.png"
                break;
            case 'Drizzle':
                weatherIcon.src = "images/drizzle.png"
                break;
            case 'Mist':
                weatherIcon.src = "images/mist.png"
                break;
            case 'Snow':
                weatherIcon.src = "images/snow.png"
                break;
            default:
                weatherIcon.src = "images/clouds.png"
                break;

        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}
document.querySelector(".error").style.display = "none";
searchBtn.addEventListener("click",()=>{
    checkWeather(searchText.value);

});