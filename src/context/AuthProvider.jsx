// import { createContext, useState, useEffect } from "react";
// import useAxiosSecure from "@/hooks/useAxiosSecure";

import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   // console.log( 'stateUser', currentUser)

//   const axiosSecure = useAxiosSecure();
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   const login = (userData, receivedToken) => {
//     setUser(userData);
//     setToken(receivedToken);
//     localStorage.setItem("token", receivedToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!token) return;
//       try {
//         const response = await axiosSecure.get("/api/users/data", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(response.data.data);
//         localStorage.setItem("user", JSON.stringify(response.data.data));
//       } catch (error) {
//         console.error("Error fetching user info:", error);
//         logout();
//       }
//     };

//     fetchUser();
//   }, [token, axiosSecure]);

//   const stateValue = {
//     user,
//     token,
//     login,
//     logout,
//     currentUser,
//     setCurrentUser,
//   };

//   return (
//     <AuthContext.Provider value={stateValue}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

const AuthProvider = ({ children }) => {
  // Initialize user state from localStorage
  const [user, setUserState] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Function to update both state and localStorage
  const setUser = (newUser) => {
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
    setUserState(newUser);
  };

  // Get updated user data
  const getUserData = async () => {
    if (!user?.token) {
      return null; // Return null if no token is present
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/data`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const userData = response.data.userdata;
      setUser({
        ...user,
        ...userData,
      });
      return userData; // Explicitly return the fetched user data
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
      return null; // Return null on error
    }
  };

  // const {
  //   data: fetchedUser,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["userData", user?.id],
  //   queryFn: getUserData,
  //   enabled: !!user?.token,
  //   onError: (err) => {
  //     console.error("Query Error:", err);
  //   },
  // });

  // // Sync localStorage with user state
  // useEffect(() => {
  //   const syncUserWithLocalStorage = () => {
  //     const storedUser = localStorage.getItem("user");
  //     setUserState(storedUser ? JSON.parse(storedUser) : null);
  //   };
  //   window.addEventListener("storage", syncUserWithLocalStorage);
  //   return () => {
  //     window.removeEventListener("storage", syncUserWithLocalStorage);
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
