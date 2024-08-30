import { Suspense } from 'react';
import AccountBalance from './components/AccountBalance';
import ActionButtons from './components/ActionButtons';
import TransactionModal from './components/TransactionModal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="w-full max-w-md space-y-8">
        <Suspense fallback={<div>Loading...</div>}>
          <AccountBalance />
        </Suspense>
        <ActionButtons />
        <TransactionModal />
      </div>
    </main>
  );
}
