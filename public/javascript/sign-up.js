function signupButtonHandler(event) {
    event.preventDefault();

    document.location.replace('/signup');
}


document.querySelector('[name="sign-up-btn"]').addEventListener('click', signupButtonHandler);