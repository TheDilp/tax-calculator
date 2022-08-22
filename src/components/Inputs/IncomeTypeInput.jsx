import React from "react";
import ToggleButton from "../Util/Buttons/ToggleButton";

export default function IncomeTypeInput() {
  return (
    <div className="w-full space-y-4 mt-5 lg:mt-0">
      <h2 className="text-center text-xl font-semibold">
        Please choose the income type
      </h2>
      <div className="flex space-x-4">
        <ToggleButton title="Gross Income" type="gross" />
        <ToggleButton title="Net Income" type="net" />
      </div>
    </div>
  );
}
