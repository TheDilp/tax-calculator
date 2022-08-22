import React, { useContext } from "react";
import { frequencies, IncomeContext } from "../../contexts/IncomeContext";
import Dropdown from "../Util/Dropdown";

export default function IncomeInput() {
  const { incomeData, dispatch } = useContext(IncomeContext);

  return (
    <div className="flex border-2 border-gray-200 focus-within:border-blue-400 rounded-md h-10">
      <span className="my-auto pl-2 text-gray-400">$</span>
      <input
        className="flex-1 py-1 px-2 outline-none appearance-none my-2"
        type="number"
        placeholder="e.g 12,000"
        value={
          incomeData?.income?.[
            `${incomeData.incomeType}_${incomeData.incomeRate}`
          ] || ""
        }
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INCOME",
            payload: parseFloat(e.target.value),
          })
        }
      />
      <Dropdown
        type="input"
        onSelectFrequency={(freq) =>
          dispatch({ type: "CHANGE_RATE", payload: freq })
        }
      />
    </div>
  );
}
