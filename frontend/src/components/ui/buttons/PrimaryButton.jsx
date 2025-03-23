import React from "react";

export default function PrimaryButton({
  children,
  type = "button",
  className = "",
  onClick,
}) {
  return (
    <button
      type={type}
      className={`bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-4 py-2 rounded-lg transition duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
