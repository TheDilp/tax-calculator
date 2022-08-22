import React, { useContext } from "react";
import {
  formatter,
  frequencies,
  IncomeContext,
} from "../../contexts/IncomeContext";
import { taxRate } from "../../util";

export default function ResultsTable() {
  const { incomeData } = useContext(IncomeContext);
  return (
    <table className="w-full text-center">
      <thead>
        <tr className="border-b-2 border-gray-100">
          <th className="text-left">Frequency</th>
          <th>Gross Income</th>
          <th>Tax</th>
          <th>Net Income</th>
        </tr>
      </thead>
      <tbody className="">
        {frequencies.map((freq) => (
          <tr
            key={freq.title}
            className="text-sm lg:text-base even:border-y-2 border-gray-50 hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
          >
            <td className="text-left py-3 px-2">{freq.title}</td>
            <td>{formatter.format(incomeData.income[`gross_${freq.type}`])}</td>
            <td>
              {formatter.format(
                incomeData.income[`gross_${freq.type}`] * taxRate
              )}
            </td>
            <td>{formatter.format(incomeData.income[`net_${freq.type}`])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
