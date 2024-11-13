import { fetchPosts, createPost } from './api.js';
import { displayPost, displayMessage } from './dom.js';

const postsContainer = document.getElementById("posts-container");
const postForm = document.getElementById("post-form");

const loadPosts = async () => {
    const posts = await fetchPosts();
    postsContainer.innerHTML = '';
    posts.forEach(post => displayPost(post, postsContainer));
};

postForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("post-title").value;
    const body = document.getElementById("post-body").value;
    const newPost = await createPost(title, body);

    if (newPost) {
        displayPost(newPost, postsContainer);
        displayMessage("Пост створен успішно");
        postForm.reset();
    } else {
        displayMessage("Помилка створення поста");
    }
});

loadPosts();