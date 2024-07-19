import axios from 'axios';

export const getAdminCodes = async () => {
  try {
    const response = await axios.get('http://localhost:500/api/admin/codes');
    console.log(response.data)
    // console.log(response.data[0].imagePath)
    return response.data;
  } catch (error) {
    console.error('Error fetching codes:', error);
    throw error;
  }
};

// You can add more API methods here

