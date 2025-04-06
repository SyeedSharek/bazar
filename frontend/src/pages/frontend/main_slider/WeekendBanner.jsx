import React from "react";
import { Link } from "react-router-dom";

export default function WeekendBanner() {
  return (
    <>
      <div className="flex justify-between w-[1359.99px] h-[220.41px] ">
        <div>
          <div className="relative w-[433.33px] h-[220.41px] rounded-[6px] overflow-hidden mt-8">
            <img
              src="/images/logo/banner1.png"
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[32.94px] left-[20px] w-[235.97px] h-[154.52px] bg-opacity-50 text-black text-sm px-3 py-1 rounded">
              <p className="h-[15px] font-medium text-sm text-[#EA580C] font-inter leading-[100%] tracking-tight">
                Only This Week
              </p>
              <p className="w-[195.56px] h-[26px] mt-5 font-inter text-2xl font-bold leading-[100%] tracking-tight">
                Quality eggs at an affordable price
              </p>
              <p className="h-[16px] mt-7 font-inter font-normal text-sm leading-[19.51px] tracking-tight text-[#6B7280]">
                Eat one every day
              </p>
              <Link
                to=""
                className="inline-block mt-4 w-[108.98px] h-[34px] border border-[#E5E7EB] bg-white rounded-full text-center leading-[34px]"
              >
                Shop Now  →
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-[433.33px] h-[220.41px] rounded-[6px] overflow-hidden mt-8">
            <img
              src="/images/logo/banner1.png"
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[32.94px] left-[20px] w-[235.97px] h-[154.52px] bg-opacity-50 text-black text-sm px-3 py-1 rounded">
              <p className="h-[15px] font-medium text-sm text-[#EA580C] font-inter leading-[100%] tracking-tight">
                Only This Week
              </p>
              <p className="w-[250px] h-[26px] mt-5 font-inter text-2xl font-bold leading-[100%] tracking-tight">
              Snacks that nourishes our mind and body
              </p>
              <p className="h-[16px] mt-7 font-inter font-normal text-sm leading-[19.51px] tracking-tight text-[#6B7280]">
                Eat one every day
              </p>
              <Link
                to=""
                className="inline-block mt-4 w-[108.98px] h-[34px] border border-[#E5E7EB] bg-white rounded-full text-center leading-[34px]"
              >
                Shop Now  →
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-[433.33px] h-[220.41px] rounded-[6px] overflow-hidden mt-8">
            <img
              src="/images/logo/banner1.png"
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[32.94px] left-[20px] w-[235.97px] h-[154.52px] bg-opacity-50 text-black text-sm px-3 py-1 rounded">
              <p className="h-[15px] font-medium text-sm text-[#EA580C] font-inter leading-[100%] tracking-tight">
                Only This Week
              </p>
              <p className="w-[250px] h-[26px] mt-5 font-inter text-2xl font-bold leading-[100%] tracking-tight">
              Unbeatable quality, unbeatable prices.
              </p>
              <p className="h-[16px] mt-7 font-inter font-normal text-sm leading-[19.51px] tracking-tight text-[#6B7280]">
                Eat one every day
              </p>
              <Link
                to=""
                className="inline-block mt-4 w-[108.98px] h-[34px] border border-[#E5E7EB] bg-white rounded-full text-center leading-[34px]"
              >
                Shop Now  →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
