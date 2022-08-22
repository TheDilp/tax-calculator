import React, { createContext, useEffect, useReducer } from "react";
import { calculateIncome, taxRate } from "../util";
export const IncomeContext = createContext();

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export const frequencies = [
  { title: "Weekly", type: "weekly" },
  { title: "Fortnightly", type: "fortnightly" },
  { title: "Monthly", type: "monthly" },
  { title: "Annually", type: "annually" },
];
export default function IncomeProvider({ children }) {
  function incomeReducer(state, action) {
    switch (action.type) {
      case "CHANGE_RATE":
        return { ...state, incomeRate: action.payload };
      case "CHANGE_TYPE":
        return { ...state, incomeType: action.payload };
      case "CHANGE_INCOME":
        const { payload } = action;
        let income = calculateIncome(
          state.incomeType,
          state.incomeRate,
          payload
        );

        return { ...state, income };

      default:
        return { ...state };
    }
  }

  const [incomeData, dispatch] = useReducer(incomeReducer, {
    income: undefined,
    incomeRate: "weekly",
    incomeType: "gross",
  });

  useEffect(() => {}, [incomeData.incomeType]);

  return (
    <IncomeContext.Provider value={{ incomeData, dispatch }}>
      {children}
    </IncomeContext.Provider>
  );
}
