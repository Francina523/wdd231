document.addEventListener('DOMContentLoaded', function() {
    const discoverContainer = document.querySelector('.discovery-container');

    fetch('data/discover.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(item => {
                html += `
                    <div class="discovery-card">
                        <img src="${item.image}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <a href="${item.link}" target="_blank">Learn More</a>
                    </div>
                `;
            });
            discoverContainer.innerHTML = html;
        })
        .catch(error => console.error('Error fetching discover data:', error));
});
