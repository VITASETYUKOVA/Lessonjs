import React from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
const HotelCard = ({ hotel }) => {
  const defaultImage =
    "https://lh3.googleusercontent.com/proxy/Pmxfqz90hmxK8cTLAardbE7f_Ik82bgMvtf5K5foa3XiAPBmEJi0M5UX4ECU8gHB84UUIFNNXRh93L-WV_-U7KzxYX6kQzyft0Pa4_iFQE1-svD2qlm-QjhgB9uKj3sp_FzmuPon7cBKpSw8wh1JneL16D7sHFs=s1360-w1360-h1020"; // Общее изображение для всех
  const rating = hotel.hotel_rating || 0;
  return (
    <div className="hotel-card">
      <img src={defaultImage} alt="Hotel" className="hotel-image" />
      <h3>{hotel.name}</h3>
      <p>{hotel.address}</p>
      <div className="hotel-rating">
        <span className="rating-label">Rating:</span>
        <Rate disabled value={rating} />
      </div>
      {hotel.phone_number && <p>Phone: {hotel.phone_number}</p>}
      {hotel.website && (
        <a href={hotel.website} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      )}
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    hotel_rating: PropTypes.number,
    phone_number: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export default HotelCard;
