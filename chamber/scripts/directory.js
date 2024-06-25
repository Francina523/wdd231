document.addEventListener("DOMContentLoaded", () => {
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const memberGrid = document.querySelector('.member-grid');
    const memberList = document.querySelector('.member-list');
    const eventsList = document.getElementById('events-list');
    const weatherInfo = document.getElementById('weather-info');
    const forecastInfo = document.getElementById('forecast-info');
    const footerDevelopmentInfo = document.querySelector('.development-info');

    // Function to fetch and display data (members, events, weather)
    async function fetchData() {
        try {
            const response = await fetch('data/data.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log('Fetched data:', data);
            displayMembers(data.members);
            displayEvents(data.events);
            displayWeather(data.weather);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to display members in grid or list view
    function displayMembers(members) {
        memberGrid.innerHTML = '';
        memberList.innerHTML = '';

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.tagLine}</p>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>URL: <a href="${member.url}" target="_blank">${member.url}</a></p>
            `;

            const memberListItem = document.createElement('li');
            memberListItem.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.tagLine}</p>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>URL: <a href="${member.url}" target="_blank">${member.url}</a></p>
            `;

            memberGrid.appendChild(memberCard);
            memberList.appendChild(memberListItem);
        });

        toggleView('grid');
    }

    // Function to display events
    function displayEvents(events) {
        eventsList.innerHTML = ''; // Clear previous content

        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.innerHTML = `
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Location: ${event.location}</p>
                <p>Description: ${event.description}</p>
            `;
            eventsList.appendChild(eventDiv);
        });
    }

    // Function to display current weather and forecast
    function displayWeather(weather) {
        weatherInfo.innerHTML = `
            <p>${weather.current.temperature}</p>
            <p>${weather.current.condition}</p>
            <p>High: ${weather.current.high}</p>
            <p>Low: ${weather.current.low}</p>
            <p>Humidity: ${weather.current.humidity}</p>
            <p>Sunrise: ${weather.current.sunrise}</p>
            <p>Sunset: ${weather.current.sunset}</p>
        `;

        forecastInfo.innerHTML = `
            <p>Today: ${weather.forecast.today}</p>
            <p>Wednesday: ${weather.forecast.wednesday}</p>
            <p>Thursday: ${weather.forecast.thursday}</p>
        `;
    }

    // Function to toggle between grid and list view
    function toggleView(view) {
        if (view === 'grid') {
            memberGrid.style.display = 'grid';
            memberList.style.display = 'none';
        } else {
            memberGrid.style.display = 'none';
            memberList.style.display = 'block';
        }
    }

    // Event listeners for view toggle buttons
    gridViewButton.addEventListener('click', () => toggleView('grid'));
    listViewButton.addEventListener('click', () => toggleView('list'));

    // Display the current year and last modified date in the footer
    footerDevelopmentInfo.innerHTML = `
        <p>Developer: Francina Shanana</p>
        <p>Course: WDD 231</p>
        <p>Last Modified: ${document.lastModified}</p>
        <p>&copy; ${new Date().getFullYear()}</p>
    `;

    // Fetch and display members, events, and weather on page load
    fetchData();
});
