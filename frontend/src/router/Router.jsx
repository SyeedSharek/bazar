import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";
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
import All_Product from "../pages/frontend/product/All_Product";
import Contact from "../pages/frontend/contact/Contact";
import Treanding_Product from "../pages/frontend/product/Treanding_Product";
import Finish_Product_Sell from "../pages/frontend/product/Finish_Product_Sell";
import Payment from "../pages/frontend/payment/Payment";
import NotFound from "../pages/NotFound";

import SingleProduct from "./../pages/frontend/product/SingleProduct";


export const Router = () => {
  const location = useLocation();
  if (location.pathname === "/admin/" || location.pathname === "/admin") {
    return <Navigate to={"/admin/dashboard"} />;
  }
  return (
    <>
      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route path="/*" element={<App />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<FrontDashboard />} />
          <Route path="about" element={<About />} />
          <Route path="customer_profile" element={<Customer_Profile />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="order" element={<Order_Tracking />} />
          <Route path="register" element={<Register />} />
          <Route path="blog" element={<Blog />} />
          <Route path="all_product" element={<All_Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="treanding_product" element={<Treanding_Product />} />
          <Route
            path="finish_product_sell_details"
            element={<Finish_Product_Sell />}
          />
          <Route path="payment" element={<Payment />} />


          <Route path="login" element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          

          <Route path="single_product" element={<SingleProduct />} />

        </Route>
        <Route path="login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} />

        {/* dashboard related routes */}
        <Route path="admin" element={<ProtectedRoute />}>
          <Route path="*" element={<NotFound />} />
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="subCategory" element={<SubCategory />} />
        </Route>

        {/* Frontend Router  */}
      </Routes>
    </>
  );
};
