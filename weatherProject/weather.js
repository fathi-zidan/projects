const apiKey = "57cee14c61ad0f7d8396ada7a1287518";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const img = document.querySelector('.weather-icon');
async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    img.src = `/weatherProject/images/images/${data.weather[0].main}.png`
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = (data.main.temp - 273.15).toFixed() + "°C"; // Convert Kelvin to Celsius
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

}
searchBtn.addEventListener('click',()=>{
    const city = searchBox.value;
    checkWeather(city);
    searchBox.value = ''; 
})
