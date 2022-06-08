const serverData = await fetch('http://localhost:3000/applications', {
    method: 'GET',
});
const data = await serverData.json();
data.forEach(participant => {
    if (participant.hobbies === undefined) {
        participant.hobbies = "нет";
    }
    const tableData = document.createElement('tr');
    tableData.innerHTML = 
        `<td>${participant.name}</td>
        <td>${participant.email}</td>
        <td>${participant.mobile}</td>
        <td>${participant.country}</td>
        <td>${participant.gender}</td>
        <td>${participant.hobbies}</td>`
    document.getElementById('table').appendChild(tableData);
});
