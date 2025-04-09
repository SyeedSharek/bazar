import React from "react";
import { Link } from "react-router-dom";
import Category_Api from "../../../api/cateogry/Category_Api"; // Fixed the spelling

export default function Home_Bar() {
  const { categories, loading, error } = Category_Api();

  return (
    <div className="flex justify-between items-center w-full p-4 border-b border-[#E5E7EB] bg-white text-sm font-semibold">
      {/* Left Section */}
      <div className="flex gap-x-6">
        <Link to="/" className="hover:text-[#634C9F] hover:underline">
          Home
        </Link>
        <Link
          to="/all_product"
          className="hover:text-[#634C9F] hover:underline"
        >
          Shop
        </Link>

        <div className="flex gap-x-6 w-[400px] overflow-hidden ">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {!loading && !error && categories.length > 0 ? (
            categories.slice(0, 3).map((cat, index) => (
              <Link
                className="hover:text-[#634C9F] hover:underline "
                key={index}
                to={`/category/${cat.id}`}
              >
                {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No categories found</p>
          )}
        </div>

        <Link to="/contact" className="hover:text-[#634C9F] hover:underline">
          Contact
        </Link>
        <Link to="/blog" className="hover:text-[#634C9F] hover:underline">
          Blog
        </Link>
      </div>

      <div className="flex gap-x-6">
        <Link to="/trending_product" className="text-[#030712] hover:underline">
          Trending Products
        </Link>
        <Link
          to="/finish_product_sell_details"
          className="text-red-500 hover:underline"
        >
          Almost Sold Out
        </Link>
      </div>
    </div>
  );
}
