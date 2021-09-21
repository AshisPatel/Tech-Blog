const createPostHandler = async function(event){
    event.preventDefault();
    
    const title = document.querySelector('[name="title-input"]').value.trim();
    const post_text = document.querySelector('[name="content-input"]').value.trim();

    if(title && post_text) {
        const response = await fetch('/api/posts',{
            method: 'POST',
            body: JSON.stringify({
                title: title, 
                post_text: post_text
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('There needs to a title and content to add a post!');
    }
}

document.querySelector('#new-post-form').addEventListener('submit', createPostHandler);