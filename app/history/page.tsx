'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BottomNavBar from '../components/BottomNavBar';

interface Transaction {
  id: number;
  type: 'pay' | 'receive' | 'withdraw' | 'add';
  amount: number;
  date: string;
}

export default function History() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Simulating fetching transaction history
    const mockTransactions: Transaction[] = [
      { id: 1, type: 'pay', amount: 50, date: '2023-08-01' },
      { id: 2, type: 'receive', amount: 100, date: '2023-08-02' },
      { id: 3, type: 'withdraw', amount: 200, date: '2023-08-03' },
      { id: 4, type: 'add', amount: 500, date: '2023-08-04' },
    ];
    setTransactions(mockTransactions);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <motion.li
            key={transaction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 p-4 rounded"
          >
            <p className="font-bold capitalize">{transaction.type}</p>
            <p className="text-lg">${transaction.amount}</p>
            <p className="text-sm text-gray-400">{transaction.date}</p>
          </motion.li>
        ))}
      </ul>
      <BottomNavBar />
    </div>
  );
}