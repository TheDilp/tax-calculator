import React, { createContext, useReducer } from "react";
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
        return {
          ...state,
          income: {
            value: action.payload,
            display: formatter.format(action.payload),
          },
        };

      default:
        return { ...state };
    }
  }

  const [incomeData, dispatch] = useReducer(incomeReducer, {
    income: undefined,
    incomeRate: "weekly",
    incomeType: "gross",
  });

  return (
    <IncomeContext.Provider value={{ incomeData, dispatch }}>
      {children}
    </IncomeContext.Provider>
  );
}
