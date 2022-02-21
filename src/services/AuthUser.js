import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  async login(credentials) {
    const response = await HTTP.post('/login', {
      email: credentials.email,
      password: credentials.password,
    });
    if (response.data.accessToken) {
      const token = response.data.accessToken;
      localStorage.setItem('token', token);
    }
    return response.data;
  },
  logout() {
    localStorage.removeItem('token');
  },
};
