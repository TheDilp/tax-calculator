import React from "react";
import IncomeTypeInput from "./IncomeTypeInput";
import IncomeInput from "./IncomeInput";

export default function InputsWrapper() {
  return (
    <div className="flex flex-col gap-y-8 w-1/2 border-r-2 border-gray-50 p-4">
      <div className="w-full space-y-4">
        <h2 className="text-center text-xl font-semibold">
          What is your total income?
        </h2>
        <IncomeInput />
      </div>

      <IncomeTypeInput />
      <div className="flex w-full">
        <button className="w-1/2 mx-auto shadow-sm rounded-lg py-2 text-lg border-slate-100 border-2 bg-blue-500 text-white hover:text-blue-200 active:bg-blue-200 active:text-white active:shadow-none transition-colors">
          Calculate
        </button>
      </div>
    </div>
  );
}
