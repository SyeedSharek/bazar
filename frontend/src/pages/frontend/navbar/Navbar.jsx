import React from "react";
import Top_Navbar from "./Top_Navbar";
import Location_Icon from "../../../components/ui/icons/Location_Icon";
import UserIcon from "../../../components/ui/icons/UserIcon";
import { Link } from "react-router-dom";
import Love_Icon from "../../../components/ui/icons/Love_Icon";
import Cart_Icon from "../../../components/ui/icons/Cart_Icon";

export default function Navbar() {
  return (
    <>
      <Top_Navbar />

      <div className="flex w-[1380px] items-center mt-4 h-[78px] px-8 max-w-8xl mx-auto border-b border-[#E5E7EB]">
        {/* Logo & Location */}
        <div className="flex items-center w-[300px] gap-6">
          <div className="flex items-center gap-2">
            <div>Logo</div>
            <div>Name</div>
          </div>

          <Location_Icon className="w-6 h-6" />
          <div>
            <p className="text-sm opacity-70 tracking-tight">Deliver to</p>
            <p className="text-md font-medium tracking-tight">All</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex items-center">
          <div className="w-full max-w-[950px] h-[46px] bg-gray-200 rounded-2xl flex items-center px-4">
            <input
              className="w-full bg-transparent outline-none text-sm"
              type="text"
              placeholder="Search For Product, Categories Or Brands..."
            />
          </div>
        </div>

        {/* Icons & Account Links */}
        <div className="flex items-center gap-6 ml-8">
          <UserIcon className="w-5 h-5" />
          <div>
            <Link to="/register" className="text-sm opacity-70">
              Sign In
            </Link>
            <br />
            <Link to="/customer_profile" className="text-md font-medium">
              Account
            </Link>
          </div>
          <Love_Icon className="w-6 h-6 text-black" />
          <Cart_Icon className="w-6 h-6 text-black" />
        </div>
      </div>
    </>
  );
}
