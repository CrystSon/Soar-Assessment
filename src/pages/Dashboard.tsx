import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { lazy, Suspense } from 'react';

const MyCards = lazy(() => import('../components/dashboard/MyCards'));
const RecentTransactions = lazy(() => import('../components/dashboard/RecentTransactions'));
const WeeklyActivity = lazy(() => import('../components/dashboard/WeeklyActivity'));
const ExpenseStatistics = lazy(() => import('../components/dashboard/ExpenseStatistics'));
const QuickTransfer = lazy(() => import('../components/dashboard/QuickTransfer'));
const BalanceHistory = lazy(() => import('../components/dashboard/BalanceHistory'));

export default function Dashboard() {
  const cards = useSelector((state: RootState) => state.cards);
  const transactions = useSelector((state: RootState) => state.transactions);

  return (
    <div className="space-y-0 lg:space-y-6 px-4">
      <div className="grid grid-cols-12 gap-0 lg:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Suspense fallback={<div className="h-full lg:rounded-lg animate-pulse" />}>
            <div className="h-full lg:rounded-lg">
              <MyCards cards={cards} />
            </div>
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Suspense fallback={<div className="h-full lg:rounded-lg animate-pulse" />}>
            <div className="h-full lg:rounded-lg">
              <RecentTransactions transactions={transactions} />
            </div>
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-0 lg:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Suspense fallback={<div className="h-full lg:rounded-lg animate-pulse" />}>
            <div className="h-full lg:rounded-lg">
              <WeeklyActivity transactions={transactions} />
            </div>
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Suspense fallback={<div className="h-full lg:rounded-lg animate-pulse" />}>
            <div className="h-full lg:rounded-lg">
              <ExpenseStatistics transactions={transactions} />
            </div>
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-0 lg:gap-6">
        <div className="col-span-12 lg:col-span-5">
          <Suspense fallback={<div className="h-full lg:rounded-lg animate-pulse" />}>
            <div className="h-full lg:rounded-lg">
              <QuickTransfer />
            </div>
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <Suspense fallback={<div className="h-full lg:rounded-lg animate-pulse" />}>
            <div className="h-full lg:rounded-lg">
              <BalanceHistory/>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
