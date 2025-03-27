import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../components/ui/Loading";

const ProtectedRoute = () => {
  const [auth, setAuth] = useState({ isLoading: true, isAuthenticated: false });
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuth({ isLoading: false, isAuthenticated: false });
        return;
      }
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API}/auth/profile`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200 && response.data.status === true) {
          setAuth({ isLoading: false, isAuthenticated: true });
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Authentication failed!");
        setAuth({ isLoading: false, isAuthenticated: false });
      }
    };

    validateToken();
  }, []);
  if (auth.isLoading)
    return (
      <>
        <div className="min-h-screen flex justify-center items-center">
          <Loading />
        </div>
      </>
    );

  return auth.isAuthenticated ? (
    <DashboardLayout />
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};

export default ProtectedRoute;
