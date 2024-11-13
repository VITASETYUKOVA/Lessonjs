const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${API_URL}?_limit=10`);
        return await response.json();
    } catch (error) {
        console.error("Помилка при завантаженні постів:", error);
        return [];
    }
};

export const createPost = async (title, body) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body, userId: 1 })
        });
        return await response.json();
    } catch (error) {
        console.error("Помилка  створення поста:", error);
        return null;
    }
};