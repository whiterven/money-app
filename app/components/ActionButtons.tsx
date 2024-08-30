'use client';

import { motion } from 'framer-motion';
import { useTransactionStore } from '../stores/transactionStore';

const actions = ['Pay', 'Receive', 'Withdraw', 'Add funds'];

export default function ActionButtons() {
  const { setCurrentAction, setIsModalOpen } = useTransactionStore();

  const handleAction = (action: string) => {
    setCurrentAction(action);
    setIsModalOpen(true);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action, index) => (
        <motion.button
          key={action}
          onClick={() => handleAction(action)}
          className="bg-gray-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {action}
        </motion.button>
      ))}
    </div>
  );
}