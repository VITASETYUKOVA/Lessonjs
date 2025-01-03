import { createSlice } from "@reduxjs/toolkit";

const destinationsSlice = createSlice({
  name: "destinations",
  initialState: {
    list: [], 
    loading: false, 
    error: null, 
  },
  reducers: {
    setDestinations(state, action) {
      state.list = action.payload; 
    },
    setLoading(state, action) {
      state.loading = action.payload; 
    },
    setError(state, action) {
      state.error = action.payload; 
    },
  },
});

export const { setDestinations, setLoading, setError } = destinationsSlice.actions;
export default destinationsSlice.reducer;