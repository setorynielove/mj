function validateForm() {

  // clear errors
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("birthError").innerHTML = "";
  document.getElementById("sexError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("userError").innerHTML = "";
  document.getElementById("passError").innerHTML = "";
  document.getElementById("confirmError").innerHTML = "";
  document.getElementById("reasonError").innerHTML = "";
  document.getElementById("issueError").innerHTML = "";
  document.getElementById("partError").innerHTML = "";
  document.getElementById("success").innerHTML = "";

  let isValid = true;

  // personal
  let name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").innerHTML = "Enter valid name";
    isValid = false;
  }

  let birth = document.getElementById("birth").value;
  if (birth === "") {
    document.getElementById("birthError").innerHTML = "Enter birthdate";
    isValid = false;
  }

  let sex = document.getElementsByName("sex");
  let chosen = false;
  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) chosen = true;
  }
  if (!chosen) {
    document.getElementById("sexError").innerHTML = "Select one";
    isValid = false;
  }

  let email = document.getElementById("email").value;
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("emailError").innerHTML = "Invalid email";
    isValid = false;
  }

  // account
  let username = document.getElementById("username").value;
  let pattern = /^[a-zA-Z0-9]+$/;

  if (username.length < 8 || username.length > 20) {
    document.getElementById("userError").innerHTML = "8-20 chars";
    isValid = false;
  }

  if (!pattern.test(username)) {
    document.getElementById("userError").innerHTML = "Letters & numbers only";
    isValid = false;
  }

  let password = document.getElementById("password").value;

  if (password.length < 10) {
    document.getElementById("passError").innerHTML = "Too short";
    isValid = false;
  }

  if (!/[A-Z]/.test(password)) {
    document.getElementById("passError").innerHTML = "Add uppercase";
    isValid = false;
  }

  if (!/[a-z]/.test(password)) {
    document.getElementById("passError").innerHTML = "Add lowercase";
    isValid = false;
  }

  if (!/[0-9]/.test(password)) {
    document.getElementById("passError").innerHTML = "Add number";
    isValid = false;
  }

  let confirm = document.getElementById("confirm").value;
  if (confirm !== password) {
    document.getElementById("confirmError").innerHTML = "Not match";
    isValid = false;
  }

  // questions
  let reason = document.getElementById("reason").value;
  if (reason === "") {
    document.getElementById("reasonError").innerHTML = "Choose one";
    isValid = false;
  }

  let issues = document.getElementsByName("issue");
  let check = false;
  for (let i = 0; i < issues.length; i++) {
    if (issues[i].checked) check = true;
  }
  if (!check) {
    document.getElementById("issueError").innerHTML = "Pick one";
    isValid = false;
  }

  let part = document.getElementsByName("participation");
  let ok = false;
  for (let i = 0; i < part.length; i++) {
    if (part[i].checked) ok = true;
  }
  if (!ok) {
    document.getElementById("partError").innerHTML = "Select one";
    isValid = false;
  }

  // success
  if (isValid) {
    document.getElementById("success").innerHTML = "You joined!";
  }

  return isValid;
}