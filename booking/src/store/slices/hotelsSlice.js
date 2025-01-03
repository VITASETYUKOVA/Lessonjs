import { createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    list: [], 
  },
  reducers: {
    setHotels(state, action) {
      state.list = action.payload; 
    },
  },
});

export const { setHotels } = hotelsSlice.actions;
export default hotelsSlice.reducer;