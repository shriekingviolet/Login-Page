function validateForm() {
  var username = document.forms.login.username.value;
  var password = document.forms.login.password.value;
  const userErrorElement = document.getElementById("userError");
  const passErrorElement = document.getElementById("passError");

  userErrorElement.innerHTML = "Placeholder";
  userErrorElement.style.color = "#44475a";
  passErrorElement.innerHTML = "Placeholder";
  passErrorElement.style.color = "#44475a";

  if (username == "") {
    userErrorElement.innerHTML = "Must enter a username";
    userErrorElement.style.color = "#ff5555";
    return false;
  }

  if (username != "username") {
    userErrorElement.innerHTML = "Username not recognized";
    userErrorElement.style.color = "#ff5555";
    return false;
  }

  if (password == "") {
    passErrorElement.innerHTML = "Must enter a password";
    passErrorElement.style.color = "#ff5555";
    return false;
  }

  if (password != "password") {
    passErrorElement.innerHTML = "Password does not match username";
    passErrorElement.style.color = "#ff5555";
    return false;
  }

  alert("You logged in!");

  return true;
}
