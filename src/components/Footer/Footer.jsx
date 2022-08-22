import React from "react";
import CompareIcon from "../Util/Icons/CompareIcon";

export default function Footer() {
  return (
    <div className="w-full h-24 flex justify-around items-center bg-sky-200 px-4 lg:px-0">
      <div className="sm:hidden lg:block text-xs">
        <CompareIcon />
      </div>
      <h2 className="text-center lg:text-xl text-sm font-thin">
        Compare lenders and get your finance
      </h2>
      <a
        className="bg-blue-500 shadow-sm rounded-lg py-1 px-3 lg:px-4 text-white lg:text-lg text-sm text-center font-semibold hover:text-blue-400 active:bg-blue-500 active:text-blue-600 active:shadow-none transition-all"
        href="https://github.com/TheDilp"
        target="_blank"
      >
        Apply now
      </a>
    </div>
  );
}
