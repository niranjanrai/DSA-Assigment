function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let phone = document.forms["myForm"]["phone"].value;
  let password = document.forms["myForm"]["password"].value;
  let age = document.forms["myForm"]["age"].value;
  let gender = document.forms["myForm"]["gender"].value;
  let date = document.forms["myForm"]["date"].value;
  let color = document.forms["myForm"]["color"].value;

  let isValid = true;

  if (name == "") {
    document.getElementById("nameError").innerHTML = "Name is required.";
    isValid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("emailError").innerHTML = "Email is required.";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if (phone == "") {
    document.getElementById("phoneError").innerHTML =
      "Phone number is required.";
    isValid = false;
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }

  if (password == "") {
    document.getElementById("passwordError").innerHTML =
      "Password is required.";
    isValid = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }

  if (age == "") {
    document.getElementById("ageError").innerHTML = "Age is required.";
    isValid = false;
  } else {
    document.getElementById("ageError").innerHTML = "";
  }

  if (gender == "") {
    document.getElementById("genderError").innerHTML = "Gender is required.";
    isValid = false;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }

  if (date == "") {
    document.getElementById("dateError").innerHTML = "Date is required.";
    isValid = false;
  } else {
    document.getElementById("dateError").innerHTML = "";
  }

  if (color == "") {
    document.getElementById("colorError").innerHTML = "Color is required.";
    isValid = false;
  } else {
    document.getElementById("colorError").innerHTML = "";
  }

  return isValid;
}
