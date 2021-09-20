// Select the sign-in button on the dashboard take the user to the sign-in page form
function signinButtonHandler(event) {
    event.preventDefault();

    document.location.replace('/signin');
}


document.querySelector('[name="sign-in-btn"]').addEventListener('click', signinButtonHandler);