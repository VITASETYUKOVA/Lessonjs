import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';

export default function Footer() {
  const todosCount = useSelector((state) => state.todos.todos.length);

  return (
    <footer className="footer">
      <p>Total Todos: {todosCount}</p>
    </footer>
  );
}
