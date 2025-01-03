import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelCard from "../components/HotelCard";
import { setHotels } from "../store/slices/hotelsSlice";
import axios from "axios";

export default function Hotels() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.list);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:3001/hotels");
        dispatch(setHotels(response.data));
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, [dispatch]);

  return (
    <div className="hotels-page">
      <h2 className="hotels-title">Hotels</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {hotels.length > 0 ? (
          hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
        ) : (
          <p>No hotels found. Please try searching again.</p>
        )}
      </div>
    </div>
  );
}
