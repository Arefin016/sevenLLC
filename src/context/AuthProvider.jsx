/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { axiosSecure } from '@/hooks/useAxiosSecure';
import useLocalStorage from '@/hooks/useLocalStorage';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken, clearToken] = useLocalStorage('token', null);
  const [userInfo, setUserInfo, clearUserInfo] = useLocalStorage('user', null);
  const [loading, setLoading] = useState(false);
  const [customLoading, setCustomLoading] = useState(false);

  //get user info::
  useEffect(() => {
    if (token) {
      const userData = async () => {
        try {
          const { data } = await axiosSecure('/api/users/data');
          setUser(data?.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      };
      userData();
    } else {
      setLoading(false);
    }
  }, [token]);

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
  };

  return (
    <AuthContext.Provider value={stateValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
