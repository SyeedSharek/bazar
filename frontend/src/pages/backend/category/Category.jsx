import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import PrimaryButton from "../../../components/ui/buttons/PrimaryButton";
import axios from "axios";
import Loading from "../../../components/ui/Loading";

const Category = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_API;
  const token = localStorage.getItem("token");
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios(`${apiUrl}/categories?paginate=15`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response?.data?.status === true) {
          setIsLoading(false);
          setCategory(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, [apiUrl, token]);
  return (
    <>
      {/* breadcrumb */}
      <nav className="flex">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center gap-2">
            <FaHome size={16} />
            <Link
              to="/admin/dashboard"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary "
            >
              Home
            </Link>
          </li>
          <IoIosArrowForward size={16} />
          <li className="inline-flex items-center gap-2">
            <Link
              to="/admin/category"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary "
            >
              Category
            </Link>
          </li>
        </ol>
      </nav>
      {/* breadcrumb */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-8 container mx-auto">
        <div className="py-4 px-4 bg-white rounded-xl my-4 flex justify-between items-center">
          <div>
            <p className="font-poppins font-semibold text-2xl"> Category</p>
          </div>
          <PrimaryButton className="text-sm hover:bg-hover cursor-pointer">
            Add Category
          </PrimaryButton>
        </div>
        {isLoading && (
          <div className="w-full h-[50vh] flex justify-center">
            <Loading />
          </div>
        )}

        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3 w-sm">
                Category slug
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3 w-lg">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="min-h-[50vh] overflow-y-auto">
            {!isLoading &&
              category?.data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b border-gray-200 hover:bg-gray-50 "
                >
                  <td scope="row" className="px-6 py-4">
                    {index + 1}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.slug}</td>
                  <td className="px-6 py-4">
                    <img src={item.image} className="w-8" alt={item.name} />
                  </td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4 line-clamp-1">{item.description}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Category;
