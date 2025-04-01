import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://chatapp-backend-628t.onrender.com/api',
  withCredentials: true,
});