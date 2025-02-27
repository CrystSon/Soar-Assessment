import { http, HttpResponse } from "msw";
import mockData from "./data/mockData";

export const handlers = [
  http.get("/api/cards", () => {
    return HttpResponse.json(mockData.cards);
  }),

  http.get("/api/quick-transfer", () => {
    return HttpResponse.json(mockData.quickTransfer);
  }),

  http.get("/api/weekly-activity", () => {
    return HttpResponse.json(mockData.weeklyActivity);
  }),

  http.get("/api/expense-statistics", () => {
    return HttpResponse.json(mockData.expenseStatistics);
  }),

  http.get("/api/balance-history", () => {
    console.log(mockData.balanceHistory);
    return HttpResponse.json(mockData.balanceHistory);
  }),
];
