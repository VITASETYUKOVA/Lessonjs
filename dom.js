export const renderPost = (post) => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="loadComments(${post.id}, this)">Завантажити коментарі</button>
        <div class="comments" id="comments-${post.id}"></div>
    `;
    return postElement;
};

export const renderComments = (comments, postId) => {
    const commentsContainer = document.getElementById(`comments-${postId}`);
    commentsContainer.innerHTML = comments.map(comment => `
        <div>
            <strong>${comment.name} (${comment.email})</strong>
            <p>${comment.body}</p>
        </div>
    `).join('');
};

export const clearForm = () => {
    document.getElementById('post-title').value = '';
    document.getElementById('post-body').value = '';
};