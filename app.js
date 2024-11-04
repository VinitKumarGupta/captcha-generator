const display = document.getElementById("_status");
const body = document.body;
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");
const inputField = document.getElementById("_client-text");
const captchaDisplay = document.getElementById("_generator");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha = "";

function generateCaptcha() {
    captcha = "";
    const captchaLength = 6;
    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char[randomIndex];
    }
    captchaDisplay.value = captcha;
    display.innerText = "Captcha Generator";
}

body.onload = generateCaptcha;

submit.onclick = function checkInput() {
    const input = inputField.value.trim(); // Get the value and trim whitespace

    if (input === "") {
        display.innerText = "Please enter the captcha below";
    } else if (input === captcha) {
        display.innerText = "Matched!";
    } else {
        display.innerText = "Not Matched!";
        inputField.value = ""; // Clear the input field directly
    }
};

refresh.onclick = function refreshCaptcha() {
    generateCaptcha(); // Regenerate a new captcha
    display.innerText = "Captcha Generator";
};
