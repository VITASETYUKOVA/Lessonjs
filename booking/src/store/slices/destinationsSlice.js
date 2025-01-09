import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    fetchDestinationsPending: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchDestinationsFulfilled: (state, action) => {
      state.list = [...action.payload];
      state.loading = false;
    },

    fetchDestinationsRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDestinationsPending,
  fetchDestinationsFulfilled,
  fetchDestinationsRejected,
} = destinationsSlice.actions;

export default destinationsSlice.reducer;
