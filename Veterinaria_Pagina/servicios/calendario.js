
const calendarGrid = document.getElementById('calendar-grid');
const monthYearDisplay = document.getElementById('month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const acceptButton = document.getElementById('accept-button');
const selectedDateInput = document.getElementById('selected-date');
const selectedTimeInput = document.getElementById('selected-time');
const backButton = document.getElementById('back-button');


let currentMonth = 3; 
let currentYear = 2024;

function generateCalendar(month, year) {
    calendarGrid.innerHTML = `
        <div class="day">LUNES</div>
        <div class="day">MARTES</div>
        <div class="day">MIÉRCOLES</div>
        <div class="day">JUEVES</div>
        <div class="day">VIERNES</div>
        <div class="day">SÁBADO</div>
        <div class="day">DOMINGO</div>
    `;

    const firstDay = new Date(year, month, 1).getDay() - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendarGrid.innerHTML += `<div class="date"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';
        dateDiv.textContent = day;
        dateDiv.addEventListener('click', () => {
            document.querySelectorAll('.date').forEach(date => date.classList.remove('selected'));
            dateDiv.classList.add('selected');
            selectedDateInput.value = `${day}/${month + 1}/${year}`;
        });
        calendarGrid.appendChild(dateDiv);
    }

    monthYearDisplay.textContent = `${getMonthName(month)} ${year}`;
}

function getMonthName(month) {
    const monthNames = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
    return monthNames[month];
}

prevMonthButton.addEventListener('click', () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    generateCalendar(currentMonth, currentYear);
});

nextMonthButton.addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    generateCalendar(currentMonth, currentYear);
});

document.querySelectorAll('input[name="time"]').forEach(input => {
    input.addEventListener('change', () => {
        selectedTimeInput.value = input.nextElementSibling.textContent;
    });
});

acceptButton.addEventListener('click', () => {
    alert(`Cita seleccionada: ${selectedDateInput.value} a las ${selectedTimeInput.value}`);
});

generateCalendar(currentMonth, currentYear);




