import React, { useContext, useEffect, useState } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import ResultsTable from "./ResultsTable";

export default function ResultsWrapper() {
  const { incomeData } = useContext(IncomeContext);
  const [incomeRate, setIncomeRate] = useState("weekly");
  const [incomeResults, setIncomeResults] = useState({
    weekly: 0,
    fornightly: 0,
    monthly: 0,
    annually: 0,
  });

  useEffect(() => {
    if (incomeData?.income) {
      if (incomeData.incomeType === "gross") {
        if (incomeData.incomeRate) {
        }
      }
    }
  }, [incomeData?.income]);

  // If no income is set display message
  if (!incomeData?.income) return <h1>Please enter your income first</h1>;

  return (
    <div className="flex flex-col gap-y-8 w-1/2 p-4">
      <div>
        <span className="text-2xl font-bold mr-4">${incomeData.income}</span>
        is your {incomeRate} net income
      </div>
      <div className="">
        <ResultsTable />
      </div>
    </div>
  );
}
