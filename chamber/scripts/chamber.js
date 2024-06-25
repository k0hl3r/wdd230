const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// Literally the hardest thing I've ever done Calendar.

document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.querySelector('.calendar');
    const calendarHeader = document.getElementById('calendar-header');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    function generateCalendar(year, month) {
        calendarContainer.innerHTML = '';
        calendarHeader.textContent = `${monthNames[month]} ${year}`;

        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'header');
            dayElement.textContent = day;
            calendarContainer.appendChild(dayElement);
        });

        const firstDay = new Date(year, month, 1).getDay();

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyElement = document.createElement('div');
            emptyElement.classList.add('day', 'empty');
            calendarContainer.appendChild(emptyElement);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            calendarContainer.appendChild(dayElement);
        }
    }

    generateCalendar(year, month);
});

//last visited site

document.addEventListener('DOMContentLoaded', function() {
    function getDaysDifference(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000; // Hours*minutes*seconds*milliseconds
        const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
        return diffDays;
    }

    const currentDate = new Date();
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const visitMessageElement = document.getElementById('visit-message');

    if (lastVisitDate) {
        const lastVisit = new Date(lastVisitDate);
        const daysDifference = getDaysDifference(currentDate, lastVisit);
        let message = `You last visited ${daysDifference} day${daysDifference === 1 ? '' : 's'} ago.`;
        visitMessageElement.textContent = message;
    } else {
        visitMessageElement.textContent = 'This is your first visit!';
    }

    localStorage.setItem('lastVisitDate', currentDate);
});