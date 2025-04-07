import React from "react";
import { twMerge } from "tailwind-merge";

export default function PrimaryButton({
  children,
  type = "button",
  className = "",
  onClick,
}) {
  return (
    <button
      type={type}
      className={twMerge(
        `bg-primary hover:bg-purple-500 cursor-pointer text-white font-normal px-4 py-2 rounded-lg transition duration-300 ${className}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
