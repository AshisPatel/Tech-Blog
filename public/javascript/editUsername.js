const updateUsernameHandler = async function(event) {
    event.preventDefault();
    const username = document.querySelector('[name="username-input"]').value.trim();
    console.log('username' + username);
    const response = await fetch('/api/users/updateUN', {
        method: 'PUT',
        body: JSON.stringify({
            username
        }),
        headers: {'Content-type': 'application/json'}
    });
    console.log('please?');
    if(response.ok) {
        console.log('Username changed!');
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('[name="save-btn"]').addEventListener('click', updateUsernameHandler);



