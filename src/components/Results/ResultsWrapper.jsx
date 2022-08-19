import React, { useContext } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import ResultsTable from "./ResultsTable";

export default function ResultsWrapper() {
  const { incomeData } = useContext(IncomeContext);
  console.log(incomeData);
  if (!incomeData?.income) return <h1>Please enter your income first</h1>;
  return (
    <div className="flex flex-col gap-y-8 w-1/2 p-4">
      <div>
        <span className="text-2xl font-bold mr-4">$1234</span>
        is your {incomeData.incomeRate} income
      </div>
      <div className="">
        <ResultsTable />
      </div>
    </div>
  );
}
