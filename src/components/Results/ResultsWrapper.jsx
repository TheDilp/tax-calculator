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
          const { value: incomeValue } = incomeData.income;
          setIncomeResults({
            weekly: incomeValue,
            fortnightly: incomeValue * 2,
            monthly: incomeValue * 4.33,
            annually: incomeValue * 52,
          });
        } else if (incomeData.incomeRate === "fortnightly") {
          setIncomeResults({
            weekly: incomeValue / 2,
            fortnightly: incomeValue,
            monthly: incomeValue * 2.165,
            annually: incomeValue * 26,
          });
        } else if (incomeData.incomeRate === "monthly") {
          setIncomeResults({
            weekly: incomeValue / 4.33,
            fortnightly: incomeValue / 2.165,
            monthly: incomeValue,
            annually: incomeValue * 12,
          });
        } else if (incomeData.incomeRate === "annually") {
          setIncomeResults({
            weekly: incomeValue / 52,
            fortnightly: incomeValue / 26,
            monthly: incomeValue / 12,
            annually: incomeValue,
          });
        }
      }
    }
  }, [incomeData]);

  // If no income is set display message
  if (!incomeData?.income || !incomeData?.income?.value)
    return <h1>Please enter your income first</h1>;

  return (
    <div className="flex flex-col gap-y-8 w-1/2 p-4">
      <div>
        <span className="text-2xl font-bold mr-4">
          {incomeData.income.display}
        </span>
        is your {incomeRate} net income
      </div>
      <div className="">
        <ResultsTable incomeResults={incomeResults} />
      </div>
    </div>
  );
}
