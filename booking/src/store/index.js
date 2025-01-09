import { configureStore } from "@reduxjs/toolkit";
import destinationsSlice from "./slices/destinationsSlice";
import hotelsSlice from "./slices/hotelsSlice";

const store = configureStore({
  reducer: {
    destinations: destinationsSlice,
    hotels: hotelsSlice,
  },
});

export default store;