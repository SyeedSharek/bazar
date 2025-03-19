import React from "react";
import { Routes, Route } from "react-router";
import App from "../App";
import Login from "../pages/backend/auth/Login";
import ForgetPassword from "../pages/backend/auth/ForgetPassword";
import Dashboard from "../pages/backend/auth/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Category from "../pages/backend/category/category";
import SubCategory from "../pages/backend/subCategory/SubCategory";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<App />} />

        <Route path="login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} />

        {/* dashboard related routes */}
        <Route path="/admin/*" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="category" element={<Category />} />
          <Route path="subCategory" element={<SubCategory />} />
        </Route>
      </Routes>
    </>
  );
};
