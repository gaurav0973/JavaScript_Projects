document.addEventListener("DOMContentLoaded", ()=>{
    const cityInput = document.querySelector("#city-input")
    const getWeatherBtn = document.querySelector("#get-weather-btn")
    const weatherInfo = document.querySelector("#weather-info")
    const cityNameDisplay = document.querySelector("#city-name")
    const temperatureDisplay = document.querySelector("#temperature")
    const descriptionDisplay = document.querySelector("#description")
    const errorMessage = document.querySelector("#error-message")

    //env variable for api key
    const API_KEY = "cf51c050bd6bb6548b61fe28857b4225"

    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim()
        if(!city)
            return
    
        //it may throw an error
        //server in another continent
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }

    })



    async function fetchWeatherData(city){
        //get the data from the api
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`


        const response = await fetch(url)
        console.log(typeof response);
        console.log(response);

        if(!response.ok){
            throw new Error("City not found")
        }
        
        const data = await response.json()
        return data
        
    }

    function displayWeatherData(data) {
        console.log(data);
        const { name, main, weather } = data;
      
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature : ${main.temp} °C`;
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`;
      
        // Add weather icon
        const weatherIcon = document.createElement("img");
        weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        weatherIcon.alt = weather[0].description;
      
        // Clear previous weather icon (if any) and append new one
        descriptionDisplay.appendChild(weatherIcon);
      
        // Unlock the display
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
      }
      

    function showError(){
        weatherInfo.classList.add("hidden")
        errorMessage.classList.remove("hidden") 
    }
})