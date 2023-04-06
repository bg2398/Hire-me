document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default form submission behavior
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const msgInput = document.getElementById("msg-input");
    const name = nameInput.value;
    const email = emailInput.value;
    const msg = msgInput.value;
    // send the form data to your server or process it in some other way
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", msg);
    // reset the form after submission
    nameInput.value = "";
    emailInput.value = "";
    msgInput.value = "";
  });
  