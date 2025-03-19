import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Sidebar() {
  
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const token = localStorage.getItem("token");

  if(!token) {  
    window.location.href = "login";
  }
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/categories', {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in request
        Accept: 'application/json'
      }
    })
    .then(response => {
      // console.log(response);
      setCategories(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching categories:', error.response ? error.response.data : error);
    });
  }, []);

  return (
    <>
    <aside className='bg-[#e5e8f1] w-[180px] text-white font-semibold p-6 border border-gray-700 '>
      <div className='mb-1.5'>
        <p className='font-bold text-gray-600 text-[18px] disabled:*'>Category</p>
        <div>
          <ul>
            { categories.length>0 ?(
              categories.map((category) => (
                <li  key={category.id} className='text-black ml-2 mt-2 w-full  p-1 rounded-md cursor-pointer hover:bg-[#003566] hover:text-white'>
                  {category.name}
                </li>
              ))
             ) : (
                <li className="text-red-500">No categories found</li>
            )}
          </ul>
        </div>
      </div>
      <div>
      <p className='font-bold text-gray-600 text-[18px] disabled:*'>Sub Category</p>

      </div>
    </aside>
    </>
  )




}
