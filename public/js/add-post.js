async function newBlogPost(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postBody = document.querySelector('textarea[name="post-body"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            postTitle, postBody
        }),
        headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
}

document.querySelector('.new-post-form').addEventListener('submit', newBlogPost);