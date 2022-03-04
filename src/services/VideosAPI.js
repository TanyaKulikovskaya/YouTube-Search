import axios from 'axios';
import API_KEYS from '../../config';

export default {
  async getVideosFromApi(maxResults, query) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&key=${API_KEYS.YOUTUBE_API_KEY}`;
    const response = await axios.get(apiUrl);
    return response.data;
  },
};
