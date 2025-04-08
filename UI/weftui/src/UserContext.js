import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "react-oidc-context";

// Create context for user
const UserContext = createContext();

// Custom hook to access the user context
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component to wrap the app and provide the user data
export const UserProvider = ({ children }) => {
  const auth = useAuth();
  const [user, setUser] = useState(null);

  // Update user when auth state changes
  useEffect(() => {
    if (auth.isAuthenticated) {
      setUser(auth.user); // Set the user data if authenticated
    } else {
      setUser(null); // Clear user when not authenticated
    }
  }, [auth.isAuthenticated, auth.user]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
