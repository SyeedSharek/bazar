import React from "react";
import Email_Icon from "../../../components/ui/icons/Email_Icon";

export default function () {
  return (
    <>
      <div className="flex  justify-between w-[1360px] h-[120.299px] mt-[70px]">
        <div className="w-[375px]">
          <p className="text-2xl weight-[700px] font-bold line-height-[100%] tracking-wide">
            Join our newsletter for £10 offs
          </p>
          <p className="mt-1 text-sm text-[#6B7280] weight-[400px] font-normal line-height-[19.51px] tracking-wide">
            Register now to get latest updates on promotions & coupons.Don’t
            worry, we not spam!
          </p>
        </div>
        <div className="w-[450px]">
          <form className="flex relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Email_Icon />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="w-[366px] h-[52px] pl-10 pr-4 bg-white rounded-l-md border border-[#D1D5DB] text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-[73.11px] h-[52px] bg-[#634C9F] rounded-r-md text-white text-sm hover:bg-[#543c90] transition-colors duration-200"
            >
              SEND
            </button>
          </form>

          <div className="mt-2">
            <p className="text-[11px] font-normal font-inter leading-[16.5px] tracking-wide">
              By subscribing you agree to our{" "}
              <span className="text-[#634C9F]">
                Terms & Conditions and Privacy & Cookies Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
