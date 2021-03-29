function validateForm() {
  var username = document.forms.login.username.value;
  var password = document.forms.login.password.value;
  const userErrorElement = document.getElementById("userError");
  const passErrorElement = document.getElementById("passError");

  userErrorElement.innerHTML = "";
  passErrorElement.innerHTML = "";

  if (username == "") {
    userErrorElement.innerHTML = "Must enter a username";
    return false;
  }

  if (username != "username") {
    userErrorElement.innerHTML = "Username does not match any registered users";
    return false;
  }

  if (password == "") {
    passErrorElement.innerHTML = "Must enter a password";
    return false;
  }

  if (password != "password") {
    passErrorElement.innerHTML = "Password does not match username";
    return false;
  }

  alert("You logged in!");

  return true;
}
