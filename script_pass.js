document.getElementById("showContentButton").addEventListener("click" , function() {
    const passwordInput = document.getElementById("passwordInput");
    const hiddenContent = document.getElementById("hiddenContent");
    const password = "kawaii"; // Change this to your desired password

    if (passwordInput.value === "1potato2icecream." || "1Potato2Icecream." || "1potato2icecream" || "potato" || "dinesh" || "naruto" || "iloveyounaruto") {
        hiddenContent.style.display = "block";
    } else {
        alert("Incorrect secret code. Try again.");
    }
});
