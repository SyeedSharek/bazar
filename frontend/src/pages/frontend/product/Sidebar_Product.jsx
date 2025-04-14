import React, { useState } from "react";
import Category_Api from "../../../api/cateogry/Category_Api";
import Loading from "../../../components/ui/Loading";
import SubCategory_Api from "../../../api/subcategory/SubCategory_Api";
import { Link } from "react-router-dom";

export default function () {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const { categories, loading, error } = Category_Api();
  const { subCategories, loading: subLoading } =
    SubCategory_Api(activeCategoryId);

  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId((prev) => (prev === categoryId ? null : categoryId));
  };



  const minPercent = (min / 1000) * 100;
  const maxPercent = (max / 1000) * 100;
  return (
    <>
      <div className="w-[350px] h-[693.39px] -2">
        <div className=" border-b border-[#E5E7EB] py-3">
          <p>Widget price filter</p>
          <div className="flex justify-between ">
            <div>
              <p>Min</p>

              <input
                className="w-[116.44px] h-[38px] border border-[#E5E7EB] rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <p>Max</p>
              <input
                className="w-[116.44px] h-[38px] border border-[#E5E7EB] rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full my-4">
            <div
              className="absolute h-2 bg-blue-500 rounded-full"
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            />
          </div>
          <div className="flex">
            <p>Price : </p>
            <p>$0 -</p>
            <p>$1,000</p>
          </div>
        </div>

        <div>
          <p>Product Category</p>
          {/* Category List */}
          <div className="mt-4 px-4">
            <p className="font-semibold mb-2">Product Category</p>
            <div className="w-full h-[480px] border border-[#E5E7EB] overflow-auto">
              {loading && <Loading />}
              {error && <p className="text-red-500 text-center">{error}</p>}
              {!loading && !error && (
                <ul className="border-t border-[#E5E7EB]">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <div
                        className="flex justify-between items-center h-[45px] px-3 hover:bg-gray-100 cursor-pointer border-b border-[#E5E7EB]"
                        onClick={() => handleCategoryClick(cat.id)}
                      >
                        <span>{cat.name}</span>
                        <button>
                          {activeCategoryId === cat.id ? "-" : "+"}
                        </button>
                      </div>

                      {/* Subcategories */}
                      {activeCategoryId === cat.id && (
                        <div className="pl-6 pb-2">
                          {subLoading ? (
                            <p className="text-gray-500 text-sm">Loading...</p>
                          ) : subCategories.length > 0 ? (
                            subCategories.map((subCat) => (
                              <Link
                              to={`/subcategory-products/${subCat.id}`}
                              key={subCat.id}
                              onClick={() => handleSubCategoryProduct(subCat.id)}
                              className="h-[38px] flex items-center px-2 hover:bg-gray-200 cursor-pointer text-sm"
                            >
                              {subCat.name}
                            </Link>
                            ))
                          ) : (
                            <p className="text-gray-400 text-sm">
                              No subcategories
                            </p>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
