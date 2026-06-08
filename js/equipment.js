if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

fetch("data/equipment.json")
.then(response => response.json())
.then(data => {

    let tbody =
        document.getElementById("equipmentBody");

    data.forEach(item => {

        tbody.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.description}</td>
            <td>${item.qty}</td>
            <td>${item.status}</td>
        </tr>
        `;

    });

});

function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "index.html";

}
