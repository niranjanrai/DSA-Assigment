function addUserInput() {
  var userInput = document.getElementById("userInput").value.trim();

  if (userInput !== "") {
    var userInputsContainer = document.getElementById("userInputs");
    var newUserInput = document.createElement("div");
    newUserInput.classList.add("user-input");
    newUserInput.textContent = userInput;
    userInputsContainer.appendChild(newUserInput);
    document.getElementById("userInput").value = "";
  }
}
