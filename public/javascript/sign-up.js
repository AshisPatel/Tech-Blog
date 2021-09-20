
const signupFormHandler = async function (event) {
    event.preventDefault();
    // Get username and password from form
    const username = document.querySelector('#username-sign-up').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();

    // Check to see if there were values provided
    if (username && password) {
        // Call the post request in the api for user-routes to create a new user
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-type': 'application/json' }
        });

        // Check if response went through
        if (response.ok) {
            console.log('User created!');
            window.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

};

// Listen for submit on sign-up form
document.querySelector('form').addEventListener('submit', signupFormHandler);