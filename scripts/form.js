const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(event) {
    const passwordError = document.getElementById("passwordError"); 
    const emailError = document.getElementById("emailError"); 

    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        passwordError.style.display = "block";
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    } else {
        passwordError.style.display = "none";
    }

    const email = document.getElementById("email");
    if (!email.validity.valid) {
        event.preventDefault();
        emailError.style.display = "block";
        email.focus();
    } else {
        emailError.style.display = "none";
    }
});

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}