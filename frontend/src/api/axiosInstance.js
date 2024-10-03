import axios from "axios";

// Create an instance of axios with base configuration
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_baseUrl}`,
  withCredentials: true,
});

export default axiosInstance;
