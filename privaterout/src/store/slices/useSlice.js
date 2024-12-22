import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, 
};

const useSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = useSlice.actions;
export default useSlice.reducer;
