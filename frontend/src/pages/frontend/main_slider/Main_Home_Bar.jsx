import React from "react";
import Category from "./Category";
import Home_Bar from "./Home_Bar";
import Slider from "./Slider";

export default function Main_Home_Bar() {
  return (
    <>
      <div className="flex ">
        <div>
          <Category />
        </div>
        <div className="w-full">
          <div>
            <Home_Bar />
          </div>
          <div className="w-[full]">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
