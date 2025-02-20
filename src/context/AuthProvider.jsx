/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import useAxiosSecure from '@/hooks/useAxiosSecure';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // console.log( 'stateUser', currentUser)

  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = (userData, receivedToken) => {
    setUser(userData);
    setToken(receivedToken);
    localStorage.setItem('token', receivedToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;
      try {
        const response = await axiosSecure.get('/api/users/data', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.data);
        localStorage.setItem('user', JSON.stringify(response.data.data));
      } catch (error) {
        console.error('Error fetching user info:', error);
        logout();
      }
    };

    fetchUser();
  }, [token, axiosSecure]);

  const stateValue = {
    user,
    token,
    login,
    logout,
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
