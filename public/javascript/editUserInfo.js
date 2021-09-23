// Changing username is a simple push through and call the api/user/ 'put' route. After grabbing the id from the session.
const updateUsernameHandler = async function(event) {
    event.preventDefault();
    const user = document.querySelector('.username').textContent;
    console.log(user);
    const username = document.querySelector('[name="username-input"]').value.trim();
    console.log('new name:' + username);

    const response = await fetch(`/api/users/${user}`, {
        method: 'PUT',
        body: JSON.stringify({
            username: username
        }),
        headers: { 'Content-type': 'application/json'}
    });
    if (response.ok) {
        console.log('username changed!');
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}



// Changing password will require two requests ? one get request with the password, and checking if the current password matches the password in the db, and then another request of sending the update information through?