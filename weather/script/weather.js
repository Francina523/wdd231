const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'af013bc8be0d66d4e3055564684d6baf';

const location = {
  latitude: '49.75',
  longitude: '6.64'
};

const units = 'metric'; // Use 'imperial' for Fahrenheit

const apiUrl = `${url}?lat=${location.latitude}&lon=${location.longitude}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); // Output data to console for testing
    displayResults(data); // Call function to display weather data on the page
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayResults(data) {
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('#weather-description');

  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  const desc = data.weather[0].description;

  weatherIcon.src = iconUrl;
  weatherIcon.alt = desc;
  captionDesc.textContent = desc;
}

// Call the API fetch function when the page loads
apiFetch();
