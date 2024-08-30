// app/components/TransactionModal.tsx
'use client';

import { useState } from 'react';
import { useTransactionStore } from '../stores/transactionStore';

export default function TransactionModal() {
  const { isModalOpen, currentAction, setIsModalOpen } = useTransactionStore();
  const [amount, setAmount] = useState('');

  const handleNumberClick = (num: string) => {
    setAmount((prev) => prev + num);
  };

  const handleClear = () => {
    setAmount('');
  };

  const handleSubmit = () => {
    // Process transaction here
    console.log(`${currentAction} $${amount}`);
    setIsModalOpen(false);
    setAmount('');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAmount('');
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">{currentAction}</h2>
        <input
          type="text"
          value={amount}
          readOnly
          className="w-full text-right text-2xl font-bold mb-4 p-2 border rounded"
        />
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[...'123456789', '0', '.'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="bg-gray-200 rounded p-3 text-xl font-bold hover:bg-gray-300"
            >
              {num}
            </button>
          ))}
          <button onClick={handleClear} className="bg-red-500 text-white rounded p-3 text-xl font-bold col-span-3 hover:bg-red-600">
            Clear
          </button>
        </div>
        <div className="flex justify-between">
          <button onClick={handleCancel} className="bg-gray-500 text-white rounded px-6 py-2 font-bold hover:bg-gray-600">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-green-500 text-white rounded px-6 py-2 font-bold hover:bg-green-600">
            {currentAction}
          </button>
        </div>
      </div>
    </div>
  );
}
