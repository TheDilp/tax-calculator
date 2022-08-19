import React from "react";
import ResultsTable from "./ResultsTable";

export default function Results() {
  return (
    <div className="flex flex-col gap-y-8 w-1/2 p-4">
      <div>$1234 your net WEEKLY income</div>
      <div className="">
        <ResultsTable />
      </div>
    </div>
  );
}
