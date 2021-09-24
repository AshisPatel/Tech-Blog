
const signinFormHandler = async function (event) {
    event.preventDefault();
    // Get username and password from form
    const username = document.querySelector('#username-sign-in').value.trim();
    const password = document.querySelector('#password-sign-in').value.trim();

    // Check to see if there were values provided
    if (username && password) {
        // Call the post request in the api for user-routes to sign-in
        const response = await fetch('/api/users/signin', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-type': 'application/json' }
        });

        // Check if response went through
        if (response.ok) {
            console.log('Signed in!');
            document.location.replace('/');
        } else {
            console.log(response); 
            if(response.status === 400) alert('Incorrect username or password');    
        }
    }

};

// Listen for submit on sign-up form
document.querySelector('form').addEventListener('submit', signinFormHandler);