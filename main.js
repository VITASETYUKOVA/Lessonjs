function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => response.json())
    .then((posts) => {
      const postsContainer = document.getElementById("posts-container");
      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <button onclick="loadComments(${post.id}, this)">Завантажити коментарі</button>
                    <div class="comments" id="comments-${post.id}"></div>
                `;
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => console.error("Помилка при завантаженні постів:", error));
}

function loadComments(postId, button) {
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`
  )
    .then((response) => response.json())
    .then((comments) => {
      const commentsContainer = document.getElementById(`comments-${postId}`);
      commentsContainer.innerHTML = comments
        .map(
          (comment) => `
                <div>
                    <strong>${comment.name} (${comment.email})</strong>
                    <p>${comment.body}</p>
                </div>
            `
        )
        .join("");

      button.disabled = true;
    })
    .catch((error) =>
      console.error("Помилка при завантаженні коментарів:", error)
    );
}

document.getElementById("post-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((newPost) => {
      const messageElement = document.getElementById("message");
      messageElement.innerText = "Пост створен успішно";

      setTimeout(() => (messageElement.innerText = ""), 3000); // Очищаем сообщение через 3 секунды

      const postsContainer = document.getElementById("posts-container");
      const postElement = document.createElement("div");
      postElement.innerHTML = `
            <h3>${newPost.title}</h3>
            <p>${newPost.body}</p>
            <button onclick="loadComments(${newPost.id}, this)">Завантажити коментарі</button>
            <div class="comments" id="comments-${newPost.id}"></div>
        `;
      postsContainer.prepend(postElement);
      document.getElementById("post-title").value = "";
      document.getElementById("post-body").value = "";
    })
    .catch((error) => {
      console.error("Помилка створення поста:", error);
      document.getElementById("message").innerText = "Помилка створення поста";
    });
});

fetchPosts();
