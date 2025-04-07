import React from "react";
import { Link } from "react-router-dom";
import Start_Icon from "../../../components/ui/icons/Start_Icon";

export default function Popular_Companies() {
  return (
    <>
      <div className="mt-[60px] w-[1360px] overflow-hidden">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <p className="mr-3  font-inter  font-bold weight-[700px] text-[18px] tracking-tight text-[#030712]">
              Popular Companies
            </p>
            <p className="font-inter font-medium weight-[400px] text-[12px] tracking-tight text-[#6B7280]">
              Some of the new products arriving this week
            </p>
          </div>

          <Link
            to=""
            className="w-[97.53px] h-[34px] rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            View All →
          </Link>
        </div>

        <div className="flex overflow-hidden mt-9">
          <div className="w-[450px] h-[188px] border border-[#E5E7EB] ">
            <div className="flex p-4 border-b border-[#E5E7EB] ">
              <div className="w-[72px] h-[72px]  image-cover">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src="/images/470.png"
                  alt=""
                />
              </div>
              <div className="ml-8 mt-1">
                <p className="text-[18px] font-inter font-bold leading-[100%] tracking-tight mb-2">
                  Machic
                </p>
                <p className="text-[12px] font-inter font-medium text-[#6B7280] leading-[100%] tracking-tight">
                  Featured
                </p>
                <Start_Icon />
              </div>
            </div>
            <div>
              <p className="text-md weight-[500px] font-inter text-[#6B7280] p-4">
                Good quality product can only be found in good stores
              </p>
            </div>
          </div>

          <div className="w-[450px] h-[188px] border border-[#E5E7EB] ">
            <div className="flex p-4 border-b border-[#E5E7EB] ">
              <div className="w-[72px] h-[72px]  image-cover">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src="/images/470.png"
                  alt=""
                />
              </div>
              <div className="ml-8 mt-1">
                <p className="text-[18px] font-inter font-bold leading-[100%] tracking-tight mb-2">
                  Machic
                </p>
                <p className="text-[12px] font-inter font-medium text-[#6B7280] leading-[100%] tracking-tight">
                  Featured
                </p>
                <Start_Icon />
              </div>
            </div>
            <div>
              <p className="text-md weight-[500px] font-inter text-[#6B7280] p-4">
                Good quality product can only be found in good stores
              </p>
            </div>
          </div>
          <div className="w-[450px] h-[188px] border border-[#E5E7EB] ">
            <div className="flex p-4 border-b border-[#E5E7EB] ">
              <div className="w-[72px] h-[72px]  image-cover">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src="/images/470.png"
                  alt=""
                />
              </div>
              <div className="ml-8 mt-1">
                <p className="text-[18px] font-inter font-bold leading-[100%] tracking-tight mb-2">
                  Machic
                </p>
                <p className="text-[12px] font-inter font-medium text-[#6B7280] leading-[100%] tracking-tight">
                  Featured
                </p>
                <Start_Icon />
              </div>
            </div>
            <div>
              <p className="text-md weight-[500px] font-inter text-[#6B7280] p-4">
                Good quality product can only be found in good stores
              </p>
            </div>
          </div>
          <div className="w-[450px] h-[188px] border border-[#E5E7EB] ">
            <div className="flex p-4 border-b border-[#E5E7EB] ">
              <div className="w-[72px] h-[72px]  image-cover">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src="/images/470.png"
                  alt=""
                />
              </div>
              <div className="ml-8 mt-1">
                <p className="text-[18px] font-inter font-bold leading-[100%] tracking-tight mb-2">
                  Machic
                </p>
                <p className="text-[12px] font-inter font-medium text-[#6B7280] leading-[100%] tracking-tight">
                  Featured
                </p>
                <Start_Icon />
              </div>
            </div>
            <div>
              <p className="text-md weight-[500px] font-inter text-[#6B7280] p-4">
                Good quality product can only be found in good stores
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
