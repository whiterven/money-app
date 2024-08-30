import { create } from 'zustand';

interface TransactionStore {
  isModalOpen: boolean;
  currentAction: string;
  setIsModalOpen: (isOpen: boolean) => void;
  setCurrentAction: (action: string) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  isModalOpen: false,
  currentAction: '',
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setCurrentAction: (action) => set({ currentAction: action }),
}));
