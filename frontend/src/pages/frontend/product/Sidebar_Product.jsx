import React, { useState } from "react";
import Category_Api from "../../../api/cateogry/Category_Api";
import Loading from "../../../components/ui/Loading";
import SubCategory_Api from "../../../api/subcategory/SubCategory_Api";

export default function () {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  // Assuming max value range is $1000 for the bar
  const minPercent = (min / 1000) * 100;
  const maxPercent = (max / 1000) * 100;
  const { categories, loading, error } = Category_Api();
  const {subCategories } = SubCategory_Api();
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
          <div className="w-[300px] h-[555px] border  border-[#E5E7EB] overflow-auto ">
            {loading && <Loading />}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && !error && (
              <ul className="border-t border-[#E5E7EB]">
                {categories.length > 0 ? (
                  categories.map((cat, index) => (
                    <div>
                        <div className="flex justify-between border-b border-[#E5E7EB]">
                      <div className="h-[45px] mt-1 ml-1 px-2 flex items-center hover:bg-gray-200 cursor-pointer ">
                        <li key={index} className="">
                          {cat.name}
                        </li>
                      </div>
                      <div>
                        <button>+</button>
                      </div>
                      

                    </div>
                    <div className="h-[45px] mt-1 ml-6 px-2 flex items-center hover:bg-gray-200 cursor-pointer ">
                        <li key={index} className="">
                          {cat.name}
                        </li>
                      </div>
                    </div>
                  
                    
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No categories found
                  </p>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
