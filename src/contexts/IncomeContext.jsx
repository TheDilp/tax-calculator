import { createContext, useState } from "react";

const IncomeContext = createContext();

export default function IncomeProvider({ children }) {
  const [income, setIncome] = useState(0);
  const [incomeType, setIncomeType] = useState("gross");

  return (
    <IncomeContext.Provider
      value={(income, incomeType, setIncome, setIncomeType)}
    >
      {children}
    </IncomeContext.Provider>
  );
}
