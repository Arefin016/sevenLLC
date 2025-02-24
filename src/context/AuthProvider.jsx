/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { axiosSecure } from '@/hooks/useAxiosSecure';
import { useGetUserInfoQuery } from '@/hooks/cms.queries';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { data: currentUserData } = useGetUserInfoQuery();
  const [loading, setLoading] = useState(false);
  const [customLoading, setCustomLoading] = useState(false);

  //get user info::
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const userData = async () => {
        try {
          console.log(currentUserData);
          setUser(currentUserData?.data);
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
  }, [currentUserData, token]);

  const stateValue = {
    user,
    setUser,
    token,
    loading,
    setLoading,
    customLoading,
    setCustomLoading,
  };

  return (
    <AuthContext.Provider value={stateValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
