import React from "react";

export default function NewArrivalProduct() {
  return (
    <>
      <div className="mt-9 w-[1360px]">
        <div className="flex items-center">
          <p className="mr-3  font-inter  font-bold weight-[700px] text-[18px] tracking-tight text-[#030712]">
            New Arrivals
          </p>
          <p className="font-inter font-medium weight-[400px] text-[12px] tracking-tight text-[#6B7280]">
            Dont miss this opportunity at a special discount just for this week
          </p>
        </div>
        <div className="mt-3">
          <div className="w-[227px] h-[379.38px] bg-white shadow rounded-lg p-2 relative">
            <div className="w-[37.58px] h-[24px] bg-[#DC2626] rounded-[40%] flex items-center justify-center absolute top-2 left-2">
              <p className="text-[12px] font-inter font-extrabold text-[#FEF2F2] tracking-tight">
                41%
              </p>
            </div>
            <div className="w-[177px] h-[177px] ">
              <img src="/images/570.png" alt="" />
            </div>
            <div className="">
              <p className="text-xs font-medium text-black">ORGANIC</p>
              <p className="w-[200.96px] h-[35.18px] font-inter weight-[500px] text-[14px]">Great Value Rising Crust Frozen Pizza, Supreme</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
