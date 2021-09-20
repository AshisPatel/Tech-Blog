// Select the sign-in button on the dashboard take the user to the sign-in page form
function signinButtonHandler(event) {
    event.preventDefault();

    document.location.replace('/signin');
}

function signupButtonHandler(event) {
    event.preventDefault();

    document.location.replace('/signup');
}

document.querySelector('[name="sign-in-btn"]').addEventListener('click', signinButtonHandler);
document.querySelector('[name="sign-up-btn"]').addEventListener('click', signupButtonHandler);