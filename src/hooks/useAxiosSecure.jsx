import { useState, useEffect } from "react";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecure = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  useEffect(() => {
    if (authToken) {
      axiosSecure.defaults.headers["Authorization"] = `Bearer ${authToken}`;
    } else {
      delete axiosSecure.defaults.headers["Authorization"];
    }
  }, [authToken]);

  return axiosSecure;
};

export default useAxiosSecure;
