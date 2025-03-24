import React from "react";
import Sidebar from "./../pages/backend/sidebar/Sidebar";
import Navbar from "./../pages/backend/navbar/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-primary-light">
        <Sidebar />

        <div className="w-full">
          <Navbar />

          <div className="flex-1 p-4 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
