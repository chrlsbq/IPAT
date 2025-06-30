document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3001/schedule')
        .then(response => response.json())
        .then(scheduleData => {
            const tableBody = document.querySelector("#scheduleTable tbody");
            tableBody.innerHTML = ""; // Clear previous rows
            scheduleData.forEach(row => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${row.subject}</td>
                    <td>${row.day}</td>
                    <td>${row.time}</td>
                    <td>${row.room}</td>
                `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Error fetching schedule:', error);
        });
});
