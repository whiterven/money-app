'use client';

import { useTransactionStore } from '../stores/transactionStore';

export default function ActionButtons() {
  const { setCurrentAction, setIsModalOpen } = useTransactionStore();

  const handleAction = (action: string) => {
    setCurrentAction(action);
    setIsModalOpen(true);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {['Pay', 'Receive', 'Withdraw', 'Add funds'].map((action) => (
        <button
          key={action}
          onClick={() => handleAction(action)}
          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
        >
          {action}
        </button>
      ))}
    </div>
  );
}
