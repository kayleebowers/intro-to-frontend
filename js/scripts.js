(function () {
  //target doc sections
  let form = document.querySelector(".contact-form");
  let email = document.querySelector("#email");

  //error message function
  function showErrorMessage(input, message) {
    let container = input.parentElement;

    //remove existing message
    let error = container.querySelector(".error-message");
    if (error) {
      container.removeChild(error);
    }

    //add error message
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      container.appendChild(error);
    }
  }

  //validate email function
  function validateEmail() {
    let value = email.value;
    let hasAtSign = value.indexOf("@") > -1;
    let hasPeriod = value.indexOf(".") > -1;

    if (!value) {
      showErrorMessage(email, "Email is required");
      return false;
    }

    if (!hasAtSign || !hasPeriod) {
      showErrorMessage(email, "Not a valid email");
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  //validate form function
  function validateForm() {
    return validateEmail();
  }

  //submit success alert
  form.addEventListener("submit", function (e) {
    e.preventDefault(); //FORM IS NOT SUBMITTING TO SERVER
    if (validateForm()) {
      alert("Success");
    }
  });

  return {
    validateEmail,
    showErrorMessage,
    validateForm
  }
})();
