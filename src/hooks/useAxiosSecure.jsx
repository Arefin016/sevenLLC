import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosSecure.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");

    if (token) {
      try {
        token = JSON.parse(token); // ✅ Parse the token correctly
      } catch (error) {
        console.error("Error parsing token:", error);
      }
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
