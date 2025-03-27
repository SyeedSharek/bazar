import React from "react";
import Category_Api from "../../../api/cateogry/Category_Api";
import Loading from "../../../components/ui/Loading";

export default function Category() {
  const { categories, loading, error } = Category_Api();
  return (
    <>
      <div className="w-[300px] h-[507px] border  border-[#E5E7EB] overflow-hidden">
        {loading && <Loading />}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && !error && (
          <ul className="border-t border-[#E5E7EB]">
            {categories.length > 0 ? (
              categories.map((cat, index) => (
                <li
                  key={index}
                  className="h-[45px] mt-1 ml-1 px-2 flex items-center hover:bg-gray-200 cursor-pointer border-b border-[#E5E7EB]"
                >
                  {cat.name}
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">No categories found</p>
            )}
          </ul>
        )}
      </div>
    </>
  );
}
