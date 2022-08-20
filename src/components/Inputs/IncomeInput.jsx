import React, { useContext } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";

export default function IncomeInput() {
  const { incomeData, dispatch } = useContext(IncomeContext);

  return (
    <div className="flex border-2 border-gray-200 focus-within:border-blue-400 rounded-md h-10">
      <span className="my-auto pl-2 text-gray-400">$</span>
      <input
        className="flex-1 py-1 px-2 outline-none appearance-none my-2"
        type="number"
        placeholder="e.g 12,000"
        value={incomeData?.income?.value || ""}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INCOME",
            payload: parseFloat(e.target.value),
          })
        }
      />
      <select
        className="outline-none bg-gray-300 text-center text-gray-600 px-2 cursor-pointer"
        value={incomeData.incomeRate}
        onChange={(e) =>
          dispatch({ type: "CHANGE_RATE", payload: e.target.value })
        }
      >
        <option className="bg-white" value="weekly">
          Weekly
        </option>
        <option className="bg-white" value="fortnightly">
          Fortnightly
        </option>
        <option className="bg-white" value="monthly">
          Monthly
        </option>
        <option className="bg-white" value="annually">
          Annually
        </option>
      </select>
    </div>
  );
}
