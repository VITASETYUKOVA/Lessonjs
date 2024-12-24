import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodoToStore, deleteTodoFromStore } from '../store/todosSlice';
import './TodoList.css';

export default function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div>
            <h3 className={todo.completed ? 'completed' : ''}>{todo.title}</h3>
            <p>{todo.description || 'No description provided.'}</p>
          </div>
          <div className="buttons">
            <button
              onClick={() => dispatch(toggleTodoToStore(todo.id))}
              className="toggle-button"
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => dispatch(deleteTodoFromStore(todo.id))}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}