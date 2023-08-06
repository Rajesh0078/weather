const searchInput = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")


const apiKey = "8c8079b13298b650e506318829356f50"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

function showingData(data){
    document.querySelector("#city-name").innerHTML = data.name
    document.querySelector(".temp").innerHTML = `${((data.main.temp) - 273).toFixed(2)}°C`
    document.querySelector("#humidity").innerHTML = `Humididty: ${data.main.humidity}%`
    document.querySelector("#wind").innerHTML = `Wind Speed: ${data.wind.speed} km/h`
    document.querySelector(".status").innerHTML = data.weather[0].description
}

const wheather = async(city) =>{
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json()
    showingData(data)
} 

searchBtn.onclick = () =>{
    wheather(searchInput.value)
}

