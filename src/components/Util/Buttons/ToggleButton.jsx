import React, { useContext } from "react";
import { IncomeContext } from "../../../contexts/IncomeContext";

export default function ToggleButton({ title, type }) {
  const { incomeData, dispatch } = useContext(IncomeContext);
  return (
    <button
      className={`${
        incomeData.incomeType === type
          ? "bg-blue-500 text-white active:bg-blue-500 active:text-blue-600"
          : "active:bg-blue-500 active:text-white"
      } shadow-sm rounded-lg py-1 w-1/2 text-lg border-slate-100 border-2 hover:text-blue-400  active:shadow-none transition-all`}
      onClick={() => dispatch({ type: "CHANGE_TYPE", payload: type })}
    >
      {title}
    </button>
  );
}
