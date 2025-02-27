/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useGetUserInfoQuery } from "@/hooks/cms.queries";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken, clearToken] = useLocalStorage("token", null);
  const [userInfo, setUserInfo, clearUserInfo] = useLocalStorage("user", null);
  const [loading, setLoading] = useState(false);
  const [customLoading, setCustomLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: userAllData } = useGetUserInfoQuery(token);
  const [refetch, setRefetch] = useState(false); // Add refetch state


  //get user info::
  useEffect(() => {
    if (!token) {
      setLoading(false);
      return; // Stop execution if token doesn't exist
    }

    const userData = async () => {
      try {
        setUser(userAllData?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    userData();
  }, [token, userAllData?.data]);

  // Effect to listen for refetch trigger
  useEffect(() => {
    if (refetch) {
      console.log("Refetch triggered!");

      setRefetch(false);
    }
  }, [refetch]); // Runs whenever `refetch` state changes

  // Function to trigger refetch
  const triggerRefetch = () => {
    setRefetch(true); // Set refetch to true to trigger the useEffect above
  };

  const stateValue = {
    user,
    setUser,
    token,
    setToken,
    clearToken,
    loading,
    setLoading,
    customLoading,
    setCustomLoading,
    userInfo,
    setUserInfo,
    clearUserInfo,
    refetch, 
    triggerRefetch, 
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={stateValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
