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
    // Grab the id of the user that is going to the dashboard
    document.location.replace('/dashboard');
    // const id = "";
    // const response = await fetch(`/api/user/${id}`, {
    //     method: 'GET',
    //     headers: {'Content-type': 'application/json'}
    // });

    // if (response.ok){
    //     document.location.replace('/dashboard');
    // }

}

document.querySelector('[name="sign-out-btn"]').addEventListener('click', signOutBtnHandler);
document.querySelector('[name="dashboard-btn"]').addEventListener('click', dashboardBtnHandler);

