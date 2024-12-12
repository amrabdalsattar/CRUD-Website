const userName = document.getElementById("userName");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const rePassword = document.getElementById("rePassword");

myForm = document.forms[0];

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validation()) {
        e.currentTarget.submit();
    }
})

const setError = (input, errorMsg) => {
    const inputControl = input.parentElement
    const errorParagraph = inputControl.querySelector(".error")
    errorParagraph.innerText = errorMsg
    input.classList.add(".error")
    input.classList.remove(".success")
}

const setSuccess = (input) => {
    const inputControl = input.parentElement
    const errorParagraph = inputControl.querySelector(".error")
    errorParagraph.innerText = ""
    input.classList.remove(".error")
    input.classList.add(".success")
}

const validation = () => {
    let isValidate = true
    // Name validation
    if (userName.value === "") {
        setError(userName, "Name is required")
        isValidate = false
    } else {
        setSuccess(userName)
    }

    // Email validation
    if (!email.value.includes("@")) {
        setError(email, "Enter valid Email")
        isValidate = false
    }
    else {
        setSuccess(email)
    }

    // Password validation
    if (password.value.length < 8) {
        setError(password, "Password must be at least 8 characters")
        isValidate = false
    } else {
        setSuccess(password)
    }

    // re-Enter password
    if (!(password.value == rePassword.value)) {
        setError(rePassword, "Password does not match")
        isValidate = false
    } else {
        setSuccess(rePassword)
    }
    return isValidate;
}