import React from "react";
import { NavLink } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import logo from "../../../assets/logo.svg";

export default function Sidebar() {
  const data = [
    {
      url: "/admin/dashboard",
      name: "Dashboard",
      icon: <RiDashboardHorizontalLine size={18} />,
    },
    {
      url: "/admin/category",
      name: "Category",
      icon: <BiCategoryAlt size={18} />,
    },
    {
      url: "/admin/subCategory",
      name: "Sub Category",
      icon: <BiCategoryAlt size={18} />,
    },
  ];

  return (
    <div className="w-[350px] text-black font-semibold p-6">
      {/* Logo Section */}
      <div className="flex items-center gap-4 mb-6">
        <img src={logo} alt="logo" className="size-14 rounded-full" />
        <h2 className="text-3xl font-outfit font-bold text-gray-800">
          Jinstore
        </h2>
      </div>

      {/* Sidebar Links */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <NavLink
            key={index}
            to={item.url}
            className={({ isActive }) =>
              `flex gap-5 items-center px-2 py-2 rounded-full transition ${
                isActive ? "bg-primary text-white font-bold" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`rounded-full p-1.5 text-black ${
                    isActive ? "bg-white " : ""
                  }`}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-normal font-poppins">
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
