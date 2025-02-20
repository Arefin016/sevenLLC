/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { axiosSecure } from '@/hooks/useAxiosSecure';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // console.log( 'stateUser', currentUser)

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  // const [token, setToken] = useState(localStorage.getItem('token') || null);

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
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={stateValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
