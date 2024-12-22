import { configureStore } from '@reduxjs/toolkit';
import useSlice from './slices/useSlice';

const store = configureStore({
  reducer: {
    auth: useSlice,
  },
});

export default store;
