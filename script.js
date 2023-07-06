 // JavaScript form validation
 function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    var fullName = document.getElementById("fullName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById("email").value;
    var back= document.querySelector(".Back");

    // Validate form inputs
    var errorMessages = [];
    if (fullName.trim() === "") {
        errorMessages.push("Full Name is required");
    }
    if (mobileNumber.trim() === "") {
        errorMessages.push("Mobile Number is requiredand should be a valid email address");
    }
  
    // Display error messages or submit form
    var errorContainer = document.getElementById("errorContainer");
    if (errorMessages.length > 0) {
        errorContainer.innerHTML = errorMessages.join("<br>");
    } else {
        // Submit the form
        document.getElementById("registrationForm").submit();
    }

}


window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }