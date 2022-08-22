import React from "react";

export default function CalcButton({ onClick }) {
  return (
    <div className="w-full px-4">
      <button
        className="lg:hidden w-full mx-auto shadow-sm rounded-lg py-2 text-lg border-slate-100 border-2 bg-blue-500 text-white hover:text-blue-200 active:bg-blue-200 active:text-white active:shadow-none transition-colors"
        onClick={onClick}
      >
        Calculate
      </button>
    </div>
  );
}
