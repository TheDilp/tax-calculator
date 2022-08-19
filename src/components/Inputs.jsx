import React from "react";
import ToggleButton from "./ToggleButton";

export default function Inputs() {
  return (
    <div className="flex flex-col gap-y-8 w-1/2 border-r-2 border-gray-300 p-4">
      <div className="w-full space-y-4">
        <h2 className="text-center text-xl font-semibold">
          What is your total income?
        </h2>
        <div className="flex border-2 border-blue-400 rounded-lg p-1">
          <input
            className="flex-1 py-1 px-2 outline-none appearance-none"
            type="number"
            placeholder="e.g 12,000"
          />
          <select className="outline-none" defaultValue={"Monthly"}>
            <option value="Weekly">Weekly</option>
            <option value="Fortnightly">Fortnightly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
      </div>

      <div className="w-full space-y-4">
        <h2 className="text-center text-xl font-semibold">
          Please choose the income type
        </h2>
        <div className="flex space-x-4">
          <ToggleButton title="Gross Income" />
          <ToggleButton title="Net Income" />
        </div>
      </div>
      <div className="flex w-full">
        <button className="w-1/2 mx-auto shadow-sm rounded-lg py-2 text-lg border-slate-100 border-2 bg-blue-500 text-white hover:text-blue-200 active:bg-blue-200 active:text-white active:shadow-none transition-colors">
          Calculate
        </button>
      </div>
    </div>
  );
}
