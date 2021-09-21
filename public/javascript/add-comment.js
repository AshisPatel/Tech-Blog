const addCommentHandler = async function(event) {   
    event.preventDefault();
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const commentText = document.querySelector('name=["comment-textarea"]').value.trim();
    
    if(commentText) {
        const response = await fetch('/api/comments',{
            method: 'POST',
            body: {
                comment_text = commentText,
                post_id = post_id,
            },
            headers: { 'Content-Type': 'application/json'}
        })

        if(response.ok) {
            console.log('Comment added!');
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#new-comment-form').addEventListener('submit', addCommentHandler);