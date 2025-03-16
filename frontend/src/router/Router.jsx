import React from "react";
import { Routes, Route } from "react-router";
import App from "../App";
import Login from "../components/pages/backend/auth/Login";
import ForgetPassword from "../components/pages/backend/auth/ForgetPassword";
import Dashboard from "../components/pages/backend/auth/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<App />} />

        <Route path="login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} />

        <Route path="/admin/*" element={<ProtectedRoute />}>

          <Route path="dashboard" element={<Dashboard />} />
       </Route>      
      
      </Routes>
    </>
  );
};
