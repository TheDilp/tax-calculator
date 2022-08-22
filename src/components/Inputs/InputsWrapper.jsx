import React from "react";
import IncomeTypeInput from "./IncomeTypeInput";
import IncomeInput from "./IncomeInput";

export default function InputsWrapper() {
  return (
    <div className="flex flex-col justify-evenly w-full border-r-2 border-gray-50 p-4">
      <div className="w-full space-y-4">
        <h2 className="text-center text-xl font-semibold">
          What is your total income?
        </h2>
        <IncomeInput />
      </div>

      <IncomeTypeInput />
    </div>
  );
}
