import React from "react";
import { Link } from "react-router-dom";
import Cart_Icon from "../../../components/ui/icons/Cart_Icon";
import Loading from "../../../components/ui/Loading";
import Latest_Product_Api from "../../../api/product/Latest_Product_Api";


export default function NewArrivalProduct() {
  const { latestProduct, loading, error } = Latest_Product_Api();

  return (
    <div className="mt-[60px] w-[1360px]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="mr-3 font-inter font-bold text-[18px] tracking-tight text-[#030712]">
            New Arrivals
          </p>
          <p className="font-inter font-medium text-[12px] tracking-tight text-[#6B7280]">
            Don't miss this opportunity at a special discount just for this week
          </p>
        </div>

        <Link
          to=""
          className="w-[97.53px] h-[34px] rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          View All →
        </Link>
      </div>

      <div className="mt-3 overflow-hidden flex flex-wrap gap-4">
        {loading && <Loading />}
        {!loading && !error && latestProduct.length > 0 &&
          latestProduct.map((product) => (
            <div
              key={product.id}
              className="w-[227px] h-[379.38px] bg-white shadow rounded-lg p-2 relative"
            >
              <div className="w-[40.58px] h-[24px] bg-[#DC2626] rounded-xl flex items-center justify-center absolute top-3 left-7">
                <p className="text-[12px] font-inter font-extrabold text-[#FEF2F2] tracking-tight">
                  {product.discount ? `${product.discount}%` : "Sale"}
                </p>
              </div>

              <Link to={`/single_product/${product.id}`}>
                <div className="w-[177px] h-[177px] mx-auto mb-3">
                  <img
                    src={product.image_urls?.[0] || "/images/placeholder.png"}
                    alt={product.name}
                    className="w-full h-full"
                  />
                </div>
              </Link>

              <div className="mb-6">
                <div className="w-[90px] h-[24px] rounded-xl bg-gradient-to-r from-[#D4FC79] to-[#96E6A1] flex items-center justify-center mb-3">
                  <p className="text-xs font-semibold text-black">ORGANIC</p>
                </div>

                <Link to={`/single_product/${product.id}`}>
                  <p className="w-full h-[35.18px] font-inter font-medium text-[14px] mb-4">
                    {product.name}
                  </p>
                </Link>

                <div className="flex items-center">
                  <p className="font-barlow font-bold text-[22px] tracking-normal text-[#DC2626] mr-2">
                    ${product.new_price}
                  </p>
                  <del className="font-barlow font-medium text-[22px] line-through tracking-normal">
                    ${product.old_price}
                  </del>
                </div>
              </div>

              <Link
                  to="/cart"
                  className="w-full h-[34px] rounded-xl border border-[#634C9F] flex items-center justify-center font-inter font-medium text-md tracking-tight text-[#634C9F]"
                >
                  <div className="flex items-center space-x-2">
                    <span>Add To Cart</span>
                    <Cart_Icon />
                  </div>
                </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
