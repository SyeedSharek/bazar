import React from "react";
import Main_Home_Bar from "../main_slider/Main_Home_Bar";
import OrderStatus from "../order_status/OrderStatus";
import WeekendBanner from "../main_slider/WeekendBanner";
import NewArrivalProduct from "../product/NewArrivalProduct";
import Best_Seller_Product from "../product/Best_Seller_Product";
import Popular_Companies from "../companies/Popular_Companies";

export default function FrontDashboard() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Main_Home_Bar />
        <OrderStatus />
        <WeekendBanner />
        <NewArrivalProduct />
        <Best_Seller_Product />
        <Popular_Companies />
      </div>
    </>
  );
}
