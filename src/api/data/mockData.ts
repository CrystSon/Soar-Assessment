const mockData = {
  cards: [
    {
      id: "1",
      name: "Main Card",
      balance: 2500.75,
      last4Digits: "1234",
      color: "#3b82f6",
    },
    {
      id: "2",
      name: "Savings Card",
      balance: 6000.5,
      last4Digits: "5678",
      color: "#10b981",
    },
  ],
  transactions: [
    { id: "1", name: "Grocery Store", amount: -45.99, date: "2024-02-01" },
    { id: "2", name: "Salary", amount: 1500.0, date: "2024-02-02" },
    { id: "3", name: "Coffee Shop", amount: -4.5, date: "2024-02-03" },
  ],
  weeklyActivity: [
    { day: "Mon", deposit: 300, withdraw: 150 },
    { day: "Tue", deposit: 200, withdraw: 50 },
    { day: "Wed", deposit: 250, withdraw: 75 },
    { day: "Thu", deposit: 150, withdraw: 100 },
    { day: "Fri", deposit: 400, withdraw: 200 },
  ],
  expenseStatistics: [
    { category: "Food", value: 400 },
    { category: "Transport", value: 150 },
    { category: "Shopping", value: 300 },
    { category: "Entertainment", value: 100 },
  ],
  balanceHistory: [
    { name: "Jul", value: 200 },
    { name: "Aug", value: 300 },
    { name: "Sep", value: 500 },
    { name: "Oct", value: 800 },
    { name: "Nov", value: 400 },
    { name: "Dec", value: 300 },
    { name: "Jan", value: 600 },
  ],
  quickTransfer: [
    {
      id: "1",
      name: "Livia Bator",
      role: "CEO",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
    {
      id: "2",
      name: "Randy Press",
      role: "Director",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
    {
      id: "3",
      name: "Workman",
      role: "Designer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    },
    {
      id: "4",
      name: "Sarah Chen",
      role: "Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
    {
      id: "5",
      name: "Marcus Rodriguez",
      role: "Developer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    {
      id: "6",
      name: "Emma Wilson",
      role: "Marketing Lead",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    },
    {
      id: "7",
      name: "James Cooper",
      role: "Sales Director",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
    },
    {
      id: "8",
      name: "Nina Patel",
      role: "UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
    },
    {
      id: "9",
      name: "David Kim",
      role: "Tech Lead",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100",
    },
    {
      id: "10",
      name: "Sophie Taylor",
      role: "HR Manager",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    },
  ],
};

export default mockData;
