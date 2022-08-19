import React from "react";

export default function ResultsTable() {
  const frequencies = ["Weekly", "Fortnightly", "Monthly", "Annually"];
  return (
    <table class="w-full text-center">
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
          <tr key={freq} className="even:border-y-2 border-gray-50">
            <td className="text-left">{freq}</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
