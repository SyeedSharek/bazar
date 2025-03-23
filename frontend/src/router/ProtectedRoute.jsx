import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
