import React, { useContext } from "react";
import { IncomeContext } from "../../../contexts/IncomeContext";
import { exportData } from "../../../util";
import DownloadIcon from "../Icons/DownloadIcon";

export default function DownloadButton() {
  const { incomeData } = useContext(IncomeContext);
  return (
    <button
      className="ml-auto mt-2 flex items-center py-1 px-4 rounded-md border-2 border-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white"
      onClick={() => {
        if (incomeData?.income) exportData(incomeData.income);
      }}
    >
      Download <DownloadIcon />
    </button>
  );
}
