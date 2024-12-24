import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoToStore } from '../store/todosSlice';
import './TodoForm.css';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Both title and description are required');
      return;
    }
    dispatch(addTodoToStore({ title, description }));
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-button">Add Todo</button>
      {error && <div className="error-message">{error}</div>} 
    </form>
  );
}
