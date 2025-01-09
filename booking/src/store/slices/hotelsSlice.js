import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    fetchHotelsPending(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHotelsFulfilled(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchHotelsRejected(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchHotelsPending,
  fetchHotelsFulfilled,
  fetchHotelsRejected,
} = hotelsSlice.actions;

export default hotelsSlice.reducer;