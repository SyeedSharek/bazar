import React from "react";
import { Link } from "react-router-dom";
import Cart_Icon from "../../../components/ui/icons/Cart_Icon";
import Loading from "../../../components/ui/Loading";
import Product_Api from "../../../api/product/Product_Api";
import Slider from "../main_slider/Slider";

export default function Main_Product() {
  const { product, loading, error } = Product_Api();

  return (
    <>
      <div className="mt-[60px] w-[1360px]">
        <Slider />
        <h2 className="text-xl font-bold mb-4">All Products</h2>
        {loading && <Loading />}
        {error && <p className="text-red-500">Error loading products</p>}
        {!loading && product.length === 0 && (
          <p className="text-gray-500">No products found.</p>
        )}
        <div className="flex flex-wrap gap-4">
          {product.map((product) => (
            <div
              key={product.id}
              className="w-[227px] h-[379.38px] bg-white shadow rounded-lg p-2 relative"
            >
              <div className="absolute top-3 left-7 bg-[#DC2626] text-white text-xs px-2 py-1 rounded-xl">
                {product.discount ? `${product.discount}%` : "Sale"}
              </div>
              <Link to={`/single_product/${product.id}`}>
                <img
                  src={product.image_urls?.[0] || "/images/placeholder.png"}
                  alt={product.name}
                  className="w-[177px] h-[177px] mx-auto mb-3"
                />
              </Link>
              <div className="text-center mb-2">{product.name}</div>
              <div className="flex justify-center items-center space-x-2 mb-2">
                <p className="text-[#DC2626] font-bold">${product.new_price}</p>
                <del className="text-gray-500">${product.old_price}</del>
              </div>
              <Link
                to="/cart"
                className="flex items-center space-x-2 border border-[#634C9F] rounded-xl px-4 py-2 text-[#634C9F] justify-center"
              >
                <span>Add To Cart</span>
                <Cart_Icon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
