import axios from "axios";
import { fetchHotelsPending, fetchHotelsFulfilled, fetchHotelsRejected } from "../slices/hotelsSlice";

export const fetchHotelsThunk = () => async (dispatch) => {
  dispatch(fetchHotelsPending());

  try {
    const response = await axios.get("http://localhost:3001/hotels");
    dispatch(fetchHotelsFulfilled(response.data));
  } catch (error) {
    dispatch(fetchHotelsRejected(error.message));
    throw new Error(error.message); 
  }
};