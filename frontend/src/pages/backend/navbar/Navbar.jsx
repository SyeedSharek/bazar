import React from 'react';
import LightIcon from '../../../components/ui/icons/LightIcon';


export default function Navbar() {
  return (
    <div className='bg-[#003566] w-full h-[80px] mt-0 text-white flex justify-between items-center px-6'>
      <div className="text-lg font-bold">Admin Dashboard</div>
      <div className='flex gap-6 items-center'>
        <div>Country</div>
        <div><LightIcon /></div>
        <div>Notification</div>
        <div>Profile</div>
      </div>
    </div>
  );
}
