const apiUrl = 'http://localhost:3000/todos';


async function getTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    renderTodos(todos);
}

function renderTodos(todos) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';  

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

        todoItem.innerHTML = `
            <span>${todo.title} - ${todo.completed ? 'Виконано' : 'Не виконано'}</span>
            <button onclick="deleteTodo(${todo.id})">Видалити</button>
            <button class="edit-button" onclick="openEditForm(${todo.id}, '${todo.title}', ${todo.completed})">Редагувати</button>
        `;

        todoList.appendChild(todoItem);
    });
}

document.getElementById('addTodoForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;

    const newTodo = {
        title,
        completed: false
    };

    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
    });

    document.getElementById('title').value = ''; 
    getTodos(); 
});

async function deleteTodo(id) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        getTodos(); 
    } else {
        alert('Не вдалося видалити задачу');
    }
}


function openEditForm(id, title, completed) {
    const newTitle = prompt('Редагувати назву задачі:', title);
    const newCompleted = confirm('Чи виконана задача?') ? true : false;

    if (newTitle !== null) {
        updateTodo(id, newTitle, newCompleted);
    }
}


async function updateTodo(id, title, completed) {
    const updatedTodo = { title, completed };

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodo)
    });

    if (response.ok) {
        getTodos(); 
    } else {
        alert('Не вдалося оновити задачу');
    }
}

getTodos();
