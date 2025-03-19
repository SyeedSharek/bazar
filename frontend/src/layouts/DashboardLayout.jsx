import React from 'react'
import Sidebar from './../pages/backend/sidebar/Sidebar';
import Navbar from './../pages/backend/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
     <div className="flex flex-col h-screen">
      
      <Navbar />

      <div className="flex flex-1">
     
        <Sidebar />        
        <div className="flex-1 p-4 overflow-auto bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
      
    </>
  )
}

export default DashboardLayout