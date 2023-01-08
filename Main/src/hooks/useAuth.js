import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      if (user) {
        const l_r = await fetch(`${process.env.REACT_APP_API_URL}/api/is-user-logged-in`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const { result } = await l_r.json();
        if (!result) {
          setUser(null);
        } else {
          const t_r = await fetch(`${process.env.REACT_APP_API_URL}/api/get-user-type`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const { result: type } = await t_r.json();
          user.type = type;
        }
      }
    })();
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
