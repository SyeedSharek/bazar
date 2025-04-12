import React, { useState } from "react";
import PrimaryButton from "../../../components/ui/buttons/PrimaryButton";
import Countdown from "react-countdown";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import { TbShoppingBag } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { Tab, Tabs } from "../../../components/Tab";
import ImageGallery from "./../../../components/ImageGallery";

import Loading from "../../../components/ui/Loading";
import Latest_Product_Api from "../../../api/product/Latest_Product_Api";

const SingleProduct = () => {
  const [count, setCount] = useState(1);

  const { latestProduct, loading, error } = Latest_Product_Api();

  const renderer = ({ hours, minutes, seconds }) => (
    <>
      {[hours, minutes, seconds].map((time, i) => (
        <span
          key={i}
          className="text-[#C2410C] bg-[#FFEDD5] border border-[#FED7AA] p-2 rounded-lg mr-1"
        >
          {time}
        </span>
      ))}
    </>
  );

  return (
    <>
      {loading && <Loading />}
      {!loading && !error && latestProduct.length > 0 && (
        <div className="max-w-7xl mx-auto px-4">
          {latestProduct.map((product, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-start my-12"
            >
              <ImageGallery images={product.image_urls || []} />

              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-semibold">
                  {product.name || "Marketside Fresh Organic Bananas, Bunch"}
                </h2>

                <div className="inline-flex border-b border-gray py-3">
                  <div className="inline-flex border-r border-gray pr-2">
                    <ul className="flex gap-1">
                      <li>*</li>
                      <li>*</li>
                      <li>*</li>
                      <li>*</li>
                    </ul>
                    <div className="text-sm font-medium border border-gray rounded-xl px-2 pyx-1">
                      3.00
                    </div>
                  </div>
                  <div className="text-md flex ps-3">
                    <p className="font-semibold">SKU:</p>
                    <p className="text-gray-400 ms-1">E7F8G9H0</p>
                  </div>
                </div>

                <p className="text-gray text-md">{product.brand.name}</p>

                <div className="inline-flex gap-3 items-end">
                  <p className="text-red-500 font-bold text-4xl font-roboto">
                    {product.new_price}
                  </p>
                  <p className="line-through font-medium text-2xl font-roboto">
                    {product.old_price}
                  </p>
                </div>

                <PrimaryButton className="bg-green-600 hover:bg-green-800 w-fit py-3">
                  Order on Whatsapp
                </PrimaryButton>

                <div className="border border-[#FED7AA] bg-[#FFEDD5] px-4 py-3 rounded-lg">
                  <span className="text-orange-600 font-medium pr-3">
                    Special Offer
                  </span>
                  <Countdown
                    date={Date.now() + 1000 * 60 * 60}
                    renderer={renderer}
                  />
                  <span className="text-gray-600 ps-3 text-sm">
                    Remains until the end of the offer.
                  </span>
                </div>

                <div className="inline-flex gap-4">
                  <div className="border border-gray-300 rounded-lg px-2 flex items-center gap-5">
                    <HiOutlineMinus
                      className="cursor-pointer"
                      onClick={() =>
                        setCount((prev) => (prev > 1 ? prev - 1 : 1))
                      }
                    />
                    {count}
                    <BsPlusLg
                      className="cursor-pointer"
                      onClick={() => setCount(count + 1)}
                    />
                  </div>
                  <PrimaryButton className="bg-green-600 hover:bg-green-800 w-fit inline-flex items-center">
                    <TbShoppingBag className="mr-1" size={20} />
                    Add to cart
                  </PrimaryButton>
                  <PrimaryButton className="bg-gray-900 hover:bg-gray-700 w-fit inline-flex items-center">
                    <TbShoppingBag className="mr-1" size={20} />
                    Buy Now
                  </PrimaryButton>
                </div>

                <div className="border border-gray-300 rounded-lg">
                  <div className="inline-flex gap-5 items-center px-3 border-b border-b-gray-300 py-3">
                    <MdOutlinePayment size={55} className="text-gray-500" />
                    <div className="text-gray-400 text-sm">
                      <span className="font-semibold">Payment.</span> Payment
                      options: on delivery, card, Google Pay, online card, 5%
                      discount for card payments.
                    </div>
                  </div>
                  <div className="inline-flex gap-5 items-center px-3 py-3">
                    <GoShieldCheck size={37} className="text-gray-500" />
                    <div className="text-gray-400 text-sm">
                      <span className="font-semibold">Warranty.</span> Product
                      return not applicable as per Consumer Protection Act.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Tabs */}

          <div className="w-full">
            <Tabs>
              <Tab title="Description">
                <p className="text-sm text-gray-700">
                  Quisque varius diam vel metus mattis...
                </p>
              </Tab>
              <Tab title="Review">
                <h2 className="text-xl font-bold mb-4">User Review</h2>
                <p>Manage your account preferences here.</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
