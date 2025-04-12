import React, { useState } from "react";
import image from "../../../assets/Item 3.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Input from "./../../../components/Input";
import PrimaryButton from "./../../../components/ui/buttons/PrimaryButton";

export default function Add_To_Cart() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-between gap-5 mt-8">
        <div className="w-3/4">
          {/* loop will be start here */}
          <div className="mb-4 shadow rounded">
            <h4 className="p-2 border-b border-gray-300 text-sm">
              shop name / user name
            </h4>
            <div className="flex justify-between p-2">
              <div className="flex gap-3 items-center">
                <div>
                  <img src={image} alt="" className="size-24" />
                </div>
                <div>
                  <p className="text-sm mb-2">Pure organic bannena</p>
                  <p className="text-xs text-gray-600 mb-2">item brand name</p>
                  <p className="text-xs text-red-600 mb-2">
                    only (9) product in stock
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-4 text-primary font-medium text-xl font-poppins">
                  $ 100
                </p>
                <p>
                  <RiDeleteBin6Line size={23} className="text-gray-400" />
                </p>
              </div>
              <div className="me-10 flex gap-3 items-center">
                <p
                  className="p-2 bg-gray-200 cursor-pointer"
                  onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  <HiOutlineMinus size={15} />
                </p>

                <span>{count}</span>
                <p
                  className="p-2 bg-gray-200 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <BsPlusLg size={15} />
                </p>
              </div>
            </div>
          </div>
          {/* loop end here */}
        </div>
        <div className="w-1/4 p-4 shadow-lg">
          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-sm text-gray-400 font-medium">Location</h3>
            <div className="pt-2 inline-flex items-center gap-3">
              <IoLocationOutline size={20} />
              <p className="text-sm text-gray-700">Add shipping address</p>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-medium text-gray-800 font-roboto">
              Order summary
            </h3>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Subtotal (2 items)</p>
                <p className="text-sm text-gray-600">$ 100</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Shipping fee </p>
                <p className="text-sm text-gray-600">$ 100</p>
              </div>
            </div>
            <div className="mt-4">
              <Input
                type="text"
                name="voucher"
                placeholder="Voucher code"
                buttonText="Apply"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-primary font-semibold">Total</p>
                <p className="text-sm text-primary">$ 100</p>
              </div>
            </div>
            <PrimaryButton className="mt-4 w-full py-2 rounded">
              Checkout
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
