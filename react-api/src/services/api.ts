import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 10000,
});

export default axiosInstance;
