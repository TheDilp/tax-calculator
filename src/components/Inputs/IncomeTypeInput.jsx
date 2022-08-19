import React from "react";
import ToggleButton from "../ToggleButton";

export default function IncomeTypeInput() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-center text-xl font-semibold">
        Please choose the income type
      </h2>
      <div className="flex space-x-4">
        <ToggleButton title="Gross Income" />
        <ToggleButton title="Net Income" />
      </div>
    </div>
  );
}
