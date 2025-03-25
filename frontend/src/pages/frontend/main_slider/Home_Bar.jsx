import React from "react";
import { Link } from "react-router-dom";

export default function Home_Bar() {
  return (
    <>
      <div className="w-[1032px] ">
        <div>
          <Link to="/frontend/home">Home</Link>
          <Link to="/frontend/home">Shop</Link>
          <Link to="/frontend/home"></Link>
          <Link to="/frontend/home">Contact</Link>
          <Link to="/frontend/home">Blog</Link>
        </div>
      </div>
    </>
  );
}
