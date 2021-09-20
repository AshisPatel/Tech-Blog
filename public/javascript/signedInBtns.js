async function signOutBtnHandler(event) {
    event.preventDefault();
    const response = await fetch('/api/users/signout', {
        method: 'POST',
        headers: {'Content-type': 'application/json'}
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

async function dashboardBtnHandler(event) {
    event.preventDefault(); 
    document.location.replace('/dashboard');
}

document.querySelector('[name="sign-out-btn"]').addEventListener('click', signOutBtnHandler);
document.querySelector('[name="dashboard-btn"]').addEventListener('click', dashboardBtnHandler);

