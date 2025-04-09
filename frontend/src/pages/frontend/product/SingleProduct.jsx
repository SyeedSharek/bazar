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

const SingleProduct = () => {
  const [count, setCount] = useState(1);

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <>
        <span className="text-[#C2410C] bg-[#FFEDD5] border border-[#FED7AA] p-2 rounded-lg mr-1">
          {hours}
        </span>
        <span className="text-[#C2410C] border bg-[#FFEDD5] border-[#FED7AA] p-2 rounded-lg mr-1">
          {minutes}
        </span>
        <span className="text-[#C2410C] border bg-[#FFEDD5] border-[#FED7AA] p-2 rounded-lg mr-1">
          {seconds}
        </span>
      </>
    );
  };
  const productImages = [
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=500",
    "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=500",
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=500",
    "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=500",
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=500",
    "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=500",
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-2 justify-between items-center gap-5 my-12">
        <ImageGallery images={productImages} />
        <div className=" flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">
            Marketside Fresh Organic Bananas, Bunch
          </h2>
          <div className="inline-flex border-b border-gray py-3">
            <div className="inline-flex border-r border-gray pr-2">
              <ul className="flex gap-2">
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
              <p className="text-gray-400">E7F8G9H0</p>
            </div>
          </div>
          <p className="text-gray text-md">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
            Vivamus adipiscing nisl ut dolor dignissim semper.
          </p>
          <div className="inline-flex gap-3 items-end">
            <p className="text-red-500 font-bold text-4xl font-roboto">$0.59</p>
            <p className="line-through font-medium text-2xl font-roboto">
              $1.59
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
              className="text-orange-600"
              renderer={renderer}
            />
            <span className="text-gray-600 ps-3 text-sm">
              Remains until the end of the offer.
            </span>
          </div>
          <div className="inline-flex gap-4">
            <div className="border border-gray-300 rounded-lg px-2 flex items-center gap-5 ">
              <span>
                <HiOutlineMinus
                  className="cursor-pointer"
                  onClick={() =>
                    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
                  }
                />
              </span>
              {count}
              <span>
                <BsPlusLg
                  className="cursor-pointer"
                  onClick={() => setCount(count + 1)}
                />
              </span>
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
          <div className="border border-gray-300 rounded-lg ">
            <div className="inline-flex gap-5 items-center px-3 border-b border-b-gray-300">
              <MdOutlinePayment size={55} className="text-gray-500" />
              <div className="text-gray-400 text-sm">
                <span className="font-semibold">Payment.</span> Payment upon
                receipt of goods, Payment by card in the department, Google Pay,
                Online card, -5% discount in case of payment
              </div>
            </div>
            <div className="inline-flex gap-5 items-center px-3">
              <GoShieldCheck size={37} className="text-gray-500" />
              <div className="text-gray-400 text-sm">
                <span className="font-semibold">Warranty.</span> The Consumer
                Protection Act does not provide for the return of this product
                of proper quality.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <Tabs>
          <Tab title="Description">
            <p className="text-sm text-gray-700">
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit
              ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
              fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
              sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet
              est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan
              tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim
              a tortor.
            </p>
            <p className="mt-4 text-sm text-gray-700">
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
              auctor, eleifend nunc a, lobortis neque. Praesent aliquam
              dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
              maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet
              eros sit amet, ultricies cursus ipsum. Sed consequat luctus
              ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu
              pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
              vestibulum vulputate, lorem orci convallis quam, sit amet
              consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
              egestas purus commodo vel.
            </p>
          </Tab>
          <Tab title="Review">
            <h2 className="text-xl font-bold mb-4">User Review</h2>
            <p>Manage your account preferences here.</p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default SingleProduct;
