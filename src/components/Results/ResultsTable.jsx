import React, { useContext } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";

export default function ResultsTable() {
  const { income: incomeData } = useContext(IncomeContext);
  const frequencies = ["Weekly", "Fortnightly", "Monthly", "Annually"];
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
            key={freq}
            className="even:border-y-2 border-gray-50 hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
          >
            <td className="text-left py-3">{freq}</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
