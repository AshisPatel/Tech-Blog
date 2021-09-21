// Grab the current URL, turn into a string.
// Splitting the string into an array with the elements being the items between /'s
// The length - 1 will return the element of the id, as it is the last indexed item in the array
const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

const savePostHandler = async function (event) {
    event.preventDefault();
    
    const title = document.querySelector('[name="post-title"]').value.trim();
    const postText = document.querySelector('[name="post-text"]').value.trim();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            post_text: postText
        }),
        headers: { 'Content-type': 'application/json' }
    });

    if (response.ok) {
        alert('Post had been succesfully saved!');
    } else {
        alert(response.statusText);
    }
}

const deletePostHandler = async function (event) {
    event.preventDefault();

    const response = await fetch(`/api/posts/${id}`,{
        method: 'DELETE'
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('[name="save-btn"]').addEventListener('click', savePostHandler);

document.querySelector('[name="delete-btn"]').addEventListener('click', deletePostHandler);
