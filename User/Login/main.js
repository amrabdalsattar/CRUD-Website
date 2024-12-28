const email = document.getElementById("userEmail");

myForm = document.forms[0];

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Check is valid
    if (validation()) {
        e.currentTarget.submit();
    }
})


// Function to Specify the error message
const setError = (input, errorMsg) => {
    const inputControl = input.parentElement;
    const errorParagraph = inputControl.querySelector(".error");
    errorParagraph.innerText = errorMsg;
    input.classList.add(".error");
}

// Function to Remove the error message
const setSuccess = (input) => {
    const inputControl = input.parentElement;
    const errorParagraph = inputControl.querySelector(".error");
    errorParagraph.innerText = "";
    input.classList.remove(".error");
}

const validation = () => {
    let isValidate = true;

    // Email validation if not contains "@"
    if (!email.value.includes("@")) {
        setError(email, "Enter valid Email");
        isValidate = false;
    }
    else {
        setSuccess(email);
    }

    return isValidate;
}