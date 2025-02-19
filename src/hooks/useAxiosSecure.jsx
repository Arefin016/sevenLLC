import { useEffect } from "react";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecure = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosSecure.defaults.headers["Authorization"] = `Bearer ${token}`;
    } else {
      delete axiosSecure.defaults.headers["Authorization"];
    }
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
