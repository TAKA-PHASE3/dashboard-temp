// Check login status
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

// Load project data
fetch("data/project.json")
.then(response => response.json())
.then(data => {

    document.getElementById("progress").innerHTML =
        data.progress + "%";

    document.getElementById("budget").innerHTML =
        "$" + Number(data.budget).toLocaleString();

    document.getElementById("manpower").innerHTML =
        data.manpower;

})
.catch(error => {

    console.error(
        "Unable to load project data:",
        error
    );

});

// Logout function
function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "index.html";

}
