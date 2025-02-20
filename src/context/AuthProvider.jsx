/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { axiosSecure } from '@/hooks/useAxiosSecure';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  //get user info::
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const userData = async () => {
        const { data } = await axiosSecure('/api/users/data');
        setUser(data?.data);
        return data;
      };

      userData();
    }
  }, [token]);
  const stateValue = {
    user,
    setUser,
    token,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={stateValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
