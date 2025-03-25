import React from "react";
import { Routes, Route } from "react-router";
import App from "../App";
import Login from "../pages/backend/auth/Login";
import ForgetPassword from "../pages/backend/auth/ForgetPassword";
import Dashboard from "../pages/backend/auth/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Category from "../pages/backend/category/category";
import SubCategory from "../pages/backend/subCategory/SubCategory";
import FrontDashboard from "../pages/frontend/dashboard/FrontDashboard";
import About from "../pages/frontend/about/about";
import Customer_Profile from "../pages/frontend/customer_profile/Customer_Profile";
import WishList from "../pages/frontend/wishlist/WishList";
import Order_Tracking from "../pages/frontend/order_tracking/Order_Tracking";
import Register from "../pages/frontend/auth/Register";
import Blog from "../pages/frontend/blog/Blog";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<App />} />

        <Route path="login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} />

        {/* dashboard related routes */}
        <Route path="admin" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="category" element={<Category />} />
          <Route path="subCategory" element={<SubCategory />} />
        </Route>

        {/* Frontend Router  */}

        <Route path="/*">
        <Route path="dashboard" element={<FrontDashboard />} />
        <Route path="about" element={<About />} />
        <Route path="customer_profile" element={<Customer_Profile />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="order" element={<Order_Tracking />} />
        <Route path="register" element={<Register />} />
        <Route path="blog" element ={<Blog />} />

        </Route>
      </Routes>
    </>
  );
};
