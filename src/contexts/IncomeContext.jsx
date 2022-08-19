import { createContext, useState } from "react";
import React from "react";
export const IncomeContext = createContext();

export default function IncomeProvider({ children }) {
  const [income, setIncome] = useState(undefined);
  const [incomeType, setIncomeType] = useState("gross");

  return (
    <IncomeContext.Provider
      value={{ income, incomeType, setIncome, setIncomeType }}
    >
      {children}
    </IncomeContext.Provider>
  );
}
