import React, { useContext, useEffect, useState } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import ResultsTable from "./ResultsTable";

export default function ResultsWrapper() {
  const { incomeData } = useContext(IncomeContext);
  const [incomeRate, setIncomeRate] = useState("weekly");
  const [incomeResults, setIncomeResults] = useState({
    weekly: 0,
    fortnightly: 0,
    monthly: 0,
    annually: 0,
  });

  useEffect(() => {
    if (incomeData?.income) {
      if (incomeData.incomeType === "gross") {
        if (incomeData.incomeRate === "weekly") {
          setIncomeResults({
            weekly: incomeData.income,
            fortnightly: incomeData.income * 2,
            monthly: incomeData.income * 4.33,
            annually: incomeData.income * 52,
          });
        } else if (incomeData.incomeRate === "fortnightly") {
          setIncomeResults({
            weekly: incomeData.income / 2,
            fortnightly: incomeData.income,
            monthly: incomeData.income * 2.165,
            annually: incomeData.income * 26,
          });
        } else if (incomeData.incomeRate === "monthly") {
          setIncomeResults({
            weekly: incomeData.income / 4.33,
            fortnightly: incomeData.income / 2.165,
            monthly: incomeData.income,
            annually: incomeData.income * 12,
          });
        } else if (incomeData.incomeRate === "annually") {
          setIncomeResults({
            weekly: incomeData.income / 52,
            fortnightly: incomeData.income / 26,
            monthly: incomeData.income / 12,
            annually: incomeData.income,
          });
        }
      }
    }
  }, [incomeData]);

  // If no income is set display message
  if (!incomeData?.income) return <h1>Please enter your income first</h1>;

  return (
    <div className="flex flex-col gap-y-8 w-1/2 p-4">
      <div>
        <span className="text-2xl font-bold mr-4">${incomeData.income}</span>
        is your {incomeRate} net income
      </div>
      <div className="">
        <ResultsTable incomeResults={incomeResults} />
      </div>
    </div>
  );
}
