import React, { useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import PrimaryButton from "../../../components/ui/buttons/PrimaryButton";
const apiUrl = import.meta.env.VITE_BACKEND_API;
import { useFormik } from "formik";
import ErrorMessage from "../../../components/ErrorMessage";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [image, setImage] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      image: null,
      description: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("image", values.image);
      formData.append("description", values.description);
      try {
        const response = await axios.post(`${apiUrl}/categories`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response?.data?.status === true) {
          toast.success(
            response?.data?.message || "Category created successfully!"
          );
          resetForm(values);
          setImage(null);
          navigate("/admin/category");
        }
      } catch (error) {
        setError(error?.response?.data);
        toast.error(error?.response?.data?.message || "Something went wrong!");
      }
    },
  });

  const breadCrumbs = [
    {
      name: "Category",
      url: "/admin/category",
    },
    {
      name: "Create Category",
      url: "/admin/add-category",
    },
  ];
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="py-4 px-4 bg-white rounded-xl my-4 flex justify-between items-center">
        <p className="font-poppins font-semibold text-2xl">Create Category</p>
      </div>
      <div className="mt-4 bg-white rounded-xl p-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Category Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
                onChange={formik.handleChange}
                value={formik.values.name}
                autoFocus
              />
            </div>
            <div className="">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-900 mb-3"
              >
                Category Image
              </label>
              <input
                onChange={handleImageChange}
                accept="image/png, image/jpeg, image/jpg"
                type="file"
                id="image"
                name="image"
                className="mt-1 block w-full rounded-md transition duration-300 sm:text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
              <ErrorMessage message={error?.errors?.image} />
            </div>
            <div className="">
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
                value={formik.values.description}
                onChange={formik.handleChange}
                className="mt-1 py-2 px-2 block w-full rounded-md focus:outline-none transition duration-300 focus:shadow border focus:border-indigo-400 sm:text-sm"
              ></textarea>
            </div>
            {image && (
              <div className="">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Preview:
                </h3>
                <img
                  src={image}
                  alt="Preview"
                  className=" size-24 rounded-md border border-gray-200"
                />
              </div>
            )}
          </div>
          <PrimaryButton type="submit" className="mt-4">
            Create Category
          </PrimaryButton>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
