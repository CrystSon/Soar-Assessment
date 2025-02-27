import { Transaction } from "../../types";
import CardIcon from "../../assets/Card.svg";
import PaypalIcon from "../../assets/paypal.svg";
import PersonIcon from "../../assets/Person.svg";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  return (
    <div className="rounded-2xl">
      <div className="py-4">
        <h2 className="text-2xl font-semibold text-[#343C6A]">
          Recent Transactions
        </h2>
      </div>
      <div className="grid px-6 bg-white rounded-2xl min-h-[242px]">
        {transactions.slice(0, 3).map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full text-2xl">
                <img
                  src={
                    transaction.serviceProvider === "Paypal"
                      ? PaypalIcon
                      : transaction.serviceProvider === "Card"
                      ? CardIcon
                      : PersonIcon
                  }
                  alt={transaction.serviceProvider}
                  loading="lazy"
                  className="w-12 h-12"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-[#343C6A] lg:text-base">
                  {transaction.description}
                </p>
                <p className="text-xs text-gray-500 lg:text-base">
                  {new Date(transaction.date).toDateString()}
                </p>
              </div>
            </div>
            <div
              className={`text-sm font-medium ${
                transaction.type === "deposit"
                  ? "text-green-600"
                  : "text-red-600"
              } lg:text-base`}
            >
              {transaction.type === "deposit" ? "+" : "-"}$
              {transaction.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
