import React from "react";
import LightIcon from "../../../components/ui/icons/LightIcon";
import Notification from "../../../components/ui/icons/Notification";
import Profile from "../../../components/ui/icons/Profile";
import Input from "../../../components/Input";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className=" w-full h-[80px] mt-0 flex gap-16 text-gray-800 justify-between items-center px-6">
      <div className="text-2xl font-bold font-outfit">Overview</div>
      <div className="w-full">
        <Input type="text" name="search" placeholder="Search" />
      </div>
      <div className="flex gap-6 items-center">
        <IoMdNotificationsOutline size={22} />
        <BsCart2 />
        <Profile />
        <button className="flex gap-4 items-center text-sm bg-primary rounded-lg text-nowrap px-4 py-2 text-white">
          <MdOutlineAddCircleOutline size={18} /> Add Product
        </button>
      </div>
    </div>
  );
}
