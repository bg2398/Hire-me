
document.getElementById("hire-me-btn").addEventListener("click", function() {
    // Replace this code with your own code to handle the button click
    alert("Thank you for your interest in hiring me! Plese reach out to me through any of my listed forms of contact below!");
  });
  
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
  