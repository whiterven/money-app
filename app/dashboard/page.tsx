import AccountBalance from '../components/AccountBalance';
import ActionButtons from '../components/ActionButtons';
import TransactionModal from '../components/TransactionModal';
import BottomNavBar from '../components/BottomNavBar';

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-md space-y-8 mb-20">
        <AccountBalance />
        <ActionButtons />
        <TransactionModal />
      </div>
      <BottomNavBar />
    </main>
  );
}