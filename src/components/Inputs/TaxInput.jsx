import React from "react";

export default function TaxInput() {
  return (
    <div className="flex border-2 border-gray-200 focus-within:border-blue-400 rounded-md h-10">
      <input
        className="flex-1 py-1 px-2 outline-none appearance-none my-2"
        type="number"
        placeholder="e.g 12,000"
      />
      <select
        className="outline-none bg-gray-300 text-gray-600 px-2"
        defaultValue={"Monthly"}
      >
        <option value="Weekly">Weekly</option>
        <option value="Fortnightly">Fortnightly</option>
        <option value="Monthly">Monthly</option>
        <option value="Annually">Annually</option>
      </select>
    </div>
  );
}
