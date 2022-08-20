import React, { useContext, useState } from "react";
import { frequencies, IncomeContext } from "../../contexts/IncomeContext";

export default function Dropdown({ frequency }) {
  const {
    incomeData: { incomeRate },
    dispatch,
  } = useContext(IncomeContext);

  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <span className="inline-flex relative">
      <button
        class="bg-gray-300 px-4 outline-none text-center "
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {incomeRate}
      </button>
      {showDropdown && (
        <div class="z-10 absolute w-44 top-10 divide-y divide-gray-100">
          <ul class="rounded-md text-sm text-gray-700 w-21 border-2 border-gray-200">
            {frequencies.map((freq) => (
              <li
                key={freq.title}
                className="bg-white py-2 cursor-pointer text-center hover:bg-blue-300"
                value={freq.type}
                onClick={() => {
                  dispatch({ type: "CHANGE_RATE", payload: freq.type });
                  setShowDropdown(false);
                }}
              >
                {freq.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
}
