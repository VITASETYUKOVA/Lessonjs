import React, { useEffect, useState } from "react";
import axios from "axios";

const DestinationSelect = ({ value, onChange }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get("http://localhost:3001/destination");
        setDestinations(response.data.destination); 
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <select value={value} onChange={onChange}>
      <option value="" disabled>Select destination</option>
      {destinations.length > 0 ? (
        destinations.map((destination) => (
          <option key={destination.id} value={destination.name}>
            {destination.name}
          </option>
        ))
      ) : (
        <option disabled>Loading destinations...</option>
      )}
    </select>
  );
};

export default DestinationSelect;