import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { data } = props;
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
          {data.map((item, index) => (
            <li className="inline-flex items-center gap-2" key={index}>
              <IoIosArrowForward size={16} />
              <Link
                to={item.url}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      {/* breadcrumb */}
    </>
  );
};

export default BreadCrumb;
