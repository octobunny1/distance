function checkPassword() {
    var enteredPassword = document.getElementById("password").value.trim();

    var correctPasswords = ["1potato2icecream.", "1Potato2Icecream.", "1potato2icecream", "potato", "dinesh", "naruto", "iloveyounaruto"];

    if (correctPasswords.includes(enteredPassword)) {
        window.location.href = "https://drive.google.com/file/d/1dIIoZOWyN4h1kB7IerVoR3eC9pD9hpDi/view?usp=sharing"; // Replace with your original webpage URL
    } else {
        alert("Incorrect password. Please try again.");
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
