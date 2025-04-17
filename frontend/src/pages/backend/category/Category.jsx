import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import PrimaryButton from "../../../components/ui/buttons/PrimaryButton";
import Loading from "../../../components/ui/Loading";
const apiUrl = import.meta.env.VITE_BACKEND_API;
import useFetch from "./../../../hooks/customHooks/useFetch";
import { toast } from "react-hot-toast";
import BreadCrumb from "../../../components/BreadCrumb";
import { LiaTrashAltSolid } from "react-icons/lia";
import { BiEdit } from "react-icons/bi";

const Category = () => {
  const { fetchData, deleteData, data, isLoading, error } = useFetch();
  useEffect(() => {
    fetchData(`${apiUrl}/categories?paginate=10`);
  }, [apiUrl]);
  const handleDelete = async (id) => {
    deleteData(`${apiUrl}/categories/${id}`);
    if (data?.status === true) {
      toast.success(data?.message || "Category deleted successfully!");
      fetchData(`${apiUrl}/categories?paginate=10`);
    }
  };
  if (error) {
    toast.error(error);
  }
  const breadCrumbs = [
    {
      name: "Category",
      url: "/admin/category",
    },
  ];

  return (
    <>
      <BreadCrumb data={breadCrumbs} />
      <div className="relative overflow-y-auto shadow-md sm:rounded-lg my-8 container mx-auto">
        <div className="py-4 px-4 bg-white rounded-xl my-4 flex justify-between items-center">
          <div>
            <p className="font-poppins font-semibold text-2xl"> Category</p>
          </div>
          <Link to={"/admin/add-category"}>
            <PrimaryButton className="text-sm hover:bg-hover cursor-pointer">
              Add Category
            </PrimaryButton>
          </Link>
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
              data?.data?.data.map((item, index) => (
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
                  <td className="px-6 py-4 ">
                    <div className="inline-flex gap-3">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        <BiEdit size={25} />
                      </a>
                      <button
                        className="font-medium text-red-600 hover:underline cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        <LiaTrashAltSolid size={25} />
                      </button>
                    </div>
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
