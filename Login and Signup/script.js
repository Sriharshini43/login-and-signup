function displayLoginMessage() {
    var message = document.createElement("div");
    message.className = "login-message";
    message.textContent = "Login Successful";
  
    var container = document.querySelector(".container");
    container.appendChild(message);
  
    setTimeout(function() {
      container.removeChild(message);
    }, 5000);
  }

  function displayRegisterMessage() {
    var message = document.createElement("div");
    message.className = "signup-message";
    message.textContent = "signup Successful";
  
    var container = document.querySelector(".container");
    container.appendChild(message);
  

    setTimeout(function() {
      container.removeChild(message);
    }, 5000);
  }
  function displaySuccessMessage() {
    var successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.textContent = "Sent successfully";

    var formInner = document.querySelector(".form-inner");
    formInner.appendChild(successMessage);

    // Remove the success message after a certain duration (e.g., 3 seconds)
    setTimeout(function () {
        formInner.removeChild(successMessage);
    }, 3000);
}

  