// script.js
document.addEventListener('DOMContentLoaded', function () {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date().toLocaleDateString();
    dateElement.textContent = currentDate;
});
