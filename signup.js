
document.addEventListener("DOMContentLoaded", function () {
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error_message");
const submitBtn = document.getElementById("submit");

function validatePasswords() {
if (password.value !== confirmPassword.value) {
    errorMessage.textContent = "Passwords do not match!";
    errorMessage.style.display = "block";
    submitBtn.disabled = true;
} else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    submitBtn.disabled = false;
}
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

document.getElementById("passwordForm").addEventListener("submit", function (event) {
  validatePasswords();
  if (password.value !== confirmPassword.value) {
      event.preventDefault(); // Prevent form submission
 }
});
});