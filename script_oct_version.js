document.getElementById("showContentButton").addEventListener("click" , function() {
    const passwordInput = document.getElementById("passwordInput");
    const hiddenContent = document.getElementById("hiddenContent");
    const password = ["1potato2icecream." , "1Potato2Icecream." , "1potato2icecream" , "potato" , "dinesh" , "naruto" , "iloveyounaruto"]; // Change this to your desired password

    if (passwordInput.value === "potato" || passwordInput.value === "1Potato2Icecream." || passwordInput.value === "1potato2icecream." || passwordInput.value === "naruhina") {
        hiddenContent.style.display = "block";
    } 
});
