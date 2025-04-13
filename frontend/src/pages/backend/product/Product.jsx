import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/ui/buttons/PrimaryButton";

const Product = () => {
  return (
    <div>
      <BreadCrumb data={[{ name: "Product", url: "/admin/product" }]} />
      <div className="py-4 px-4 bg-white rounded-xl my-4 flex justify-between items-center">
        <div>
          <p className="font-poppins font-semibold text-2xl"> Product</p>
        </div>
        <Link to={"/admin/add-product"}>
          <PrimaryButton className="text-sm hover:bg-hover cursor-pointer">
            Add Product
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Product;
