const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  
app.use(express.static('frontend'));  

let todos = [
    { id: 1, title: 'Задача 1', completed: false },
    { id: 2, title: 'Задача 2', completed: false },
    { id: 3, title: 'Задача 3', completed: true }
];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { title, completed } = req.body;
    const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: completed || false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;

    let todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.title = title || todo.title;
        todo.completed = completed !== undefined ? completed : todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Задача не знайдена' });
    }
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(200).json({ message: 'Задача видалена' });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер працює на порту ${port}`);
});