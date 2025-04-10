import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://chatapp-backend-1-4l3a.onrender.com/api',
  withCredentials: true,
});