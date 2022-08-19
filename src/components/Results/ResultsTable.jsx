import React from "react";

export default function ResultsTable() {
  return (
    <table class="w-full text-center">
      <thead>
        <tr>
          <th className="text-left">Frequency</th>
          <th>Gross Income</th>
          <th>Tax</th>
          <th>Net Income</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left">Weekly</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
          <td>1961</td>
        </tr>
        <tr>
          <td className="text-left">Fortnightly</td>
          <td>The Eagles</td>
          <td>1972</td>
          <td>1972</td>
        </tr>
        <tr>
          <td className="text-left">Montly</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
          <td>1975</td>
        </tr>
        <tr>
          <td className="text-left">Annually</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
}
