const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption'); // Assuming there's only one figcaption in your HTML

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.258424&lon=-111.678523&appid=783667d9cbad9ce8fb52b7ec07ab8c3c&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Output the data to the console for testing
            displayResults(data);
        } else {
            throw new Error(await response.text());
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

apiFetch();