export const taxRate = 0.2;

export function calculateIncome(incomeType, incomeRate, payload) {
  let income;
  // If the income type is gross
  if (incomeType === "gross") {
    if (incomeRate === "weekly") {
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
    } else if (incomeRate === "fortnightly") {
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
    } else if (incomeRate === "monthly") {
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
    } else if (incomeRate === "annually") {
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
  else if (incomeType === "net") {
    if (incomeRate === "weekly") {
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
    } else if (incomeRate === "fortnightly") {
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
    } else if (incomeRate === "monthly") {
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
    } else if (incomeRate === "annually") {
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

  return income;
}
