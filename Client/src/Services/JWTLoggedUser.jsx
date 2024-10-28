import axios from 'axios';

const API_URL = 'https://s47-hanshul-capstone-legoui.onrender.com/api/users/loggedUser';

export const getJWTUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
