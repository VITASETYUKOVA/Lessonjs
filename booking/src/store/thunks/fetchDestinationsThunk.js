import axios from "axios";
import {
  setDestinations,
  setLoading,
  setError,
} from "../slices/destinationsSlice";

export const fetchDestinationsThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("http://localhost:3001/destination");
  

    const validDestinations = response.data.filter(
      (dest) => dest.id && dest.value && dest.label
    );

    if (validDestinations.length === 0) {
      console.log("Нет валидных данных для отображения");
    }

    dispatch(setDestinations(validDestinations));
  } catch (error) {
    console.error("Ошибка при запросе:", error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
