import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children, type = "Guest" }) => {
  const { user } = useAuth();
  const [is_logged_in, setIsLoggedIn] = React.useState(false);
  const [userType, setType] = React.useState("Guest");

  React.useEffect(() => {
    if (user) {
      (async () => {
        const l_r = await fetch(`${process.env.REACT_APP_API_URL}/api/is-user-logged-in`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const { result: is_logged_in } = await l_r.json();

        setIsLoggedIn(is_logged_in);

        const t_r = await fetch(`${process.env.REACT_APP_API_URL}/api/get-user-type`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const { result: type } = await t_r.json();
        setType(type);
      })();
    }
  });

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!is_logged_in) {
    return <Navigate to="/login" />;
  }
  if (type === "Admin" && userType !== "Admin") {
    return <Navigate to="/login" />;
  }
  if (type === "Curator" && userType !== "Admin" && userType !== "Curator") {
    return <Navigate to="/login" />;
  }

  return children;
};
