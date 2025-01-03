import axios from 'axios';

export const hotelsLoader = async () => {
    try {
        const response = await axios.get('http://localhost:3001/hotels');
                return response.data; 
    } catch (error) {
        console.error('Error fetching hotels:', error.message); 
        throw new Error('Failed to load hotels: ' + error.message);
    }
};
