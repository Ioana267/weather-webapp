async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'c113c113071fa390f76bee335dc5c824'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const weatherInfo = document.getElementById('weatherInfo');
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      
        weatherInfo.innerHTML = `
           
            <div class="weather-details">
                <div>
                <h2>${data.name}</h2>
                    <p>${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                </div>
                <div >
                    <img  class="x" src="${iconUrl}" alt="Weather Icon">
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
