import React from "react";
import Category from "./Category";
import Home_Bar from "./Home_Bar";
import Slider from "./Slider";

export default function Main_Home_Bar() {
  return (
    <>
      <div className="flex w-[1380px] ">
        <div>
          <Category />
        </div>
        <div className="w-[1380px]">
          <div>
            <Home_Bar />
          </div>
          <div className="">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
