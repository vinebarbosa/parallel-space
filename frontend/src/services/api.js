import axios from 'axios';

const api = axios.create({
  baseURL: 'https://parallel-space-js.herokuapp.com',
});

export default api;
