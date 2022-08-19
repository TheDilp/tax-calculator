import React from "react";

export default function Inputs() {
  return (
    <div className="w-1/2 bg-red-500">
      <h2>What is your total income?</h2>
      <div>
        <div>
          <input type="text" placeholder="e.g 12,000" />
          <select defaultValue={"Monthly"}>
            <option value="Weekly">Weekly</option>
            <option value="Fortnightly">Fortnightly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
      </div>
      <div>
        <h2>Please choose the income type</h2>
        <div className="space-x-4">
          <button>Gross Income</button>
          <button>Net Income</button>
        </div>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </div>
  );
}
