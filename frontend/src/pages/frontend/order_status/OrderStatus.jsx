import React from "react";
import { Link } from "react-router-dom";

export default function OrderStatus() {
  return (
    <>
      <div className="flex w-[1380px] mt-8 border-b border-[#E5E7EB] border-mt-[20px] pb-4">
        <Link to="payment" className="flex">
          <div className="w-[57px] h-[57px] mt-[30px] mr-5">
            <img
              src="/images/logo/SVG.png"
              alt="Company Logo"
              className="w-20 h-auto"
            />
          </div>
          <div>
            <div className="w-[163.12px] h-[20px] text-md font-semibold line-height-[100%] tracking-tighter">
              <p>Payment</p>
            </div>
            <div>
              <p className="w-[250.22px] h-[34.22px] mt-[15px] text-sm font-weight-[400px] line-height-[18.21px] tracking-tighter text-[#6B7280]">
                Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
              </p>
            </div>
          </div>
        </Link>

        <Link to="" className="flex">
          <div className="w-[57px] h-[57px] mt-[30px] mr-5">
            <img
              src="/images/logo/SVG.png"
              alt="Company Logo"
              className="w-20 h-auto"
            />
          </div>
          <div>
            <div className="w-[163.12px] h-[20px] text-md font-semibold line-height-[100%] tracking-tighter">
              <p>New stocks and sales</p>
            </div>
            <div>
              <p className="w-[250.22px] h-[34.22px] mt-[15px] text-sm font-weight-[400px] line-height-[18.21px] tracking-tighter text-[#6B7280]">
                Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
              </p>
            </div>
          </div>
        </Link>
        <Link to="" className="flex">
          <div className="w-[57px] h-[57px] mt-[30px] mr-5">
            <img
              src="/images/logo/SVG.png"
              alt="Company Logo"
              className="w-20 h-auto"
            />
          </div>
          <div>
            <div className="w-[163.12px] h-[20px] text-md font-semibold line-height-[100%] tracking-tighter">
              <p>Quality assurance</p>
            </div>
            <div>
              <p className="w-[250.22px] h-[34.22px] mt-[15px] text-sm font-weight-[400px] line-height-[18.21px] tracking-tighter text-[#6B7280]">
                Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
              </p>
            </div>
          </div>
        </Link>
        <Link to="" className="flex">
          <div className="w-[57px] h-[57px] mt-[30px] mr-5">
            <img
              src="/images/logo/SVG.png"
              alt="Company Logo"
              className="w-20 h-auto"
            />
          </div>
          <div>
            <div className="w-[163.12px] h-[20px] text-md font-semibold line-height-[100%] tracking-tighter">
              <p>Delivery from 1 hour</p>
            </div>
            <div>
              <p className="w-[250.22px] h-[34.22px] mt-[15px] text-sm font-weight-[400px] line-height-[18.21px] tracking-tighter text-[#6B7280]">
                Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
