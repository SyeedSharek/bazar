import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ( {data} ) => {
  
  return (
    <>
      <div className="flex gap-3 items-center mt-4">
        {data?.map((link, index) => (
              <div key={index} className={`px-3 py-1 ${link.active ? "bg-primary text-white" : "bg-white text-black"}  rounded-lg `}>
                <Link to={link.url} dangerouslySetInnerHTML={{ __html: link.label }}/>
              </div>
          ))}
      </div>
    </>
  );
};
