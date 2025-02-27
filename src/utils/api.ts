export const fetchBalanceHistoryData = async () => {
  const response = await fetch("/api/balance-history");
  const data = await response.json();

  return data;
};

export const fetchQuickTransferData = async () => {
  const response = await fetch("/api/quick-transfer");
  const data = await response.json();

  return data;
};
