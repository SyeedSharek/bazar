import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../../components/ui/Loading";
import Cart_Icon from "../../../../components/ui/icons/Cart_Icon";
import SubCategory_Wish_Product_Show_Api from "../../../../api/filter/SubCategory_Wish_Product_Show_Api";
import Sidebar_Product from "../Sidebar_Product";

export default function SubCategoryProductPage() {
  const { subCategoryId } = useParams();
  const { subCategorieWishProduct, loading, error } =
    SubCategory_Wish_Product_Show_Api(subCategoryId);

  return (
    <div className="mt-[60px] w-full max-w-7xl mx-auto flex gap-6">
      {/* Sidebar */}
      <div className="w-[250px]">
        <Sidebar_Product />
      </div>

      {/* Product listing */}
      <div className="flex-1 ml-[120px]">
        <h2 className="text-xl font-bold mb-4 border-b border-[#E5E7EB]">
          Sub Category Wish Products
        </h2>

        {loading && <Loading />}
        {error && <p className="text-red-500">Error loading products</p>}
        {!loading && subCategorieWishProduct.length === 0 && (
          <p className="text-gray-500">No products found.</p>
        )}

        <div className="grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {subCategorieWishProduct.map((product) => (
            <div
              key={product.id}
              className="w-[227px] h-[320.38px] bg-white shadow rounded-lg p-4 relative gap-x-4"
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
    </div>
  );
}
