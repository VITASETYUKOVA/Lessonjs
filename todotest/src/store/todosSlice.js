import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './todosThunk';

const initialState = {
  todos: [],
  loading: false,
  error: null,
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
    reset: () => initialState, // Добавляем экшен для сброса состояния
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addTodoToStore, toggleTodoToStore, deleteTodoFromStore, reset } = todosSlice.actions;
export { fetchTodos };
export default todosSlice.reducer;
