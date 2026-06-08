fetch("data/submission.json")
.then(response => response.json())
.then(data => {

let tbody =
document.getElementById("submissionBody");

data.forEach(item => {

tbody.innerHTML += `
<tr>
<td>${item.no}</td>
<td>${item.title}</td>
<td>${item.status}</td>
</tr>
`;

});

});
