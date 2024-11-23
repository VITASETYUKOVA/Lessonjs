const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let todos = [
    { id: 1, title: 'Перше завдання', completed: false },
    { id: 2, title: 'Друге завдання', completed: true },
    { id: 3, title: 'Третє завдання', completed: false }
];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = req.body;
    
    newTodo.id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});


app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === parseInt(id));

    if (index !== -1) {
       
        todos[index] = { id: parseInt(id), ...updatedTodo };
        res.json(todos[index]);
    } else {
        res.status(404).json({ error: 'Задача не знайдена' });
    }
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === parseInt(id));

    if (index !== -1) {
       
        todos.splice(index, 1);
        res.status(204).end(); 
    } else {
        res.status(404).json({ error: 'Задача не знайдена' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});