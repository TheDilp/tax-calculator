import React from "react";
import CalculatorIcon from "./Icons/CalculatorIcon";
import DownloadIcon from "./Icons/DownloadIcon";

export default function CalculatorTitle() {
  return (
    <div className="hidden lg:flex items-center border-b-2 relative px-2 py-2">
      <CalculatorIcon />
      <h1 className="ml-6 text-3xl font-semibold">Income Tax Calculator</h1>
      <button className="ml-auto flex items-center py-1 px-4 rounded-md border-2 border-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white">
        Download <DownloadIcon />
      </button>
    </div>
  );
}
