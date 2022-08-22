import React from "react";
import { formatter, frequencies } from "../../contexts/IncomeContext";
import { taxRate } from "../../util";

export default function ResultsTable({ incomeResults }) {
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
            className="even:border-y-2 border-gray-50 hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
          >
            <td className="text-left py-3">{freq.title}</td>
            <td>{formatter.format(incomeResults[freq.type])}</td>
            <td>{formatter.format(incomeResults[freq.type] * taxRate)}</td>
            <td>
              {formatter.format(
                incomeResults[freq.type] - incomeResults[freq.type] * taxRate
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
