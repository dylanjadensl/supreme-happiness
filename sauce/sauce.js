function checkPassword() {
    const enteredPassword = document.getElementById("password").value;
    const correctPassword = "sexc"; // Replace with your actual password
    const contentDiv = document.getElementById("content");

    if (enteredPassword === correctPassword) {
        contentDiv.style.display = "block";
        document.querySelector(".password-form").style.display = "none";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
