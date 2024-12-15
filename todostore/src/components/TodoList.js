import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoToStore, deleteTodoFromStore } from '../store/todosSlice';
import './TodoList.css';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div>
            <h3 className={todo.completed ? 'completed' : ''}>{todo.title}</h3>
            <p>{todo.description}</p>
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
