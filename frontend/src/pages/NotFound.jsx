import React from "react";
import image from "../assets/errorpage.svg";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 flex flex-col justify-center gap-6">
      <img src={image} alt="logo" className="size-8/12 mx-auto" />
      <h2 className="text-center text-7xl font-bold font-outfit">
        That Page Cant Be Found
      </h2>
      <p className="text-center text-gray">
        It looks like nothing was found at this location. Maybe try to search
        for what you are looking for?
      </p>
      <div className="flex justify-center">
        <Link to="/">
          <PrimaryButton className="px-6">Go to Home page</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
