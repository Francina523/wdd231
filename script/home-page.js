document.addEventListener('DOMContentLoaded', () => {
    // Update current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Update last modified date
    document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Course data with credits
    const courses = [
        { id: 1, name: "CSE 110", type: "CSE", completed: true, credits: 2 },
        { id: 2, name: "WDD 130", type: "WDD", completed: true, credits: 2 },
        { id: 3, name: "CSE 111", type: "CSE", completed: true, credits: 2 },
        { id: 4, name: "CSE 210", type: "CSE", completed: true, credits: 2 },
        { id: 5, name: "WDD 131", type: "WDD", completed: true, credits: 2 },
        { id: 6, name: "WDD 231", type: "WDD", completed: false, credits: 2 }
    ];

    const courseList = document.querySelector('.courses');
    const totalCreditsElement = document.createElement('p');
    totalCreditsElement.id = 'total-credits';
    document.querySelector('#certificate').appendChild(totalCreditsElement);

    function displayCourses(filteredCourses) {
        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
            courseCard.textContent = `${course.name} (${course.credits} credits)`;
            courseCard.dataset.type = course.type;
            courseList.appendChild(courseCard);
        });

        // Calculate and display total credits
        const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);
        totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    }

    function filterCourses(type) {
        if (type === 'All') {
            displayCourses(courses);
        } else {
            const filteredCourses = courses.filter(course => course.type === type);
            displayCourses(filteredCourses);
        }
    }

    // Initial display of all courses
    displayCourses(courses);

    // Filter buttons event listeners
    document.querySelector('.filter-buttons').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            filterCourses(e.target.textContent);
        }
    });
});
