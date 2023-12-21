// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Adjust the base URL according to your Django backend API
});

export default instance;
