import React from "react";

const Input = (props) => {
  const { type, name, placeholder, className, buttonText } = props;
  return (
    <>
      <div className="w-full max-w-sm min-w-full">
        <div className="relative">
          <button
            className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
            type="button"
          >
            {buttonText}
          </button>
          <input
            className={`bg-white w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow ${className}`}
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
