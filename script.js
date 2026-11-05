
// Get the form from the first page
const userForm = document.getElementById("userForm");

// Check whether the form exists
if (userForm) {

    userForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Collect user information
        const userData = {
            name: document.getElementById("name").value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            mobile: document.getElementById("mobile").value,
            email: document.getElementById("email").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            country: document.getElementById("country").value
        };

        // Store information in sessionStorage
        sessionStorage.setItem("userData", JSON.stringify(userData));

        // Open the second page
        window.location.href = "display.html";

    });
}


// Display information on the second page
const result = document.getElementById("result");

if (result) {

    const savedData = sessionStorage.getItem("userData");

    if (savedData) {

        const userData = JSON.parse(savedData);

        document.getElementById("showName").textContent = userData.name;
        document.getElementById("showGender").textContent = userData.gender;
        document.getElementById("showMobile").textContent = userData.mobile;
        document.getElementById("showEmail").textContent = userData.email;
        document.getElementById("showCity").textContent = userData.city;
        document.getElementById("showState").textContent = userData.state;
        document.getElementById("showCountry").textContent = userData.country;

    } else {

        result.textContent = "No information found. Please submit the form first.";

    }
}


// Go back to the form page
function goBack() {
    window.location.href = "index.html";
}
