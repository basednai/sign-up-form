function validatePW() {
    let password = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#confirm-password");
    if (password.value != passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Passwords do not match")
        passwordConfirm.reportValidity();
    } else {
        // input is valid -- reset the error message
        passwordConfirm.setCustomValidity('');
        passwordConfirm.reportValidity();
    }
}