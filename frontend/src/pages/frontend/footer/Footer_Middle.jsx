import React from "react";
import Facebook_Icon from "../../../components/ui/icons/Facebook_Icon";
import LinkedinIcon from "../../../components/ui/icons/Linkdin_Icon";
import Instagram_Icon from "../../../components/ui/icons/Instagram_Icon";
import Twitte_Icon from "../../../components/ui/icons/Twitte_Icon";
import Phone_Icon from "../../../components/ui/icons/Phone_Icon";
import Email_Icon from "../../../components/ui/icons/Email_Icon";

export default function Footer_Middle() {
  return (
    <>
      <div className="w-[1360px] grid grid-cols-5 gap-4 border-b border-[#E5E7EB] mt-[50px]">
        <div className="w-[280.5px] h-[252.30px] ">
          <p className="text-md font-bold tracking-tight leading-[16.8px] mb-2">
            Do You Need Help ?
          </p>
          <p className="mt-2 m w-[253.777px] text-sm text-gray-600 font-inter font-normal tracking-tight leading-[19.51px]">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>
          <div className="flex items-center mt-2">
            <div className="">
              <Phone_Icon />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-600 font-inter font-normal tracking-tight leading-[19.51px]">
                Monday-Friday: 08am-9pm
              </p>
              <p className="text-xl font-bold tracking-tight">01819400520</p>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <div className="">
              <Email_Icon />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-600 font-inter font-normal tracking-tight leading-[19.51px]">
              Need help with your order?
              </p>
              <p className="text-xl font-bold tracking-tight">info@example.com</p>
            </div>
          </div>
        </div>
        <div className="w-[252.5px] h-[252.3px]">
          <p className="text-md font-bold tracking-tight leading-[16.8px] mb-2">
            Make Money with Us
          </p>
          <div className="text-sm text-gray-600 font-inter font-normal tracking-tight leading-[19.51px]">
            <p className="mb-1">Sell on Grogin</p>
            <p className="mb-1">Sell Your Services on Grogin</p>
            <p className="mb-1">Sell on Grogin Business</p>
            <p className="mb-1">Sell Your Apps on Grogin</p>
            <p className="mb-1">Become an Affiliate</p>
            <p className="mb-1">Advertise Your Products</p>
            <p className="mb-1">Self-Publish with Us</p>
            <p className="mb-1">Become a Blowwe Vendor</p>
          </div>
        </div>

        <div className="w-[252.5px] h-[252.3px]">
          <p className="text-md font-bold tracking-tight leading-[16.8px] mb-2">
            Let Us Help You
          </p>
          <div className="text-sm text-gray-600 font-inter font-normal tracking-tight leading-[19.51px]">
            <p className="mb-1">Sell on Grogin</p>
            <p className="mb-1">Sell Your Services on Grogin</p>
            <p className="mb-1">Sell on Grogin Business</p>
            <p className="mb-1">Sell Your Apps on Grogin</p>
            <p className="mb-1">Become an Affiliate</p>
            <p className="mb-1">Advertise Your Products</p>
            <p className="mb-1">Self-Publish with Us</p>
            <p className="mb-1">Become a Blowwe Vendor</p>
          </div>
        </div>
        <div className="w-[252.5px] h-[252.3px]">
          <p className="text-md font-bold tracking-tight leading-[16.8px] mb-2">
            Get to Know Us
          </p>
          <div className="text-sm text-gray-600 font-inter font-normal tracking-tight leading-[19.51px]">
            <p className="mb-1">Sell on Grogin</p>
            <p className="mb-1">Sell Your Services on Grogin</p>
            <p className="mb-1">Sell on Grogin Business</p>
            <p className="mb-1">Sell Your Apps on Grogin</p>
            <p className="mb-1">Become an Affiliate</p>
            <p className="mb-1">Advertise Your Products</p>
            <p className="mb-1">Self-Publish with Us</p>
            <p className="mb-1">Become a Blowwe Vendor</p>
          </div>
        </div>
        <div className="w-[252.5px] h-[252.30px]">
          <p className="text-md font-bold tracking-tight leading-[16.8px] mb-2">
            Download our app
          </p>

          <div className="flex mt-3">
            <div className="w-[120px] h-[48.91px]">
              <img src="/images/792.png" alt="" />
            </div>
            <div className=" ml-4 text-[#6B7280] w-[184.71px] h-[30px] font-inter text-sm tracking-tight weight-[500px]">
              Download App Get -10% Discount
            </div>
          </div>

          <div className="flex mt-3">
            <div className="w-[120px] h-[48.91px]">
              <img src="/images/792.png" alt="" />
            </div>
            <div className=" ml-4 text-[#6B7280] w-[184.71px] h-[30px] font-inter text-sm tracking-tight weight-[500px]">
              Download App Get -10% Discount
            </div>
          </div>

          <div>
            <p className="font-inter text-sm tracking-tight weight-[500px]">
              Follow us on social media:
            </p>
            <div className="flex items-center space-x-3 mt-2">
              <Facebook_Icon />
              <LinkedinIcon />
              <Instagram_Icon />
              <Twitte_Icon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
