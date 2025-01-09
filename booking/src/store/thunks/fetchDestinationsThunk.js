import axios from "axios";
import {
  fetchDestinationsPending,
  fetchDestinationsFulfilled,
  fetchDestinationsRejected,
} from "../slices/destinationsSlice";

export const fetchDestinationsThunk = () => async (dispatch) => {
  dispatch(fetchDestinationsPending());

  try {
    const response = await axios.get("http://localhost:3001/destination");
    const validDestinations = response.data.filter(
      (dest) => dest.id && dest.value && dest.label
    );

    if (!validDestinations.length) {
      console.log("Нема валідних данных для відображення");
    }

    dispatch(fetchDestinationsFulfilled(validDestinations));
  } catch (error) {
    dispatch(fetchDestinationsRejected(error.message));
  }
};
