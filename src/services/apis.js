import { accordion } from '@material-tailwind/react';
import axios from 'axios';

// const baseURL = 'https://www.googleapis.com/youtube/v3';
const serverURL = 'https://backend-music-app-v1.onrender.com'
// const serverURL = 'https://music-player-backend-production.up.railway.app'
// try{
//   serverURL = 'https://music-player-backend-production.up.railway.app'
// }catch{
//    serverURL = 'https://backend-music-app-v1.onrender.com'
// }
// const serverURL = 'http://localhost:3000'
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

export const searchSongs = async (term, limit) =>{
  const response = await axios.get(`${serverURL}/api/songs?keywords=${term}&limit=${limit}`);
  console.log(response.data);
  return response.data


};
export const suggestions = async (video_id) =>{
  const response = await axios.get(`${serverURL}/api/suggestions?video_id=${video_id}`);
  console.log(response.data);
  return response.data


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
