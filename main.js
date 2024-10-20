document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js--form');
    const todosWrapper = document.querySelector('.js--todos-wrapper');
    const input = document.querySelector('.js--form__input');
    
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const renderTodos = () => {
        todosWrapper.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'todo-item--checked' : ''}`;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => toggleComplete(index));
            
            const span = document.createElement('span');
            span.className = 'todo-item__description';
            span.textContent = todo.text;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'todo-item__delete';
            deleteBtn.textContent = 'Видалити';
            deleteBtn.addEventListener('click', () => deleteTodo(index));
            
            li.append(checkbox, span, deleteBtn);
            todosWrapper.append(li);
        });
    };

    const addTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            text: input.value,
            completed: false
        };
        todos.push(newTodo);
        input.value = '';
        updateTodos();
    };

    const deleteTodo = (index) => {
        todos.splice(index, 1);
        updateTodos();
    };

    const toggleComplete = (index) => {
        todos[index].completed = !todos[index].completed;
        updateTodos();
    };

    const updateTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    };

    form.addEventListener('submit', addTodo);
    renderTodos();
});