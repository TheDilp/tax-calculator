import React from "react";
import ResultsTable from "./ResultsTable";

export default function ResultsWrapper() {
  return (
    <div className="flex flex-col gap-y-8 w-1/2 p-4">
      <div>
        <span className="text-2xl font-bold mr-4">$1234</span>
        is your weekly income
      </div>
      <div className="">
        <ResultsTable />
      </div>
    </div>
  );
}
