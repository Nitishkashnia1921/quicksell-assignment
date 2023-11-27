import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
    console.log("res",response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchData;
