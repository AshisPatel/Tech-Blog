const updateUsernameHandler = async function (event) {
    event.preventDefault();
    let id;
    const user = document.querySelector('.username').textContent;
    console.log(user);

    const response = await fetch(`/api/users/${user}`, {
        method: 'GET'
    });

    if (response.ok) {
        const data = await response.json();
        id = data.id;
    }

    return updateUsername(id);
}

const updateUsername = async function (id) {
    const username = document.querySelector('[name="username-input"]').value.trim();
    console.log('username' + username);
    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            username
        }),
        headers: { 'Content-type': 'application/json' }
    });
    if (response.ok) {
        console.log('Username changed!');
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('[name="save-btn"]').addEventListener('click', updateUsernameHandler);



