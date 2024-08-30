'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AccountBalance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Simulating balance fetch
    setBalance(1000);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-300 mb-2">Account Balance</h2>
      <motion.p 
        className="text-4xl font-bold text-white"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        ${balance.toFixed(2)}
      </motion.p>
    </motion.div>
  );
}