const email = document.getElementById("userEmail");

myForm = document.forms[0];

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validation()) {
        e.currentTarget.submit();
    }
})

const setError = (input, errorMsg) => {
    const inputControl = input.parentElement;
    const errorParagraph = inputControl.querySelector(".error");
    errorParagraph.innerText = errorMsg;
    input.classList.add(".error");
}

const setSuccess = (input) => {
    const inputControl = input.parentElement;
    const errorParagraph = inputControl.querySelector(".error");
    errorParagraph.innerText = "";
    input.classList.remove(".error");
}

const validation = () => {
    let isValidate = true;

    // Email validation
    if (!email.value.includes("@")) {
        setError(email, "Enter valid Email");
        isValidate = false;
    }
    else {
        setSuccess(email);
    }

    return isValidate;
}