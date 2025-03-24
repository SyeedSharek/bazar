import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#634C9F] w-full h-[41px] px-6 font-inter">
      <div className="flex justify-center items-center w-full">
        <p className="text-white text-xs font-semibold tracking-tight">
          FREE Delivery & 40% Discount for Next 3 Orders! Place your first order
          in.
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-[21px]">
        <div className="flex justify-center items-center text-white text-xs font-semibold tracking-tight gap-4">
          <div>
            <p className="opacity-70 pr-1">Until the end of the sale:</p>
          </div>

          <div className="flex items-end gap-1">
            <p className="font-semibold tracking-tight text-[18px]">47</p>
            <p className="pl-1 opacity-70 font-normal text-[11px] tracking-tight">
              days
            </p>
          </div>

          <div className="flex items-end gap-1">
            <p className="font-semibold tracking-tight text-[18px]">6</p>
            <p className="opacity-70 font-normal text-[11px] tracking-tight">
              hours
            </p>
          </div>

          <div className="flex items-end gap-1">
            <p className="font-semibold tracking-tight text-[18px]">55</p>
            <p className="opacity-70 font-normal text-[11px] tracking-tight">
              minutes
            </p>
          </div>

          <div className="flex items-end gap-1">
            <p className="font-semibold tracking-tight text-[18px]">51</p>
            <p className="opacity-70 font-normal text-[11px] tracking-tight">
              seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
