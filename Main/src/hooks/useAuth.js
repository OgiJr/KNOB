import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  React.useState(() => {
    if (user) {
      const decodedToken = jwt_decode(user.token);

      if (decodedToken.exp < Date.now() / 1000) {
        setUser(null);
      }
    }
  }, [user, setUser]);

  const value = useMemo(() => {
    // call this function when you want to authenticate the user
    const login = async (data) => {
      setUser(data);
      navigate("/", { replace: true });
    };

    // call this function to sign out logged in user
    const logout = () => {
      setUser(null);
      navigate("/", { replace: true });
    };

    return {
      user,
      login,
      logout,
    };
  }, [user, navigate, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
