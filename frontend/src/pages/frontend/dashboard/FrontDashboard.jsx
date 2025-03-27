import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/navbar";
import Main_Home_Bar from "../main_slider/Main_Home_Bar";

export default function FrontDashboard() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Navbar />
        <Main_Home_Bar />
      </div>
    </>
  );
}
