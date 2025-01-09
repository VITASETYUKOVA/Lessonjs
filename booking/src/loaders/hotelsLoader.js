import store from "../store";
import { fetchHotelsThunk } from "../store/thunks/fetchHotelsThunk";

export const hotelsLoader = async () => {
  try {
    await store.dispatch(fetchHotelsThunk());
    const state = store.getState();
    if (state.hotels.error) {
      throw new Error(state.hotels.error);
    }

    return state.hotels.list;
  } catch (error) {
    throw new Error(error.message);
  }
};
