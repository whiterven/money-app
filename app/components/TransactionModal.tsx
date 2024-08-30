'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTransactionStore } from '../stores/transactionStore';

export default function TransactionModal() {
  const { isModalOpen, currentAction, setIsModalOpen } = useTransactionStore();
  const [amount, setAmount] = useState('');

  const handleNumberClick = (num: string) => {
    setAmount((prev) => {
      if (num === '.' && prev.includes('.')) return prev;
      if (prev === '0' && num !== '.') return num;
      return prev + num;
    });
  };

  const handleClear = () => setAmount('0');

  const handleSubmit = () => {
    console.log(`${currentAction} $${amount}`);
    setIsModalOpen(false);
  };

  const handleCancel = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) setAmount('0');
  }, [isModalOpen]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-gray-800 rounded-lg p-6 w-full max-w-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">{currentAction}</h2>
            <input
              type="text"
              value={amount}
              readOnly
              className="w-full text-right text-2xl font-bold mb-4 p-2 border rounded bg-gray-700 text-white"
            />
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[...'123456789', '0', '.'].map((num) => (
                <motion.button
                  key={num}
                  onClick={() => handleNumberClick(num)}
                  className="bg-gray-600 rounded p-3 text-xl font-bold text-white hover:bg-gray-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {num}
                </motion.button>
              ))}
              <motion.button
                onClick={handleClear}
                className="bg-red-500 text-white rounded p-3 text-xl font-bold col-span-3 hover:bg-red-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Clear
              </motion.button>
            </div>
            <div className="flex justify-between">
              <motion.button
                onClick={handleCancel}
                className="bg-gray-500 text-white rounded px-6 py-2 font-bold hover:bg-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={handleSubmit}
                className="bg-green-500 text-white rounded px-6 py-2 font-bold hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentAction}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}