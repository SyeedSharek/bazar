import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Down_Arrow_Icon from "../../../components/ui/icons/Down_Arrow_Icon";

export default function Top_Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownPriceRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        dropdownPriceRef.current &&
        !dropdownPriceRef.current.contains(event.target)
      ) {
        setIsOpenPrice(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="flex justify-between items-center w-[1380px] mx-auto px-4 py-2 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-[#634C9F] hover:underline">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/customer_profile">Account</Link>
          <Link to="/wishlist">Wishlist</Link>

          <div className="flex items-center border-l border-gray-300 pl-4">
            <p className="text-md">
              We deliver every day from
              <span className="font-semibold text-orange-600 ml-1">
                7:00 to 23:00
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center text-sm text-[#6B7280] focus:outline-none"
            >
              Language{" "}
              <span className="ml-2">
                <Down_Arrow_Icon />
              </span>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-25 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div
            className="relative inline-block text-left"
            ref={dropdownPriceRef}
          >
            <button
              onClick={() => setIsOpenPrice(!isOpenPrice)}
              className="flex items-center text-sm text-[#6B7280] focus:outline-none"
            >
              USD{" "}
              <span className="ml-2">
                <Down_Arrow_Icon />
              </span>
            </button>
            {isOpenPrice && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    USD
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    EUR
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    GBP
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <Link
              to="/frontend/order"
              className=" w-[81.35x] text-sm text-gray-700"
            >
              Order Tracking
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
