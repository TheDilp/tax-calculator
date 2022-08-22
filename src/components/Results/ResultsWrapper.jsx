import React, { useContext, useState } from "react";
import { formatter, IncomeContext } from "../../contexts/IncomeContext";
import Dropdown from "../Util/Dropdown";
import EnterIncomeWarn from "./EnterIncomeWarn";
import ResultsTable from "./ResultsTable";
export default function ResultsWrapper() {
  const { incomeData } = useContext(IncomeContext);
  const [incomeRate, setIncomeRate] = useState("weekly");

  // If no income is set display message
  if (!incomeData?.income) return <EnterIncomeWarn />;

  return (
    <div className="w-full p-4 lg:flex flex-col gap-y-8 ">
      <div className="mb-4 text-sm lg:text-base font-semibold">
        <span className="text-2xl font-bold mr-4">
          {formatter.format(incomeData.income[`net_${incomeRate}`])}
        </span>
        is your net
        <Dropdown
          value={incomeRate}
          type="display"
          onSelectFrequency={(freq) => setIncomeRate(freq)}
        />
        income
      </div>
      <div className="">
        <ResultsTable />
      </div>
    </div>
  );
}
