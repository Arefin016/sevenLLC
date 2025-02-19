import { useState, useEffect } from "react";
import axios from "axios";

// Create an instance of axios to handle secure requests
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecure = () => {
  const [authToken, setAuthToken] = useState(null);

  // Check for the JWT token from localStorage or other storage when the component is mounted
  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
    if (token) {
      setAuthToken(token); // If token exists, set it in the state
    }
  }, []);

  // Add the Authorization header with the token for secure requests
  useEffect(() => {
    if (authToken) {
      axiosSecure.defaults.headers["Authorization"] = `Bearer ${authToken}`; // Add token to Authorization header
    } else {
      delete axiosSecure.defaults.headers["Authorization"]; // Remove Authorization header if no token is available
    }
  }, [authToken]); // Runs whenever the token changes

  return axiosSecure; // Return the axios instance with the secure headers set
};

export default useAxiosSecure;
