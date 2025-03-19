import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-[#e5e8f1] w-[180px] text-black font-semibold p-6 border border-gray-700">
      <div className="mb-1.5">
        <Link to="/admin/category">Category</Link>
      </div>
      <div>
        <Link to="/admin/subCategory">Sub Category</Link>
      </div>
    </aside>
  );
}
