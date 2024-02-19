/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LocalStorage } from './LocalStorage';

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://api.rawg.io/api/',
});

axiosInstance.interceptors.request.use((config) => {
  const user = LocalStorage.getItem('user');

  if (user) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});
