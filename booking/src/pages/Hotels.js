import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelCard from "../components/HotelCard";

const Hotels = () => {
  const hotels = useLoaderData();

  return (
    <div className="hotels-page">
      <h2>Hotels</h2>
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
};

export default Hotels;
