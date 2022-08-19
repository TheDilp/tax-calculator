import React, { createContext, useReducer } from "react";
export const IncomeContext = createContext();

export default function IncomeProvider({ children }) {
  function incomeReducer(state, action) {
    switch (action.type) {
      case "WEEKLY":
        return {
          ...state,
          incomeRate: "Weekly",
          income: {
            weekly: action.payload,
            fortnightly: action.payload * 2,
            monthly: action.payload * 4.33,
            annually: action.payload * 52,
          },
        };
      case "FORTNIGHTLY":
        return {
          ...state,
          incomeRate: "Fortnightly",
          income: {
            weekly: action.payload / 2,
            fortnightly: action.payload,
            monthly: action.payload * 2.165,
            annually: action.payload * 26,
          },
        };

      default:
        return { ...state };
    }
  }

  const [incomeData, dispatch] = useReducer(incomeReducer, {
    income: undefined,
    incomeRate: "Weekly",
    incomeType: "Gross",
  });

  return (
    <IncomeContext.Provider value={{ incomeData, dispatch }}>
      {children}
    </IncomeContext.Provider>
  );
}
