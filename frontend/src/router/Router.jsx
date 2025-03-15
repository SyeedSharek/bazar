import React from "react";
import { Routes, Route } from "react-router";
import App from "../App";
import Login from "../components/pages/backend/auth/Login";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<App />} />

        {/* for protected routes example 
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        
        for nested routes example
        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}

        <Route path="/admin/*">
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
