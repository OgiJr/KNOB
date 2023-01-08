import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children, type = "Guest" }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  if (type === "Admin" && user.type !== "Admin") {
    return <Navigate to="/login" />;
  }
  if (type === "Curator" && user.type !== "Admin" && user.type !== "Curator") {
    return <Navigate to="/login" />;
  }

  return children;
};
