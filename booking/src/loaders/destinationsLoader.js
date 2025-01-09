import store from "../store";
import { fetchDestinationsThunk } from "../store/thunks/fetchDestinationsThunk";

export const destinationsLoader = async () => {
  try {
    await store.dispatch(fetchDestinationsThunk());
    const state = store.getState();
    if (state.destinations.error) {
      throw new Error(state.destinations.error);
    }
    return state.destinations.list;
  } catch (error) {
    throw new Error(error.message);
  }
};
