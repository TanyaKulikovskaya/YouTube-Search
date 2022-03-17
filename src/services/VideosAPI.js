import axios from 'axios';
import API_KEYS from '../../config';

const API = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  async getVideosFromApi(maxResults, query) {
    const response = await API.get(`search?part=snippet&maxResults=${maxResults}&q=${query}&key=${API_KEYS.YOUTUBE_API_KEY}`);
    return response.data;
  },
};
