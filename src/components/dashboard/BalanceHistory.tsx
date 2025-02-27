import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { fetchBalanceHistoryData } from '../../utils/api';

export default function BalanceHistory() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBalanceHistoryData();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="h-full">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#343C6A]">
          Balance History
          </h2>
        </div>
        <div className="bg-white rounded-2xl p-6 relative h-[300px]">
          <ResponsiveContainer width="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0000FF" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#0000FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#0000FF"
                strokeWidth={2}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
