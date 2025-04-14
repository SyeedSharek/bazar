import React, { useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import PrimaryButton from "../../../components/ui/buttons/PrimaryButton";
import { BsTrash } from "react-icons/bs";
// import { useFormik } from "formik";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];
    files.forEach((file) => {
      if (file.type.match("image.*")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push({
            url: reader.result,
            name: file.name,
            size: file.size,
          });

          // Update state only after all images are processed
          if (newImages.length === files.length) {
            setImages([...images, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  return (
    <div>
      <BreadCrumb
        data={[
          { name: "Product", url: "/admin/product" },
          { name: "Create Product", url: "/admin/add-product" },
        ]}
      />
      <div className="py-4 px-4 bg-white rounded-xl my-4 flex justify-between items-center">
        <p className="font-poppins font-semibold text-2xl">Create Product</p>
      </div>
      <div className="mt-4 bg-white rounded-xl p-5">
        <form>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="mt-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Category Name
              </label>
              <select
                id="category"
                name="category"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              >
                <option value="">Select Category</option>
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="subcategory"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                SubCategory Name
              </label>
              <select
                id="subcategory"
                name="subCategory"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              >
                <option value="">Select Sub Category</option>
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Brand Name
              </label>
              <select
                id="brand"
                name="brand"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              >
                <option value="">Select Brand</option>
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="product_name"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Product Name
              </label>
              <input
                type="text"
                id="product_name"
                name="product_name"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="product_old_price"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Product Old price
              </label>
              <input
                type="number"
                id="product_old_price"
                name="product_old_price"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="product_new_price"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Product New price
              </label>
              <input
                type="number"
                id="product_new_price"
                name="product_new_price"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="product_discount"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Product Discount price
              </label>
              <input
                type="number"
                id="product_discount"
                name="product_discount"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="product_qty"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Product Quantity
              </label>
              <input
                type="number"
                id="product_qty"
                name="product_qty"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Category Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-900 mb-3"
            >
              Category Image
            </label>
            <input
              onChange={(e) => {
                handleImageChange(e);
              }}
              multiple
              accept="image/*"
              type="file"
              id="image"
              name="image"
              className="mt-1 bg-gray-50 block w-fit rounded-md transition duration-300 sm:text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {/* <ErrorMessage message={error?.errors?.image} /> */}
            {images.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Previews:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img.url}
                        alt={`Preview ${index}`}
                        className="size-72 object-cover rounded-md border border-gray-200"
                      />
                      <div className="absolute inset-0 left-2 top-2  bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-md opacity-0 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                          title="Remove image"
                        >
                          <BsTrash />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 truncate mt-1">
                        {img.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {Math.round(img.size / 1024)} KB
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <PrimaryButton type="submit" className="mt-4">
            Create Product
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
