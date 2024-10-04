import axios from "axios";

// Create an instance of axios with base configuration
const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://web-innovators-backend.vercel.app",
  withCredentials: true,
});

export default axiosInstance;
