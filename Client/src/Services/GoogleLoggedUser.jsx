import axios from 'axios';

const API_URL = 'http://localhost:500/login/sucess';

export const getGoogleUser = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch Google user data');
  }
};