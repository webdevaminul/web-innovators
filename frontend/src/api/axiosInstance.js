import axios from "axios";

// Create an instance of axios with base configuration
const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000" // Development URL
      : "https://web-innovators-backend.vercel.app", // Production URL
  withCredentials: true, // Ensure credentials (cookies) are included
});

export default axiosInstance;
