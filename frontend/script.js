document.addEventListener("DOMContentLoaded", function () {
    const scheduleData = [
        { subject: "Integrative Programming And Technologies 1 LEC", day: "Tuesday", time: "8:00 AM - 10:00 AM", room: "LAB C" },
        { subject: "Web Development 2 LEC", day: "Tuesday", time: "11:00 AM - 1:00 PM", room: "LAB C" },
        { subject: "Introduction to Human Computer Interaction LEC", day: "Tuesday", time: "1:00 PM - 3:00 PM", room: "LAB C" },
        { subject: "Networking 1 LEC", day: "Tuesday", time: "3:00 PM - 5:00 PM", room: "LAB C" },
        { subject: "Database Management System 2 LEC", day: "Tuesday", time: "6:00 PM - 8:00 PM", room: "LAB C" }
    ];

    const tableBody = document.querySelector("#scheduleTable tbody");

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
});
