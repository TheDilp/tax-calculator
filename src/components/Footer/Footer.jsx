import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-24 flex justify-around items-center bg-sky-200">
      <div>ICON HERE</div>
      <h2 className="text-center text-xl font-thin">
        Compare lenders and get your finance
      </h2>
      <button className="bg-blue-500 shadow-sm rounded-lg py-1 px-4 text-white text-lg font-semibold hover:text-blue-400 active:bg-blue-500 active:text-blue-600 active:shadow-none transition-all">
        Apply now
      </button>
    </div>
  );
}
