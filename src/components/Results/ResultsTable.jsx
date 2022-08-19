import React from "react";

export default function ResultsTable({ incomeResults }) {
  const frequencies = [
    { title: "Weekly", type: "weekly" },
    { title: "Fortnightly", type: "fortnightly" },
    { title: "Monthly", type: "monthly" },
    { title: "Annually", type: "annually" },
  ];
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
            <td className="text-left py-3">{freq.title}</td>
            <td>${incomeResults[freq.type]}</td>
            <td>${(incomeResults[freq.type] * 0.2).toFixed(2)}</td>
            <td>
              $
              {(
                incomeResults[freq.type] -
                incomeResults[freq.type] * 0.2
              ).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
