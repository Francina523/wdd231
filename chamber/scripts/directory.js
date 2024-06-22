document.addEventListener("DOMContentLoaded", () => {
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const memberGrid = document.querySelector('.member-grid');
    const memberList = document.querySelector('.member-list');

    // Function to fetch and display member data
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching members:', error);
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
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            const memberListItem = document.createElement('li');
            memberListItem.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            memberGrid.appendChild(memberCard);
            memberList.appendChild(memberListItem);
        });

        toggleView('grid');
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
    document.querySelector('.development-info').innerHTML = `
        <p>Developer: Your Name</p>
        <p>Course: WDD 231</p>
        <p>Last Modified: ${document.lastModified}</p>
        <p>&copy; ${new Date().getFullYear()}</p>
    `;

    // Fetch and display members on page load
    fetchMembers();
});
