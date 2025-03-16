import React, { useState } from "react";
import UserIcon from "../../../ui/icons/UserIcon";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import axios from "axios";

export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
   
    
  
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", { email, password });       
  
      if (response.status === 200) {
        // console.log(response)
        localStorage.setItem("token", response.data.data.access_token);      
  
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Login failed. Check your credentials.");
    }
  };
  



  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/auth/login.jpg')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-[30%] h-auto">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <div className=" ">
          <form action="" onSubmit={handleLogin}>
            <div className="mt-[10%] mb-4">
              <label className="text-[22px] mb-3 block" htmlFor="password">
                Email
              </label>
              <div className="flex w-full border-b-2 focus-within:border-blue-500">
                <div>
                  <UserIcon />
                </div>
                <div className="">
                  <input
                    className="w-full outline-none border-none bg-transparent p-2"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-[10%] mb-4">
              <label className="text-[22px] mb-3 block" htmlFor="password">
                Password
              </label>
              <div className="flex w-full border-b-2 focus-within:border-blue-500">
                <div>
                  <UserIcon />
                </div>
                <div className="">
                  <input
                    className="w-full outline-none border-none bg-transparent p-2"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-1">
              <Link to="/admin/forget-password">Forget Password</Link>
            </div>

            <div className="mt-[10%] flex justify-center">
              <PrimaryButton type="submit"  className="w-[220px]">Login</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
