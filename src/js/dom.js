export const loadComments = async (postId, button) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}&_limit=2`);
    const comments = await response.json();
    renderComments(comments, postId);
  } catch (error) {
    console.error("Ошибка при загрузке комментариев:", error);
  }
};
export const renderPost = (post, container) => {
  const postElement = document.createElement('div');
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <button id="load-comments-${post.id}">Завантажити коментарі</button>
    <div class="comments" id="comments-${post.id}"></div>
  `;


  const button = postElement.querySelector(`#load-comments-${post.id}`);
  button.addEventListener('click', () => loadComments(post.id, button));

  container.appendChild(postElement);
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
  
  
  export const displayMessage = (message) => {
    const messageContainer = document.getElementById('message');
    messageContainer.innerText = message;
  };