import React, { useContext, useState } from "react";
import { frequencies, IncomeContext } from "../../contexts/IncomeContext";

export default function Dropdown({ value, onSelectFrequency }) {
  const {
    incomeData: { incomeRate },
    dispatch,
  } = useContext(IncomeContext);

  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <span className="inline-flex relative">
      <button
        class="flex items-center px-4 outline-none text-center "
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {/* Display passed down value prop for results OR the global value in context for input */}
        {value || incomeRate}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
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
                  onSelectFrequency(freq.type);
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
