import React from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
const HotelCard = ({ hotel }) => {
  const defaultImage =
    "https://lh3.googleusercontent.com/p/AF1QipNTmoS5SvjN6nzJC8Eb-JO60z7xk9npwTm5U2pk=s1360-w1360-h1020";
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
