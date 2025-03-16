import React from 'react'
import Sidebar from './../pages/backend/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
    <div className='flex h-screen overflow-hidden'>
        <Sidebar />
      <Outlet />
    </div>
      
    </>
  )
}

export default DashboardLayout