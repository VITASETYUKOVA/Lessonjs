import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./slices/hotelsSlice";
import destinationsReducer from "./slices/destinationsSlice";

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    destinations: destinationsReducer, 
  },
});

export default store;