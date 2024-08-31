import axios from 'axios';

const API_URL = 'http://localhost:500/login/success'; 

export const getGoogleUser = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true });

    console.log('Full Google User Response:', response);
    console.log('Google User Data:', response.data);

    if (response.data && response.data.email) {
      return response.data;
    } else {
      throw new Error('Invalid Google user data');
    }
  } catch (error) {
    console.error('Error fetching Google user data:', error);
    throw new Error('Failed to fetch Google user data');
  }
};
