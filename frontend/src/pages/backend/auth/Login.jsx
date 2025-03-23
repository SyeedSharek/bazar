import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Loading from "../../../../../../../reactCrud/fontend/src/components/Loading";
import UserIcon from "./../../../components/ui/icons/UserIcon";
import PrimaryButton from "./../../../components/ui/buttons/PrimaryButton";
import Loading from "./../../../components/ui/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_BACKEND_API;
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center">
      <div className=" p-8 rounded-lg h-auto">
        <h1 className="text-center text-4xl font-semibold font-outfit mb-10">
          Login
        </h1>
        <p className="text-sm font-poppins my-5">
          If you have an account, sign in with your username or email address.
        </p>
        <div className="">
          <form action="" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="text-sm mb-2 block" htmlFor="email">
                Username or Email address
              </label>
              <div className="flex w-full border-2 border-gray-300 rounded-md focus-within:border-indigo-500">
                <div className="">
                  <input
                    className="w-full outline-none bg-transparent p-2"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ex: 9FtE0@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className=" mb-4">
              <label className="text-sm mb-2 block" htmlFor="password">
                Password
              </label>
              <div className="flex w-full border-2 border-gray-300 rounded-md focus-within:border-indigo-500">
                <div className="">
                  <input
                    className="w-full outline-none border-none bg-transparent p-2"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="ex: **********"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-1">
              <Link to="/forget-password">Forget Password</Link>
            </div>

            <div className="mt-5 flex justify-center">
              <PrimaryButton type="submit" className="w-full">
                Login
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
