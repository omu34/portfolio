const dateElement = document.getElementById("myDate");
const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});
dateElement.textContent = formattedDate;
dateElement.setAttribute('datetime', today.toISOString().slice(0, 10));