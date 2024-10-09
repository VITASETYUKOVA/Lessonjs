const todoList = document.querySelector('#todoList');
const newTaskInput = document.querySelector('#newTaskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const listItem = event.target.parentElement;  
        listItem.remove();  
    }
});

addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();  

    if (taskText) {  
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;
        todoList.appendChild(newTask);
        newTaskInput.value = '';
    }
});
