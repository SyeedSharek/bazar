import React from "react";

export default function Footer_Boottom() {
  return (
    <>
      <div className="w-[1360px] mt-[60px] flex  items-center justify-between text-sm text-[#6B7280] font-inter font-medium gap-2 md:gap-0">
        <div className="text-center md:text-left">
          <p>
            © 2024 Jinstore WooCommerce WordPress Theme. All rights reserved.
            Powered by <span className="text-[#634C9F]">BlackRise Themes.</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p className="underline cursor-pointer">Terms and Conditions</p>
          <p className="underline cursor-pointer">Privacy Policy</p>
          <p className="underline cursor-pointer">Order Tracking</p>
        </div>
      </div>
    </>
  );
}
