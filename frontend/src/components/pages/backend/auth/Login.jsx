import React from "react";
import UserIcon from "../../../ui/icons/UserIcon";

export default function Login() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/auth/login.jpg')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-[30%] h-[70%]">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <div className=" ">
          <form action="">
            <div className="mt-[10%] mb-4 ">
              <label className="text-[22px] mb-3 block" htmlFor="email">
                Email
              </label>
              <div className="flex w-full border-b-2  focus:outline-none focus:border-blue-500">

              <div>
              <UserIcon /> 

                </div>

                <div>
                  <input
                    className=""
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" Enter your email"
                  />
                </div>
               
              </div>
            </div>

            <div className="mt-[10%] mb-4 ">
              <label className="text-[22px] mb-3 block" htmlFor="email">
                Email
              </label>
              <div className="flex w-full border-b-2  focus:outline-none focus:border-blue-500">

              <div>
              <UserIcon /> 

                </div>

                <div>
                  <input
                    className=""
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" Enter your email"
                  />
                </div>
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
