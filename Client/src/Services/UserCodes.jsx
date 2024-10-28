import axios from 'axios';

export const getUserCodes = async () => {
  try {
    const response = await axios.get('https://s47-hanshul-capstone-legoui.onrender.com/api/user/codes');
    return response.data;
  } catch (error) {
    console.error('Error fetching codes:', error);
    throw error;
  }
};


