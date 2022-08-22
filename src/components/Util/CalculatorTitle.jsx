import React from "react";
import CalculatorIcon from "./Icons/CalculatorIcon";

export default function CalculatorTitle() {
  return (
    <div className="hidden h-12 lg:flex items-center justify-center border-b-2 relative px-2 py-2">
      <CalculatorIcon />
      <h1 className="ml-6 text-3xl font-semibold">Income Tax Calculator</h1>
    </div>
  );
}
