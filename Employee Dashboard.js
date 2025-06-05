const monthYear = document.getElementById("monthYear");
const calendar = document.getElementById("calendar");

let currentDate = new Date();

function renderCalendar(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  monthYear.textContent = `${date.toLocaleString("default", { month: "long" })} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let days = [];

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days.push(...weekdays.map(day => `<div class="header">${day}</div>`));

  for (let i = 0; i < firstDay; i++) {
    days.push(`<div></div>`);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = new Date().toDateString() === new Date(year, month, d).toDateString();
    days.push(`<div${isToday ? ' style="background:#fcd34d;"' : ''}>${d}</div>`);
  }

  calendar.innerHTML = days.join('');
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
