const baseURL = "https://k0hl3r.github.io/wdd230/";
const linksURL = "activities.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

function displayLinks(weeks) {
    const learningActivities = document.getElementById('learning-activities');

    weeks.forEach(week => {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');

        const weekHeader = document.createElement('h3');
        weekHeader.textContent = week.week;

        const activityLinksDiv = document.createElement('div');
        activityLinksDiv.classList.add('activity-links');

        week.links.forEach(link => {
            const activityLink = document.createElement('a');
            activityLink.href = baseURL + link.url;
            activityLink.textContent = link.title;
            activityLinksDiv.appendChild(activityLink);
        });

        weekDiv.appendChild(weekHeader);
        weekDiv.appendChild(activityLinksDiv);
        learningActivities.appendChild(weekDiv);
    });
}

getLinks();