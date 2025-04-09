import React from "react";
import Footer_Header from "./Footer_Header";
import Footer_Middle from "./Footer_Middle";
import Footer_Boottom from "./Footer_Boottom";

export default function Main_Footer() {
  return (
    <>
      <div className="bg-[#F3F4F6] w-full max-w-[1920px] h-[600.33px] mt-[95px] font-inter mx-auto border-t border-[#D1D5DB]">
        <div className="w-full flex flex-col items-center">
          <Footer_Header />
          <Footer_Middle />
          <Footer_Boottom />
        </div>
      </div>
    </>
  );
}
