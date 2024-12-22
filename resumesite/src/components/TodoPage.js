import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../store/slices/todoSlice';
import { Input, List, Button } from 'antd';

const TodoPage = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Input
        placeholder="Додати нову задачу"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onPressEnter={handleAdd}
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: '10px' }}>
        Додати
      </Button>
      <List
        bordered
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? 'Не виконано' : 'Виконано'}
              </Button>,
              <Button type="link" danger onClick={() => dispatch(removeTodo(todo.id))}>
                Видалити
              </Button>,
            ]}
          >
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoPage;
