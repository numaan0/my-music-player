import axios from 'axios';

const baseURL = 'https://www.googleapis.com/youtube/v3';
const params = {
  part: 'snippet',
  maxResults: 5,
  key: '',
};

export const searchVideos = async (term) => {
  const response = await axios.get(`${baseURL}/search`, {
    params: {
      ...params,
      q: term,
      type: 'video,playlist'
    }
  });

  return response.data.items;
};

export const getVideoDetails = async (id) => {
  const response = await axios.get(`${baseURL}/videos`, {
    params: {
      ...params,
      id: id
    }
  });

  return response.data.items;
};

// Add more functions for different API endpoints
