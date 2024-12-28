// Select form input elements by their IDs
const userName = document.getElementById("userName");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const rePassword = document.getElementById("rePassword");

// Select the first form in the document
myForm = document.forms[0];

myForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (validation()) { // Check if all validations pass
        e.currentTarget.submit(); // Submit the form if validation is successful
    }
});

// Function to display an error message and apply error styles to an input field
const setError = (input, errorMsg) => {
    const inputControl = input.parentElement;
    const errorParagraph = inputControl.querySelector(".error");
    errorParagraph.innerText = errorMsg;
    input.classList.add(".error");
    input.classList.remove(".success");
};

// Function to clear error messages and apply success styles to an input field
const setSuccess = (input) => {
    const inputControl = input.parentElement;
    const errorParagraph = inputControl.querySelector(".error");
    errorParagraph.innerText = "";
    input.classList.remove(".error");
    input.classList.add(".success");
};

// Function to validate all form inputs
const validation = () => {
    let isValidate = true; // Flag to track overall validation status

    // Validate the Name input
    if (userName.value === "") { // Check if the name field is empty
        setError(userName, "Name is required"); // Display error if empty
        isValidate = false; // Mark validation as failed
    } else {
        setSuccess(userName); // Mark input as valid
    }

    // Validate the Email input
    if (!email.value.includes("@")) { // Check if email contains '@'
        setError(email, "Enter valid Email"); // Display error if invalid
        isValidate = false; // Mark validation as failed
    } else {
        setSuccess(email); // Mark input as valid
    }

    // Validate the Password input
    if (password.value.length < 8) { // Check if password is less than 8 characters
        setError(password, "Password must be at least 8 characters"); // Display error if too short
        isValidate = false; // Mark validation as failed
    } else {
        setSuccess(password); // Mark input as valid
    }

    // Validate the re-entered password
    if (!(password.value == rePassword.value)) { // Check if passwords match
        setError(rePassword, "Password does not match"); // Display error if mismatched
        isValidate = false; // Mark validation as failed
    } else {
        setSuccess(rePassword); // Mark input as valid
    }

    return isValidate; // Return overall validation status
};
