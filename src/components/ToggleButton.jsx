import React, { useContext } from "react";
import { IncomeContext } from "../contexts/IncomeContext";

export default function ToggleButton({ title, type }) {
  const { incomeData } = useContext(IncomeContext);
  return (
    <button
      className={`${
        incomeData.incomeType === type ? "bg-blue-500 text-white" : ""
      } shadow-sm rounded-lg py-1 w-1/2 text-lg border-slate-100 border-2 hover:text-blue-400 active:bg-blue-500 active:text-white active:shadow-none transition-colors`}
    >
      {title}
    </button>
  );
}
