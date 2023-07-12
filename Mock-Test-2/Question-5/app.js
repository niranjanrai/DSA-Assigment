function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form field values
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var password = document.getElementById("password").value.trim();
  var age = document.getElementById("age").value.trim();
  var gender = document.getElementById("gender").value;
  var dob = document.getElementById("dob").value;
  var color = document.getElementById("color").value;

  // Regular expressions for validation
  var nameRegex = /^[a-zA-Z\s]+$/;
  var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  var phoneRegex = /^\d{10}$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;

  // Validate each field
  var isValid = true;

  if (!nameRegex.test(name)) {
    isValid = false;
    alert("Please enter a valid name.");
  }

  if (!emailRegex.test(email)) {
    isValid = false;
    alert("Please enter a valid email address.");
  }

  if (!phoneRegex.test(phone)) {
    isValid = false;
    alert("Please enter a valid phone number.");
  }

  if (!passwordRegex.test(password)) {
    isValid = false;
    alert(
      "Please enter a valid password. It should be at least 6 characters long and contain at least one letter and one number."
    );
  }

  if (isNaN(age) || age < 1 || age > 150) {
    isValid = false;
    alert("Please enter a valid age.");
  }

  if (gender === "") {
    isValid = false;
    alert("Please select a gender.");
  }

  // Perform additional validation for date of birth
  var today = new Date();
  var selectedDate = new Date(dob);

  if (selectedDate >= today) {
    isValid = false;
    alert("Please enter a valid date of birth.");
  }

  if (isValid) {
    // Form is valid, you can submit the data or perform additional actions
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset(); // Reset the form
  }
}
