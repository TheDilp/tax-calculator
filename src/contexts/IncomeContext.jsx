import React, { createContext, useReducer } from "react";
import { taxRate } from "../util";
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
        let income;
        const { payload } = action;

        // If the income type is gross
        if (state.incomeType === "gross") {
          if (state.incomeRate === "weekly") {
            income = {
              gross_weekly: payload,
              gross_fortnightly: payload * 2,
              gross_monthly: payload * 4.3333333,
              gross_annually: payload * 52,

              net_weekly: payload - payload * taxRate,
              net_fortnightly: payload * 2 - payload * 2 * taxRate,
              net_monthly: payload * 4.3333333 - payload * 4.3333333 * taxRate,
              net_annually: payload * 52 - payload * 52 * taxRate,
            };
          } else if (state.incomeRate === "fortnightly") {
            income = {
              gross_weekly: payload / 2,
              gross_fortnightly: payload,
              gross_monthly: payload * 2.165,
              gross_annually: payload * 26,

              net_weekly: payload / 2 - (payload / 2) * taxRate,
              net_fortnightly: payload - payload * taxRate,
              net_monthly: payload * 2.165 - payload * 2.165 * taxRate,
              net_annually: payload * 26 - payload * 26 * taxRate,
            };
          } else if (state.incomeRate === "monthly") {
            income = {
              gross_weekly: payload / 4.33,
              gross_fortnightly: payload / 2.165,
              gross_monthly: payload,
              gross_annually: payload * 12,

              net_weekly: payload / 4.33 - (payload / 4.33) * taxRate,
              net_fortnightly: payload / 2.165 - (payload / 2.165) * taxRate,
              net_monthly: payload - payload * taxRate,
              net_annually: payload * 12 - payload * 12 * taxRate,
            };
          } else if (state.incomeRate === "annually") {
            income = {
              gross_weekly: payload / 52,
              gross_fortnightly: payload / 26,
              gross_monthly: payload / 12,
              gross_annually: payload,

              net_weekly: payload / 52 - (payload / 52) * taxRate,
              net_fortnightly: payload / 26 - (payload / 26) * taxRate,
              net_monthly: payload / 12 - (payload / 12) * taxRate,
              net_annually: payload - payload * taxRate,
            };
          }
        }

        // If the income type is net
        else if (state.incomeType === "net") {
          if (state.incomeRate === "weekly") {
            income = {
              gross_weekly: payload / 0.8,
              gross_fortnightly: (payload * 2) / 0.8,
              gross_monthly: (payload * 4.3333333) / 0.8,
              gross_annually: (payload * 52) / 0.8,

              net_weekly: payload,
              net_fortnightly: payload * 2,
              net_monthly: payload * 4.3333333,
              net_annually: payload * 52,
            };
          } else if (state.incomeRate === "fortnightly") {
            income = {
              gross_weekly: payload / 2 / 0.8,
              gross_fortnightly: payload / 0.8,
              gross_monthly: (payload * 2.165) / 0.8,
              gross_annually: (payload * 26) / 0.8,

              net_weekly: payload / 2,
              net_fortnightly: payload,
              net_monthly: payload * 2.165,
              net_annually: payload * 26,
            };
          } else if (state.incomeRate === "monthly") {
            income = {
              gross_weekly: payload / 4.33 / 0.8,
              gross_fortnightly: payload / 2.165 / 0.8,
              gross_monthly: payload / 0.8,
              gross_annually: (payload * 12) / 0.8,

              net_weekly: payload / 4.33,
              net_fortnightly: payload / 2.165,
              net_monthly: payload,
              net_annually: payload * 12,
            };
          } else if (state.incomeRate === "annually") {
            income = {
              gross_weekly: payload / 52 / 0.8,
              gross_fortnightly: payload / 26 / 0.8,
              gross_monthly: payload / 12 / 0.8,
              gross_annually: payload / 0.8,

              net_weekly: payload / 52,
              net_fortnightly: payload / 26,
              net_monthly: payload / 12,
              net_annually: payload,
            };
          }
        }
        return {
          ...state,
          income,
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
