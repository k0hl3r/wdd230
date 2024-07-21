const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption'); 
const forecastContainer = document.querySelector('#forecast'); 

const apiKey = '783667d9cbad9ce8fb52b7ec07ab8c3c';
const lat = 33.258424;
const lon = -111.678523;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
        const weatherResponse = await fetch(weatherUrl);
        const forecastResponse = await fetch(forecastUrl);
        if (weatherResponse.ok && forecastResponse.ok) {
            const weatherData = await weatherResponse.json();
            const forecastData = await forecastResponse.json();
            console.log(weatherData);
            console.log(forecastData);
            displayResults(weatherData);
            displayForecast(forecastData);
        } else {
            throw new Error('Failed to fetch weather or forecast data.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    const forecastData = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
    forecastContainer.innerHTML = '';

    forecastData.forEach(day => {
        const dayTemp = day.main.temp;
        const dayDesc = day.weather[0].description;
        const dayIcon = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        
        const iconElement = document.createElement('img');
        iconElement.setAttribute('src', dayIcon);
        iconElement.setAttribute('alt', dayDesc);
        
        const tempElement = document.createElement('p');
        tempElement.innerHTML = `${dayTemp}&deg;F`;
        
        const descElement = document.createElement('p');
        descElement.textContent = dayDesc;
        
        forecastItem.appendChild(iconElement);
        forecastItem.appendChild(tempElement);
        forecastItem.appendChild(descElement);
        
        forecastContainer.appendChild(forecastItem);
    });
}

apiFetch();
