// Show alert on button click
function showAlert() {
  alert("Hello! Thanks for visiting my website.");
}

// Validate contact form
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msg.style.color = "red";
    msg.textContent = "Please fill out all fields.";
    return false;
  }

  msg.style.color = "green";
  msg.textContent = "Message sent successfully!";
  return false; // Prevents real submission (since no backend)
}
