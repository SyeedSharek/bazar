import React from "react";
import useSliderApi from "../../../api/slider/Slider_Api";
import Loading from "../../../components/ui/Loading";
import { Link } from "react-router-dom";

export default function Slider() {
  const { sliders, loading, error } = useSliderApi();

  return (
    <div className="h-[482.42px] m-5 relative">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && sliders.length > 0 ? (
        sliders.map((slider, index) => (
          <div key={index} className="relative">
            {/* Text Overlay Section */}
            <div
              className="absolute w-[455px] h-[321.17px] top-[60px] left-[60px] text-black px-6 py-4 rounded flex flex-col space-y-3"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.9, // Slightly more visible
              }}
            >
              {/* Weekend Discount Tag */}
              <p
                className="w-[200px] h-[40px] text-[#166534] font-semibold text-md text-center flex items-center justify-center rounded"
                style={{
                  background:
                    "linear-gradient(to right, #16A34A 50%, #22C55E 0%)",
                  color: "white",
                }}
              >
                Weekend Discount
              </p>

              <div className="w-[431.05px]">
                <p className="text-[42px] font-bold tracking-tighter">
                  Get the best quality products at the lowest prices
                </p>
              </div>

              <div className="w-[399.42px]">
                <p className="font-semibold text-base tracking-tighter">
                  We have prepared special discounts for you on grocery
                </p>
              </div>
              <div className="w-[306.67px]">
                <p className="font-semibold text-base tracking-tighter">
                  products. Don't miss these opportunities...
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <Link
                    to="/all_product"
                    className="w-[134.16px] h-[42px] rounded-[8px] bg-[#634C9F] text-white px-5 py-3 flex items-center justify-center text-sm hover:bg-[#523D82] transition"
                  >
                    Shop
                  </Link>
                </div>

                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <p className="h-[34px] text-[#DC2626] font-Barlow text-[28px] font-bold">
                      $27.99
                    </p>
                    <del className="h-[24px] py-2">$56.67</del>
                  </div>
                  <p className="opacity-70 text-sm">
                    Don't miss this limited-time offer.
                  </p>
                </div>
              </div>
            </div>

            <img
              className="w-[1032px] object-cover"
              src={slider.image}
              alt={`Slider ${index}`}
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No sliders available</p>
      )}
    </div>
  );
}
