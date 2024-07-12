<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'waka_4dcfc009-b1b8-49ec-ba37-9c79ed955932';
    const city = 'Bulawayo';
    const weatherContainer = document.getElementById('weather-data');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather.map(item => capitalizeWords(item.description)).join(', ');
            const temperature = Math.round(data.main.temp);

            const weatherHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;

            weatherContainer.innerHTML = weatherHTML;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
});
=======
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'waka_4dcfc009-b1b8-49ec-ba37-9c79ed955932';
    const city = 'Bulawayo';
    const weatherContainer = document.getElementById('weather-data');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather.map(item => capitalizeWords(item.description)).join(', ');
            const temperature = Math.round(data.main.temp);

            const weatherHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;

            weatherContainer.innerHTML = weatherHTML;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
});
>>>>>>> 14127f623cdfbed6b9437a9a81d3687ab5cbe320
