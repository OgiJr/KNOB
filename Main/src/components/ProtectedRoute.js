import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import jwt_decode from "jwt-decode";

export const ProtectedRoute = ({ children, type = "Guest" }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwt_decode(user.token);

  if (decodedToken.exp < Date.now() / 1000) {
    return <Navigate to="/login" />;
  }

  if (type === "Curator" && decodedToken.type !== "Admin" && decodedToken.type !== "Curator") {
    return <Navigate to="/login" />;
  }

  if (type === "Admin" && decodedToken.type !== "Admin") {
    return <Navigate to="/login" />;
  }

  return children;
};
