import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoToStore: (state, action) => {
      state.todos.push({ ...action.payload, id: Date.now(), completed: false });
    },
    toggleTodoToStore: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodoFromStore: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodoToStore, toggleTodoToStore, deleteTodoFromStore } = todosSlice.actions;
export default todosSlice.reducer;
